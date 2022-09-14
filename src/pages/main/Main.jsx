import ExpansionItem from "../../components/expansion-item/ExpansionItem";
import Questions from "../../components/expansion-item/questions/Questions";
import Catalog from "../catalog/Catalog";
import Advantages from "./advantages/Advantages";
import Carousel from "./carousel/Carousel";

function Main() {
    
    return ( 
        <div>
            <Carousel/>
            <Advantages/>
            <Catalog/>
            <Questions/>
        </div>
    );
}

export default Main;