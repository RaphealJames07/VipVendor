import "./Popular.css";
import Laptops from "../../../assets/Laptop.svg";
import Desktops from "../../../assets/Desktop.svg";
import SmartWatches from "../../../assets/SmartWatches.svg";
import MobilePhones from "../../../assets/MobilePhones.svg";
import Drones from "../../../assets/Drones.svg";
import EarPods from "../../../assets/EarPods.svg";
import Tablets from "../../../assets/Tablets.svg";
import HeadPhones from "../../../assets/HeadPhones.svg";

const Popular = () => {
    return (
        <>
            <div className="PopularBody">
                <div className="PopularTop">
                    <p>Popular</p>
                    <p>View All {">>"}</p>
                </div>
                <div className="PopularDown">
                    <div className="PopularDownWrap">
                        <div className="PopularDownRow1">
                            <div className="PopularDownRow1Item1">
                                <img src={Laptops} alt="" />
                                <p>Laptops</p>
                            </div>
                            <div className="PopularDownRow1Item1">
                                <img src={Desktops} alt="" />
                                <p>Desktops</p>
                            </div>
                            <div className="PopularDownRow1Item1">
                                <img src={SmartWatches} alt="" />
                                <p>SmartWatches</p>
                            </div>
                            <div className="PopularDownRow1Item1">
                                <img src={Tablets} alt="" />
                                <p>Tablets</p>
                            </div>
                        </div>
                        <div className="PopularDownRow2">
                            <div className="PopularDownRow2Item1">
                                <img src={Drones} alt="" />
                                <p>Drones</p>
                            </div>
                            <div className="PopularDownRow2Item1">
                                <img src={EarPods} alt="" />
                                <p>EarPods</p>
                            </div>
                            <div className="PopularDownRow2Item1">
                                <img src={MobilePhones} alt="" />
                                <p>Mobile Phones</p>
                            </div>
                            <div className="PopularDownRow2Item1">
                                <img src={HeadPhones} alt="" />
                                <p>HeadPhones</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Popular;
