import {AiFillHeart, AiFillStar, AiOutlineHeart} from "react-icons/ai";
import "./Recommended.css";
import pad from "../../../assets/pad1.png";
import iphone12 from "../../../assets/iphone12.png";
import watch from "../../../assets/AppleWatch.png";
import airpod from "../../../assets/airpods1.png";

const Recommended = () => {
    return (
        <>
            <div className="RecommendBody">
                <div className="RecommendTop">
                    <p>Recommended For You</p>
                    <p>View All {">>"}</p>
                </div>
                <div className="RecommendDown">
                    <div className="RecommendDownWrap">
                        <div className="RecommendDownItem1">
                            <div className="RecommendDownImgDiv">
                                <img src={pad} alt="" />
                            </div>
                            <div className="RecommendDownDetDiv">
                                <div className="RecommendDownDetDivName">
                                    <p>Wireless Pc gaming pad</p>
                                </div>
                                <div className="RecommendDownDetDivPrice">
                                    <p>N25,000</p>
                                </div>
                                <div className="RecommendDownDetDivRate">
                                    <div className="RecommendDownDetDivRate1">
                                        <AiFillStar className="AiOutlineStar"/>
                                        3.0 <span>(15 Reviews)</span>
                                    </div>
                                    <div className="RecommendDownDetDivRate2">
                                        <AiOutlineHeart className="AiOutlineHeart"/>
                                    </div>
                                </div>
                                <div className="RecommendDownDetDivBtnDiv">
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="RecommendDownItem1">
                            <div className="RecommendDownImgDiv">
                                <img src={iphone12} alt="" />
                            </div>
                            <div className="RecommendDownDetDiv">
                                <div className="RecommendDownDetDivName">
                                    <p>Wireless Pc gaming pad</p>
                                </div>
                                <div className="RecommendDownDetDivPrice">
                                    <p>N25,000</p>
                                </div>
                                <div className="RecommendDownDetDivRate">
                                    <div className="RecommendDownDetDivRate1">
                                        <AiFillStar className="AiOutlineStar"/>
                                        3.0 <span>(15 Reviews)</span>
                                    </div>
                                    <div className="RecommendDownDetDivRate2">
                                        <AiFillHeart className="AiFillHeart"/>
                                    </div>
                                </div>
                                <div className="RecommendDownDetDivBtnDiv">
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="RecommendDownItem1">
                            <div className="RecommendDownImgDiv">
                                <img src={watch} alt="" />
                            </div>
                            <div className="RecommendDownDetDiv">
                                <div className="RecommendDownDetDivName">
                                    <p>Wireless Pc gaming pad</p>
                                </div>
                                <div className="RecommendDownDetDivPrice">
                                    <p>N25,000</p>
                                </div>
                                <div className="RecommendDownDetDivRate">
                                    <div className="RecommendDownDetDivRate1">
                                        <AiFillStar className="AiOutlineStar"/>
                                        3.0 <span>(15 Reviews)</span>
                                    </div>
                                    <div className="RecommendDownDetDivRate2">
                                        <AiOutlineHeart className="AiOutlineHeart"/>
                                    </div>
                                </div>
                                <div className="RecommendDownDetDivBtnDiv">
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className="RecommendDownItem1">
                            <div className="RecommendDownImgDiv">
                                <img src={airpod} alt="" />
                            </div>
                            <div className="RecommendDownDetDiv">
                                <div className="RecommendDownDetDivName">
                                    <p>Wireless Pc gaming pad</p>
                                </div>
                                <div className="RecommendDownDetDivPrice">
                                    <p>N25,000</p>
                                </div>
                                <div className="RecommendDownDetDivRate">
                                    <div className="RecommendDownDetDivRate1">
                                        <AiFillStar className="AiOutlineStar"/>
                                        3.0 <span>(15 Reviews)</span>
                                    </div>
                                    <div className="RecommendDownDetDivRate2">
                                        <AiFillHeart className="AiFillHeart"/>
                                    </div>
                                </div>
                                <div className="RecommendDownDetDivBtnDiv">
                                    <button>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Recommended;
