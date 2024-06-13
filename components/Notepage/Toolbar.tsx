
import { FaMicrophone, FaPlus } from "react-icons/fa";
import {Dispatch, SetStateAction} from "react";

type Props = {
    toggleListening: () => void,
    isListening: boolean
}

export default function Toolbar({toggleListening, isListening}: Props) {



    return (
        <div className={"w-full h-10 bg-purple-400 my-2 flex items-center"}>
            <button
                className={"hover:scale-125"}
                onClick={toggleListening}
            >
                <FaMicrophone size={30} color={isListening ? "red" : "white"} />
            </button>
            <button
                className={"hover:scale-125"}
                onClick={toggleListening}
            >
                <FaPlus size={30} color={"white"} />
            </button>
        </div>
    );
}
