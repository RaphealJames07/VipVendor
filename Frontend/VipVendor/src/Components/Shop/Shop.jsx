import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Shop.css";
import ShopContent from "./ShopContent/ShopContent";

const Shop = () => {
    
    return (
        <>
            <div className="ShopBody">
                <Header />
                <ShopContent />
                <Footer />
            </div>
        </>
    );
};

export default Shop;
