import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Toolbar from "../Toolbar";
import { getAllUsersNoteData } from "../../repository/notes";
import FileEntry from "./FileEntry";

type Props = {
  isListening: boolean;
  toggleListening: () => void;
  setFileId: Dispatch<SetStateAction<string>>;
  setNoteId: Dispatch<SetStateAction<string>>;
  setNoteData: Dispatch<{ noteId: string; noteHeader: string | null }[]>;
  noteData: { noteId: string; noteHeader: string | null }[];
};

export default function FileContainer({
  isListening,
  toggleListening,
  setFileId,
  setNoteId,
  setNoteData,
  noteData,
}: Props) {
  useEffect(() => {
    async function fetchNotes() {
      const notesHeaderAndId = await getAllUsersNoteData();
      setNoteData(notesHeaderAndId);
    }
    fetchNotes();
  }, []);

  return (
    <div className={"w-1/6 h-full bg-white m-2 rounded-xl"}>
      <Toolbar isListening={isListening} toggleListening={toggleListening} />
      {noteData.map((note) => (
        <FileEntry
          setNoteId={setNoteId}
          key={note.noteId}
          noteId={note.noteId}
          noteHeader={note.noteHeader || "no header"}
        />
      ))}
    </div>
  );
}
