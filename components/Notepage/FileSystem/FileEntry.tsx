import React, { Dispatch, SetStateAction } from "react";

type FileEntryProps = {
  noteId: string;
  setNoteId: Dispatch<SetStateAction<string>>;
  noteHeader: string;
};

export default function FileEntry({
  noteId,
  setNoteId,
  noteHeader,
}: FileEntryProps) {
  return (
    <li
      onClick={() => setNoteId(noteId)}
      className="hover:border-black hover:border-4"
      data-note-id={noteId}
    >
      <h1>{noteHeader}</h1>
    </li>
  );
}
