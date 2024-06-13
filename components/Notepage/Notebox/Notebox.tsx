import {Dispatch, SetStateAction} from "react";

type Props = {
    text: string,
    toggleListening: () => void,
    isListening: boolean,
    hasRecognitionSupport: boolean,
    setText: Dispatch<SetStateAction<string>>
}


export default function Notebox({text, toggleListening, isListening, hasRecognitionSupport, setText}: Props){
    console.log(process.env.OPEN_AI_API_KEY)
    console.log(process.env.ORGANISATION_ID)

    function handleToggleRecordText(){
        return isListening ? "Stop" : "Start"
    }

    if(hasRecognitionSupport) return <h1>your browser doesnt support text to speech</h1>

    return (
        <div className={"h-full w-5/6 my-2"}>
            {isListening && <div>
                your browser is currently listening
            </div>}
            <textarea
                onChange={(e)=> setText(e.target.value)}
                value={text}
                className={"p-10 bg-white textarea textarea-bordered w-full h-full"}
                placeholder={"note"}></textarea>
            <button className={"btn-circle btn-primary bg-white"} onClick={toggleListening}>{handleToggleRecordText()}</button>
        </div>
    )
}