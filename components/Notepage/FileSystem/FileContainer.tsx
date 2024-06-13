import Toolbar from "../Toolbar";

type Props = {
    isListening: boolean,
    toggleListening: () => void
}

export default function FileContainer({ isListening, toggleListening }: Props){
    return <div className={"w-1/6 h-full bg-white m-2 rounded-xl"}>
        <Toolbar isListening={isListening} toggleListening={toggleListening}/>
    </div>
}