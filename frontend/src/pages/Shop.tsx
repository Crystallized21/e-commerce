import Hero from '../components/Hero/Hero.js';
import Popular from "../components/Popular/Popular.tsx";
import Offers from "../components/Offers/Offers.tsx";
import NewCollections from "../components/NewCollections/NewCollections.tsx";
import NewsLetter from "../components/NewsLetter/NewsLetter.tsx";

function Shop() {
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offers/>
            <NewCollections/>
            <NewsLetter/>
        </div>
    );
}

export default Shop;