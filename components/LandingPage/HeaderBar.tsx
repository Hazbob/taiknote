import {productName} from "../../Constants/ProductConstants";

export default function HeaderBar(){
    return (
        <header className={"flex flex-row justify-between"}>
            <h1>{productName}</h1>
            <h2 >Pricing</h2>
        </header>
    )
};
