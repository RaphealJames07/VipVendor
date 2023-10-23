import "./BestWeek.css";
import {AiOutlineShoppingCart} from "react-icons/ai";
import airpod from "../../../assets/airpods1.png";
import earphone from "../../../assets/earphone1.png";
import macbook from "../../../assets/macbook1.png";
import {useState} from "react";

const BestWeek = () => {
    const [showCart, setShowCart] = useState(false);

    const handleShowCart = () => {
        setShowCart(!showCart);
    };

    return (
        <>
            <div className="BestWeekBody">
                <div className="BestWeekBodyTop">
                    <p>Best Deals of the Week</p>
                    <p>View All {">>"}</p>
                </div>
                <div className="BestWeekBodyDown">
                    <div className="BestWeekBodyDownWrap">
                        <div
                            className="BestWeekItem1"
                            onMouseEnter={handleShowCart}
                            onMouseLeave={handleShowCart}
                        >
                            <div className="BestWeekItem1ImgDiv">
                                <img src={airpod} alt="" />
                                {showCart ? (
                                    <>
                                        <span>
                                            <AiOutlineShoppingCart />
                                        </span>
                                    </>
                                ) : null}
                            </div>
                            <div className="BestWeekItem1DetailDiv">
                                <h3>Apple Airpod Pro</h3>
                                <p>
                                    N65,000 <span>N80,000</span>
                                </p>
                            </div>
                        </div>

                        <div
                            className="BestWeekItem1"
                            onMouseEnter={handleShowCart}
                            onMouseLeave={handleShowCart}
                        >
                            <div className="BestWeekItem1ImgDiv">
                                <img src={earphone} alt="" />
                                {showCart ? (
                                    <>
                                        <span>
                                            <AiOutlineShoppingCart />
                                        </span>
                                    </>
                                ) : null}
                            </div>
                            <div className="BestWeekItem1DetailDiv">
                                <h3>Wireless PC Headset</h3>
                                <p>
                                    N50,000 <span>N75,000</span>
                                </p>
                            </div>
                        </div>

                        <div
                            className="BestWeekItem1"
                            onMouseEnter={handleShowCart}
                            onMouseLeave={handleShowCart}
                        >
                            <div className="BestWeekItem1ImgDiv">
                                <img src={macbook} alt="" />
                                {showCart ? (
                                    <>
                                        <span>
                                            <AiOutlineShoppingCart />
                                        </span>
                                    </>
                                ) : null}
                            </div>
                            <div className="BestWeekItem1DetailDiv">
                                <h3>MacBook Pro</h3>
                                <p>
                                    N500,000 <span>N590,000</span>
                                </p>
                            </div>
                        </div>
                        <div
                            className="BestWeekItem1"
                            onMouseEnter={handleShowCart}
                            onMouseLeave={handleShowCart}
                        >
                            <div className="BestWeekItem1ImgDiv">
                                <img src={macbook} alt="" />
                                {showCart ? (
                                    <>
                                        <span>
                                            <AiOutlineShoppingCart />
                                        </span>
                                    </>
                                ) : null}
                            </div>
                            <div className="BestWeekItem1DetailDiv">
                                <h3>MacBook Pro</h3>
                                <p>
                                    N500,000 <span>N590,000</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BestWeek;
