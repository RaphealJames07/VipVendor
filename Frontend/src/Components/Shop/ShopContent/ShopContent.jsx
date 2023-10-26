import {BiArrowBack, BiReset} from "react-icons/bi";
import {MdViewList} from "react-icons/md";
import {HiViewGrid} from "react-icons/hi";
import "./ShopContent.css";
import {FaFilter} from "react-icons/fa";
import {Pagination, Slider} from "antd";
import {AiFillHeart, AiFillStar, AiOutlineSearch} from "react-icons/ai";

const ShopContent = () => {
    return (
        <>
            <div className="ShopContentBody ">
                <div className="ShopSearchDiv">
                    <div className="ShopSearchDivTop">
                        <input
                            type="text"
                            placeholder="Search for products, brands....."
                        />
                        <select name="All Department" id="">
                            <option value="" className="">All Department</option>
                            <option value="">Phones</option>
                            <option value="">Laptops</option>
                            <option value="">Tablets</option>
                            <option value="">Accessories</option>
                            <option value="">Console</option>
                        </select>
                        <button>
                            <AiOutlineSearch className="AiOutlineSearch" />
                        </button>
                    </div>
                    <div className="ShopSearchDivDown">
                        <div className="ShopSearchDivDownItemA">
                            <p>Phones</p>
                        </div>
                        <div className="ShopSearchDivDownItemB">
                            <p>Laptops</p>
                        </div>
                        <div className="ShopSearchDivDownItemC">
                            <p>Tablets</p>
                        </div>
                        <div className="ShopSearchDivDownItemD">
                            <p>Accessories</p>
                        </div>
                        <div className="ShopSearchDivDownItemE">
                            <p>Console</p>
                        </div>
                    </div>
                </div>
                <div className="ShopBrandDiv">
                    <div className="ShopBrandDivTop">
                        <div className="ShopBrandDivTopDivSmall">
                            <BiArrowBack className="BiArrowBack" />
                            <p>
                                <span>Home</span>/ <span>Shop</span>/{" "}
                                <span>Phones</span>
                            </p>
                        </div>
                    </div>
                    <div className="ShopBrandDivDown">
                        <div className="ShopBrandDivDownWrap">
                            <div className="ShopBrandDivDownItem">
                                <img src="" alt="" />
                                <p>Samsung</p>
                            </div>
                            <div className="ShopBrandDivDownItem">
                                <img src="" alt="" />
                                <p>Iphone</p>
                            </div>
                            <div className="ShopBrandDivDownItem">
                                <img src="" alt="" />
                                <p>Oppo</p>
                            </div>
                            <div className="ShopBrandDivDownItem">
                                <img src="" alt="" />
                                <p>Techno</p>
                            </div>
                            <div className="ShopBrandDivDownItem">
                                <img src="" alt="" />
                                <p>Google Pixel</p>
                            </div>
                            <div className="ShopBrandDivDownItem">
                                <img src="" alt="" />
                                <p>Huawei</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ShopResultDiv">
                    <div className="ShopResultDivTop">
                        <div className="ShopResultDivTopLeft">
                            <p>Phones</p>
                        </div>
                        <div className="ShopResultDivTopRight">
                            <div className="ShopResultDivTopRight1">
                                <p>Sort By:</p>
                                <select name="">
                                    <option value="">Featured</option>
                                    <option value="">Newest Arrivals</option>
                                    <option value="">Price: Low to High</option>
                                    <option value="">Price: High to Low</option>
                                    <option value="">Rating</option>
                                </select>
                            </div>
                            <div className="ShopResultDivTopRight2">
                                <HiViewGrid className="HiViewGrid" />
                                <MdViewList className="MdViewList" />
                            </div>
                        </div>
                    </div>
                    <div className="ShopResultDivDown">
                        <div className="ShopResultDivDownLeft">
                            <div className="ShopResultDivDownLeftWrap">
                                <div className="ShopResultDivDownLeftFilterDiv">
                                    <div className="ShopResultDivDownLeftFilterDiv1">
                                        <FaFilter className="FaFilter" />{" "}
                                        <p>Filters</p>
                                    </div>
                                    <div className="ShopResultDivDownLeftFilterDiv2">
                                        <BiReset className="BiReset" />{" "}
                                        <p>Reset Filters</p>
                                    </div>
                                </div>
                                <div className="ShopResultDivDownLeftPriceDiv">
                                    <div className="ShopResultDivDownLeftPriceDiv1">
                                        <p>PRICES</p>
                                    </div>
                                    <div className="ShopResultDivDownLeftPriceDiv2">
                                        <Slider
                                            range
                                            defaultValue={[0, 50]}
                                            className="Slider"
                                        />
                                    </div>
                                    <div className="ShopResultDivDownLeftPriceDiv3">
                                        <div className="ShopResultDivDownLeftPriceDiv3Left">
                                            N10,000
                                        </div>
                                        <div className="ShopResultDivDownLeftPriceDiv3Right">
                                            N200,000
                                        </div>
                                    </div>
                                </div>
                                <div className="ShopResultDivDownLeftColorDiv">
                                    <div className="ShopResultDivDownLeftColorDiv1">
                                        <p>Color</p>
                                    </div>
                                    <div className="ShopResultDivDownLeftColorDiv2">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="ShopResultDivDownLeftBrandDiv">
                                    <div className="ShopResultDivDownLeftBrandDiv1">
                                        <p>SHOP BY BRAND</p>
                                    </div>
                                    <div className="ShopResultDivDownLeftBrandDiv2">
                                        <input
                                            type="text"
                                            placeholder="Search brands"
                                        />
                                        <AiOutlineSearch className="AiOutlineSearch" />
                                    </div>
                                    <div className="ShopResultDivDownLeftBrandDiv3">
                                        <div className="ShopResultDivDownLeftBrandDiv3Item">
                                            <div className="ShopResultDivDownLeftBrandDiv3ItemA">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="ShopResultDivDownLeftBrandDiv3ItemB">
                                                Samsung
                                            </div>
                                            <div className="ShopResultDivDownLeftBrandDiv3ItemC">
                                                21
                                            </div>
                                        </div>
                                        <div className="ShopResultDivDownLeftBrandDiv3Item">
                                            <div className="ShopResultDivDownLeftBrandDiv3ItemA">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="ShopResultDivDownLeftBrandDiv3ItemB">
                                                Apple
                                            </div>
                                            <div className="ShopResultDivDownLeftBrandDiv3ItemC">
                                                60
                                            </div>
                                        </div>
                                        <div className="ShopResultDivDownLeftBrandDiv3Item">
                                            <div className="ShopResultDivDownLeftBrandDiv3ItemA">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="ShopResultDivDownLeftBrandDiv3ItemB">
                                                Oppo
                                            </div>
                                            <div className="ShopResultDivDownLeftBrandDiv3ItemC">
                                                9
                                            </div>
                                        </div>
                                        <div className="ShopResultDivDownLeftBrandDiv3Item">
                                            <div className="ShopResultDivDownLeftBrandDiv3ItemA">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="ShopResultDivDownLeftBrandDiv3ItemB">
                                                Google Pixel
                                            </div>
                                            <div className="ShopResultDivDownLeftBrandDiv3ItemC">
                                                20
                                            </div>
                                        </div>
                                        <div className="ShopResultDivDownLeftBrandDiv3Item">
                                            <div className="ShopResultDivDownLeftBrandDiv3ItemA">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="ShopResultDivDownLeftBrandDiv3ItemB">
                                                Techno
                                            </div>
                                            <div className="ShopResultDivDownLeftBrandDiv3ItemC">
                                                18
                                            </div>
                                        </div>
                                        <div className="ShopResultDivDownLeftBrandDiv3Item">
                                            <div className="ShopResultDivDownLeftBrandDiv3ItemA">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="ShopResultDivDownLeftBrandDiv3ItemB">
                                                Huawai
                                            </div>
                                            <div className="ShopResultDivDownLeftBrandDiv3ItemC">
                                                7
                                            </div>
                                        </div>
                                        <div className="ShopResultDivDownLeftBrandDiv3Item">
                                            <div className="ShopResultDivDownLeftBrandDiv3ItemA">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="ShopResultDivDownLeftBrandDiv3ItemB">
                                                Xiaomi
                                            </div>
                                            <div className="ShopResultDivDownLeftBrandDiv3ItemC">
                                                7
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="ShopResultDivDownLeftBar3Div">
                                    <div className="ShopResultDivDownLeftBar3Div1">
                                        <p>Battery</p>
                                    </div>
                                    <div className="ShopResultDivDownLeftBar3Div2">
                                        <div className="ShopResultDivDownLeftBar3Div2Item">
                                            <div className="ShopResultDivDownLeftBar3Div2ItemA">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="ShopResultDivDownLeftBar3Div2ItemB">
                                                1500mAh
                                            </div>
                                            <div className="ShopResultDivDownLeftBar3Div2ItemC">
                                                21
                                            </div>
                                        </div>
                                        <div className="ShopResultDivDownLeftBar3Div2Item">
                                            <div className="ShopResultDivDownLeftBar3Div2ItemA">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="ShopResultDivDownLeftBar3Div2ItemB">
                                                1300mAh
                                            </div>
                                            <div className="ShopResultDivDownLeftBar3Div2ItemC">
                                                6
                                            </div>
                                        </div>
                                        <div className="ShopResultDivDownLeftBar3Div2Item">
                                            <div className="ShopResultDivDownLeftBar3Div2ItemA">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="ShopResultDivDownLeftBar3Div2ItemB">
                                                1200mAh
                                            </div>
                                            <div className="ShopResultDivDownLeftBar3Div2ItemC">
                                                11
                                            </div>
                                        </div>
                                        <div className="ShopResultDivDownLeftBar3Div2Item">
                                            <div className="ShopResultDivDownLeftBar3Div2ItemA">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="ShopResultDivDownLeftBar3Div2ItemB">
                                                1100mAh
                                            </div>
                                            <div className="ShopResultDivDownLeftBar3Div2ItemC">
                                                6
                                            </div>
                                        </div>
                                        <div className="ShopResultDivDownLeftBar3Div2Item">
                                            <div className="ShopResultDivDownLeftBar3Div2ItemA">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="ShopResultDivDownLeftBar3Div2ItemB">
                                                1000mAh
                                            </div>
                                            <div className="ShopResultDivDownLeftBar3Div2ItemC">
                                                9
                                            </div>
                                        </div>
                                        <div className="ShopResultDivDownLeftBar3Div2Item">
                                            <div className="ShopResultDivDownLeftBar3Div2ItemA">
                                                <input type="checkbox" />
                                            </div>
                                            <div className="ShopResultDivDownLeftBar3Div2ItemB">
                                                900mAh
                                            </div>
                                            <div className="ShopResultDivDownLeftBar3Div2ItemC">
                                                4
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ShopResultDivDownRight">
                            <div className="ShopResultDivDownRightTop">
                                <div className="ShopResultDivDownRightWrap">
                                    <div className="ShopResultDivDownRightItem">
                                        <div className="ShopResultDivDownRightItemImgDiv">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="ShopResultDivDownRightItemDetDiv">
                                            <div className="ShopResultDivDownRightItemDetDivA">
                                                <p>
                                                    Samsung Galaxy S22 5G 128GB
                                                </p>
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivB">
                                                N400,000
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivC">
                                                <div className="ShopResultDivDownRightItemDetDivC1">
                                                    <AiFillStar className="AiFillStar" />
                                                    <span>30 reviews</span>
                                                </div>
                                                <AiFillHeart className="AiFillHeart" />
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivD">
                                                <button>Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ShopResultDivDownRightItem">
                                        <div className="ShopResultDivDownRightItemImgDiv">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="ShopResultDivDownRightItemDetDiv">
                                            <div className="ShopResultDivDownRightItemDetDivA">
                                                <p>
                                                    Samsung Galaxy S22 5G 128GB
                                                </p>
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivB">
                                                N400,000
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivC">
                                                <div className="ShopResultDivDownRightItemDetDivC1">
                                                    <AiFillStar className="AiFillStar" />
                                                    <span>30 reviews</span>
                                                </div>
                                                <AiFillHeart className="AiFillHeart" />
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivD">
                                                <button>Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ShopResultDivDownRightItem">
                                        <div className="ShopResultDivDownRightItemImgDiv">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="ShopResultDivDownRightItemDetDiv">
                                            <div className="ShopResultDivDownRightItemDetDivA">
                                                <p>
                                                    Samsung Galaxy S22 5G 128GB
                                                </p>
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivB">
                                                N400,000
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivC">
                                                <div className="ShopResultDivDownRightItemDetDivC1">
                                                    <AiFillStar className="AiFillStar" />
                                                    <span>30 reviews</span>
                                                </div>
                                                <AiFillHeart className="AiFillHeart" />
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivD">
                                                <button>Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ShopResultDivDownRightItem">
                                        <div className="ShopResultDivDownRightItemImgDiv">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="ShopResultDivDownRightItemDetDiv">
                                            <div className="ShopResultDivDownRightItemDetDivA">
                                                <p>
                                                    Samsung Galaxy S22 5G 128GB
                                                </p>
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivB">
                                                N400,000
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivC">
                                                <div className="ShopResultDivDownRightItemDetDivC1">
                                                    <AiFillStar className="AiFillStar" />
                                                    <span>30 reviews</span>
                                                </div>
                                                <AiFillHeart className="AiFillHeart" />
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivD">
                                                <button>Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ShopResultDivDownRightItem">
                                        <div className="ShopResultDivDownRightItemImgDiv">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="ShopResultDivDownRightItemDetDiv">
                                            <div className="ShopResultDivDownRightItemDetDivA">
                                                <p>
                                                    Samsung Galaxy S22 5G 128GB
                                                </p>
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivB">
                                                N400,000
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivC">
                                                <div className="ShopResultDivDownRightItemDetDivC1">
                                                    <AiFillStar className="AiFillStar" />
                                                    <span>30 reviews</span>
                                                </div>
                                                <AiFillHeart className="AiFillHeart" />
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivD">
                                                <button>Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ShopResultDivDownRightItem">
                                        <div className="ShopResultDivDownRightItemImgDiv">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="ShopResultDivDownRightItemDetDiv">
                                            <div className="ShopResultDivDownRightItemDetDivA">
                                                <p>
                                                    Samsung Galaxy S22 5G 128GB
                                                </p>
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivB">
                                                N400,000
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivC">
                                                <div className="ShopResultDivDownRightItemDetDivC1">
                                                    <AiFillStar className="AiFillStar" />
                                                    <span>30 reviews</span>
                                                </div>
                                                <AiFillHeart className="AiFillHeart" />
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivD">
                                                <button>Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ShopResultDivDownRightItem">
                                        <div className="ShopResultDivDownRightItemImgDiv">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="ShopResultDivDownRightItemDetDiv">
                                            <div className="ShopResultDivDownRightItemDetDivA">
                                                <p>
                                                    Samsung Galaxy S22 5G 128GB
                                                </p>
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivB">
                                                N400,000
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivC">
                                                <div className="ShopResultDivDownRightItemDetDivC1">
                                                    <AiFillStar className="AiFillStar" />
                                                    <span>30 reviews</span>
                                                </div>
                                                <AiFillHeart className="AiFillHeart" />
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivD">
                                                <button>Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ShopResultDivDownRightItem">
                                        <div className="ShopResultDivDownRightItemImgDiv">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="ShopResultDivDownRightItemDetDiv">
                                            <div className="ShopResultDivDownRightItemDetDivA">
                                                <p>
                                                    Samsung Galaxy S22 5G 128GB
                                                </p>
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivB">
                                                N400,000
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivC">
                                                <div className="ShopResultDivDownRightItemDetDivC1">
                                                    <AiFillStar className="AiFillStar" />
                                                    <span>30 reviews</span>
                                                </div>
                                                <AiFillHeart className="AiFillHeart" />
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivD">
                                                <button>Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ShopResultDivDownRightItem">
                                        <div className="ShopResultDivDownRightItemImgDiv">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="ShopResultDivDownRightItemDetDiv">
                                            <div className="ShopResultDivDownRightItemDetDivA">
                                                <p>
                                                    Samsung Galaxy S22 5G 128GB
                                                </p>
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivB">
                                                N400,000
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivC">
                                                <div className="ShopResultDivDownRightItemDetDivC1">
                                                    <AiFillStar className="AiFillStar" />
                                                    <span>30 reviews</span>
                                                </div>
                                                <AiFillHeart className="AiFillHeart" />
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivD">
                                                <button>Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ShopResultDivDownRightItem">
                                        <div className="ShopResultDivDownRightItemImgDiv">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="ShopResultDivDownRightItemDetDiv">
                                            <div className="ShopResultDivDownRightItemDetDivA">
                                                <p>
                                                    Samsung Galaxy S22 5G 128GB
                                                </p>
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivB">
                                                N400,000
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivC">
                                                <div className="ShopResultDivDownRightItemDetDivC1">
                                                    <AiFillStar className="AiFillStar" />
                                                    <span>30 reviews</span>
                                                </div>
                                                <AiFillHeart className="AiFillHeart" />
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivD">
                                                <button>Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ShopResultDivDownRightItem">
                                        <div className="ShopResultDivDownRightItemImgDiv">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="ShopResultDivDownRightItemDetDiv">
                                            <div className="ShopResultDivDownRightItemDetDivA">
                                                <p>
                                                    Samsung Galaxy S22 5G 128GB
                                                </p>
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivB">
                                                N400,000
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivC">
                                                <div className="ShopResultDivDownRightItemDetDivC1">
                                                    <AiFillStar className="AiFillStar" />
                                                    <span>30 reviews</span>
                                                </div>
                                                <AiFillHeart className="AiFillHeart" />
                                            </div>
                                            <div className="ShopResultDivDownRightItemDetDivD">
                                                <button>Add to Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ShopResultDivDownRightPagination">
                            <Pagination defaultCurrent={1} total={50} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShopContent;
