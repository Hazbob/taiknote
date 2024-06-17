import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { createNewNote } from "../../repository/notes";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";

type Props = {
  text: string;
  toggleListening: () => void;
  isListening: boolean;
  hasRecognitionSupport: boolean;
  setText: Dispatch<SetStateAction<string>>;
  fileId?: string;
  note?: string;
};

export default function Notebox({
  text,
  toggleListening,
  isListening,
  hasRecognitionSupport,
  setText,
  fileId,
  note,
}: Props) {
  const [textHeader, setTextHeader] = useState("");

  function handleCreatingNewNote() {
    createNewNote(text, fileId, textHeader);
  }

  useEffect(() => {
    if (note) {
      setText(note);
    }
  }, [note, setText]);
  return (
    <div className={"h-full w-5/6 my-2"}>
      {isListening && <div>your browser is currently listening</div>}
      <button onClick={() => handleCreatingNewNote()}>hello</button>
      <Input
        required={true}
        className="mb-8"
        placeholder="Header"
        type="text"
        onChange={(e) => setTextHeader(e.target.value)}
        value={textHeader}
      />
      <Textarea
        onChange={(e) => setText(e.target.value)}
        value={text}
        className={"p-10 bg-white textarea textarea-bordered w-full h-full"}
        placeholder={"note"}
      ></Textarea>
    </div>
  );
}
