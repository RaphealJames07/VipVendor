import BestApple from "./BestApple/BestApple";
import BestWeek from "./BestWeek/BestWeek";
import "./HomeProduct.css";
import Popular from "./Popular/Popular";
import Recommended from "./Recommended/Recommended";

const HomeProduct = () => {
    return (
        <>
            <div className="HomeProductBody">
                <BestWeek />
                <Popular />
                <Recommended />
                <BestApple />
            </div>
        </>
    );
};

export default HomeProduct;
