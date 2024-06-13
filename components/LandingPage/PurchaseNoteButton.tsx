"use client"

import {productName} from "../../Constants/ProductConstants";

export default function PurchaseNoteButton(){
    return (
        <button className={"btn btn--primary bg-purple-400 text-white"} onClick={()=> console.log("hello")}>
            Get {productName}
        </button>
    )
}