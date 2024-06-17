import HeaderBar from "../../components/LandingPage/HeaderBar";
import { productName } from "../../Constants/ProductConstants";
import PurchaseNoteButton from "../../components/LandingPage/PurchaseNoteButton";

export default function Home() {
  return (
    <div>
      <HeaderBar />
      <h1 className={"text-2xl"}>{productName}</h1>
      <p>take notes at the speed of speech.</p>
      <p>Use the power of AI to turn your words into bullet points</p>
      <PurchaseNoteButton />
    </div>
  );
}
