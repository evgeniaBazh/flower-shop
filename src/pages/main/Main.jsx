import Catalog from "../catalog/Catalog";
import Advantages from "./advantages/Advantages";
import Carousel from "./carousel/Carousel";

function Main() {
    return ( 
        <div>
            <Carousel/>
            <Advantages/>
            <Catalog/>
        </div>
    );
}

export default Main;