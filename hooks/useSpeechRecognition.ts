import {useEffect, useState} from "react";
import {summarizeToBulletPoints} from "../utils/SummarizeToBulletPoints";

let recognition: any = null;
    if("webkitSpeechRecognition" in window) {
        recognition = new webkitSpeechRecognition()
        recognition.continuous = true
        recognition.lang = "en-US"
    }

    const useSpeechRecognition = function(){
        const [text, setText] = useState("")
        const [isListening, setListening] = useState(false)

        useEffect(() => {
            if(!recognition)return;

            recognition.onresult = async (event: { results: { transcript: any; }[][]; }) => {
                setListening(false)
                const transcript = event.results[0][0].transcript
                recognition.stop()
                if(transcript === "") return
                const bullets = await summarizeToBulletPoints(transcript)
                setText((prevState) => prevState + "\n" + bullets?.message.content)
            }

        }, [])

        const toggleListening = () => {
            setListening(!isListening)
            isListening
                ? recognition.stop()
                : recognition.start()
        }

        return {
            setText,
            text,
            isListening,
            toggleListening,
            hasRecognitionSupport: !recognition,
        }
    }

export default  useSpeechRecognition