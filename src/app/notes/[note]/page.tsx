"use client";
import Notebox from "../../../../components/Notepage/Notebox/Notebox";
import FileContainer from "../../../../components/Notepage/FileSystem/FileContainer";
import useSpeechRecognition from "../../../../hooks/useSpeechRecognition";
import { getServerSession } from "next-auth";
import { use, useEffect, useState } from "react";
import { getNoteById } from "../../../../components/repository/notes";
export default function HomePage() {
  const { text, toggleListening, isListening, hasRecognitionSupport, setText } =
    useSpeechRecognition();

  const [fildId, setFileId] = useState("");
  const [note, setNote] = useState("");
  const [noteId, setNoteId] = useState("");
  const [noteData, setNoteData] = useState<
    { noteId: string; noteHeader: string | null }[]
  >([]);

  useEffect(() => {
    async function fetchNote() {
      const note = await getNoteById(noteId);
      setNote(note.content);
    }
    if (noteId) {
      fetchNote();
    }
  }, [noteId]);

  return (
    <div className={"w-full h-5/6 flex-row flex p-2"}>
      <FileContainer
        isListening={isListening}
        toggleListening={toggleListening}
        setFileId={setFileId}
        setNoteId={setNoteId}
        setNoteData={setNoteData}
        noteData={noteData}
      />
      <Notebox
        hasRecognitionSupport={hasRecognitionSupport}
        isListening={isListening}
        setText={setText}
        text={text}
        toggleListening={toggleListening}
        note={note}
      />
    </div>
  );
}
