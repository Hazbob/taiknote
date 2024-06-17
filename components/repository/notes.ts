"use server";
import { db } from "@/server";
import { notesContent, notesMain, users } from "@/server/schema";
import { eq } from "drizzle-orm";
import handler, { nextConfig } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getSession } from "next-auth/react";

export async function createNewNote(
  noteText: string,
  fileId: string | undefined,
  header: string
) {
  try {
    const session = await getServerSession(nextConfig);

    //validation for session
    if (!session || !session.user || !session.user.email) {
      throw new Error("Invalid session or user not authenticated");
    }
    //check user exists
    const [user] = await db
      .select()
      .from(users)
      .where(eq(users.id, session?.user.id));
    //checks if no user has been returned from the db
    if (!user) {
      throw new Error("User not found");
    }

    //makes sure that the note next is valid
    if (typeof noteText !== "string" || noteText.trim() === "") {
      throw new Error("Invalid note text");
    }

    const [newNote] = await db
      .insert(notesContent)
      .values({ content: noteText, userId: user.id, header: header })
      .returning({ insertedId: notesContent.id });

    const newNoteId = newNote.insertedId;

    await db.insert(notesMain).values({
      userId: user.id,
      noteId: newNoteId,
      fileId: fileId || null,
      header: header,
    });
  } catch (error) {
    console.error("Error creating new note:", error);
    throw error;
  }
}

export async function getAllUsersNoteData() {
  try {
    const session = await getServerSession(nextConfig);
    const { user } = session;
    const notes = await db
      .select()
      .from(notesMain)
      .where(eq(notesMain.userId, user.id));

    const noteData = notes.map((note) => {
      return {
        noteId: note.noteId,
        noteHeader: note.header,
      };
    });

    return noteData;
  } catch (error) {
    console.error("Error fetching user notes");
    throw error;
  }
}

export async function getNoteById(noteId: string) {
  try {
    const [note] = await db
      .selectDistinct()
      .from(notesContent)
      .where(eq(notesContent.id, noteId));
    return note;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
