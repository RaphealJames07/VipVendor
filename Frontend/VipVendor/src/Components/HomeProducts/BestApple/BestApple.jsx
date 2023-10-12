import {AiFillHeart, AiFillStar} from "react-icons/ai";
import "./BestApple.css";
import MacBook from '../../../assets/macbook1.png'
import Mouse from '../../../assets/mouse.png'
import Tablet from '../../../assets/ipad2.png'
import Watch from '../../../assets/AppleWatch.png'
import Headset from '../../../assets/earphone1.png'
import Iphone from '../../../assets/iphone12.png'

const BestApple = () => {
    return (
        <>
            <div className="BestAppleBody">
                <div className="BestAppleTop">
                    <p>Recommended For You</p>
                    <p>View All {">>"}</p>
                </div>
                <div className="BestAppleDown">
                    <div className="BestAppleDownWrap">
                        <div className="BestAppleDownWrap1">
                            <div className="BestAppleItem1">
                                <div className="BestAppleItem1ImgDiv">
                                    <img src={MacBook} alt="" />
                                </div>
                                <div className="BestAppleItem1DetDiv">
                                    <div className="BestAppleItem1Name">
                                        <p>Apple MacBook</p>
                                    </div>
                                    <div className="BestAppleItem1PriceDiv">
                                        <div className="BestAppleItem1PriceDivLeft">
                                            <p>N600,000</p>
                                        </div>
                                        <div className="BestAppleItem1PriceDivRight">
                                            <AiFillHeart className="AiFillHeart" />
                                        </div>
                                    </div>
                                    <div className="BestAppleItem1PriceDivRate">
                                        <AiFillStar className="AiOutlineStar" />
                                        3.0 <span>(15 Reviews)</span>
                                    </div>
                                    <div className="BestAppleItem1PriceDivBtn">
                                        <button>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="BestAppleItem1">
                                <div className="BestAppleItem1ImgDiv">
                                    <img src={Mouse} alt="" />
                                </div>
                                <div className="BestAppleItem1DetDiv">
                                    <div className="BestAppleItem1Name">
                                        <p>Apple Mouse</p>
                                    </div>
                                    <div className="BestAppleItem1PriceDiv">
                                        <div className="BestAppleItem1PriceDivLeft">
                                            <p>N25,000</p>
                                        </div>
                                        <div className="BestAppleItem1PriceDivRight">
                                            <AiFillHeart className="AiFillHeart" />
                                        </div>
                                    </div>
                                    <div className="BestAppleItem1PriceDivRate">
                                        <AiFillStar className="AiOutlineStar" />
                                        3.0 <span>(15 Reviews)</span>
                                    </div>
                                    <div className="BestAppleItem1PriceDivBtn">
                                        <button>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="BestAppleItem1">
                                <div className="BestAppleItem1ImgDiv">
                                    <img src={Tablet} alt="" />
                                </div>
                                <div className="BestAppleItem1DetDiv">
                                    <div className="BestAppleItem1Name">
                                        <p>Tablet</p>
                                    </div>
                                    <div className="BestAppleItem1PriceDiv">
                                        <div className="BestAppleItem1PriceDivLeft">
                                            <p>N250,000</p>
                                        </div>
                                        <div className="BestAppleItem1PriceDivRight">
                                            <AiFillHeart className="AiFillHeart" />
                                        </div>
                                    </div>
                                    <div className="BestAppleItem1PriceDivRate">
                                        <AiFillStar className="AiOutlineStar" />
                                        3.0 <span>(15 Reviews)</span>
                                    </div>
                                    <div className="BestAppleItem1PriceDivBtn">
                                        <button>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="BestAppleDownWrap2">
                            <div className="BestAppleItem1">
                                <div className="BestAppleItem1ImgDiv">
                                    <img src={Watch} alt="" />
                                </div>
                                <div className="BestAppleItem1DetDiv">
                                    <div className="BestAppleItem1Name">
                                        <p>Apple Watch</p>
                                    </div>
                                    <div className="BestAppleItem1PriceDiv">
                                        <div className="BestAppleItem1PriceDivLeft">
                                            <p>N100,000</p>
                                        </div>
                                        <div className="BestAppleItem1PriceDivRight">
                                            <AiFillHeart className="AiFillHeart" />
                                        </div>
                                    </div>
                                    <div className="BestAppleItem1PriceDivRate">
                                        <AiFillStar className="AiOutlineStar" />
                                        3.0 <span>(15 Reviews)</span>
                                    </div>
                                    <div className="BestAppleItem1PriceDivBtn">
                                        <button>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="BestAppleItem1">
                                <div className="BestAppleItem1ImgDiv">
                                    <img src={Headset} alt="" />
                                </div>
                                <div className="BestAppleItem1DetDiv">
                                    <div className="BestAppleItem1Name">
                                        <p>Apple Headphone</p>
                                    </div>
                                    <div className="BestAppleItem1PriceDiv">
                                        <div className="BestAppleItem1PriceDivLeft">
                                            <p>N35,000</p>
                                        </div>
                                        <div className="BestAppleItem1PriceDivRight">
                                            <AiFillHeart className="AiFillHeart" />
                                        </div>
                                    </div>
                                    <div className="BestAppleItem1PriceDivRate">
                                        <AiFillStar className="AiOutlineStar" />
                                        3.0 <span>(15 Reviews)</span>
                                    </div>
                                    <div className="BestAppleItem1PriceDivBtn">
                                        <button>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                            <div className="BestAppleItem1">
                                <div className="BestAppleItem1ImgDiv">
                                    <img src={Iphone} alt="" />
                                </div>
                                <div className="BestAppleItem1DetDiv">
                                    <div className="BestAppleItem1Name">
                                        <p>Iphone 12</p>
                                    </div>
                                    <div className="BestAppleItem1PriceDiv">
                                        <div className="BestAppleItem1PriceDivLeft">
                                            <p>N400,000</p>
                                        </div>
                                        <div className="BestAppleItem1PriceDivRight">
                                            <AiFillHeart className="AiFillHeart" />
                                        </div>
                                    </div>
                                    <div className="BestAppleItem1PriceDivRate">
                                        <AiFillStar className="AiOutlineStar" />
                                        3.0 <span>(15 Reviews)</span>
                                    </div>
                                    <div className="BestAppleItem1PriceDivBtn">
                                        <button>Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BestApple;
