import { BiArrowBack } from "react-icons/bi";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Shop.css";
import ShopContent from "./ShopContent/ShopContent";
import { AiOutlineSearch } from "react-icons/ai";

const Shop = () => {
    
    return (
        <>
            <div className="ShopBody">
                <Header />
                <div className="w-full h-max ">
                    <div className="w-full h-[20vh] bg-indigo-700 flex flex-col justify-between items-center py-5">
                        <div className="w-[90%] h-[43%] bg-white flex rounded">
                            <input
                                type="text"
                                placeholder="Search for products, brands....."
                                className="w-9/12 h-full text-base rounded pl-4 border-x-black outline-none border-t-0 border-r border-l-0 border-b-0"
                            />
                            <select
                                name="All Department"
                                id=""
                                className="w-1/5 h-full text-base pl-4 border-0 outline-none"
                            >
                                <option value="" className="">
                                    All Department
                                </option>
                                <option value="">Phones</option>
                                <option value="">Laptops</option>
                                <option value="">Tablets</option>
                                <option value="">Accessories</option>
                                <option value="">Console</option>
                            </select>
                            <button className="h-full w-[5%] bg-black bg-none rounded-t-md text-white flex items-center justify-center cursor-pointer">
                                <AiOutlineSearch className="w-1/2 h-1/2" />
                            </button>
                        </div>
                        <div className=" w-[70%] h-[43%] bg-white flex rounded">
                            <div className="w-1/5 h-full flex items-center justify-center text-lg cursor-pointer border-l-gray-500 border-l-0 bg-[#ddd] rounded text-indigo-700">
                                <p>Phones</p>
                            </div>
                            <div className="w-1/5 h-full flex items-center justify-center text-lg cursor-pointer border-l-2 border-l-gray-500 text-gray-500">
                                <p>Laptops</p>
                            </div>
                            <div className="w-1/5 h-full flex items-center justify-center text-lg cursor-pointer border-l-2 border-l-gray-500 text-gray-500">
                                <p>Tablets</p>
                            </div>
                            <div className="w-1/5 h-full flex items-center justify-center text-lg cursor-pointer border-l-2 border-l-gray-500 text-gray-500">
                                <p>Accessories</p>
                            </div>
                            <div className="w-1/5 h-full flex items-center justify-center text-lg cursor-pointer border-l-2 border-l-gray-500 text-gray-500 rounded-r-md border-r-0">
                                <p>Console</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-between items-center h-[10vh] py-5">
                        <div className="w-[90%] h-[100%]">
                            <div className="w-full h-full flex items-center text-base pl-4">
                                <BiArrowBack className="w-6 h-6 mr-2 cursor-pointer text-indigo-700" />
                                <p className="mx-[10px]">
                                    <span className="mx-[5px] px-[5px]">
                                        Home
                                    </span>
                                    /{" "}
                                    <span className="mx-[5px] px-[5px]">
                                        Shop
                                    </span>
                                    /{" "}
                                    <span className="mx-[5px] px-[5px] text-pry">
                                        Phones
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <ShopContent />
                <Footer />
            </div>
        </>
    );
};

export default Shop;
