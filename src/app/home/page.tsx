"use client"
import Notebox from "../../../components/Notepage/Notebox/Notebox";
import FileContainer from "../../../components/Notepage/FileSystem/FileContainer";
import NotePageHeader from "../../../components/Notepage/NotePageHeader";
import useSpeechRecognition from "../../../hooks/useSpeechRecognition";
import {Simulate} from "react-dom/test-utils";
import toggle = Simulate.toggle;


export default function HomePage(){
    const {
        text,
        toggleListening,
        isListening,
        hasRecognitionSupport,
        setText
    } = useSpeechRecognition()

    return (
        <div className={"w-full h-5/6 flex-row flex"}>
            <FileContainer isListening={isListening} toggleListening={toggleListening}/>
            <Notebox
                hasRecognitionSupport={hasRecognitionSupport}
                isListening={isListening}
                setText={setText}
                text={text}
                toggleListening={toggleListening}/>
        </div>
    )
}