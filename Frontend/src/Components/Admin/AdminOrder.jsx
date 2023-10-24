import {Pagination} from "antd";
import {AiFillCaretDown} from "react-icons/ai";
import {BiFilterAlt, BiReset} from "react-icons/bi";
import {BsListCheck} from "react-icons/bs";
import {MdOutlineCalendarMonth, MdOutlineCategory} from "react-icons/md";

const AdminOrder = () => {
    return (
        <>
            <div className="w-full h-full flex justify-center">
                <div className="w-[95%] h-[89vh] bg-sky-300">
                    <div className="w-full h-32 flex flex-col justify-between">
                        <p className="w-full h-10 flex items-center text-xl ">
                            Order List
                        </p>
                        <div className="w-[90%] h-24 flex items-center gap-5">
                            <div className="h-[60%] rounded bg-white w-40 flex items-center justify-center gap-3  cursor-pointer">
                                <BiFilterAlt className="w-6 h-6" />
                                <p className="text-lg">Filter by</p>
                            </div>
                            <div className="h-[60%] rounded bg-white w-40 flex items-center justify-center  cursor-pointer">
                                <p className="flex items-center gap-3 text-lg">
                                    <MdOutlineCalendarMonth className="w-6 h-6" />
                                    Date{" "}
                                    <span>
                                        <AiFillCaretDown />
                                    </span>
                                </p>
                            </div>
                            <div className="h-[60%] rounded bg-white w-56 flex items-center justify-center  cursor-pointer">
                                <p className="flex items-center gap-3 text-lg">
                                    <MdOutlineCategory className="w-6 h-6" />
                                    Order Category{" "}
                                    <span>
                                        <AiFillCaretDown />
                                    </span>
                                </p>
                            </div>
                            <div className="h-[60%] rounded bg-white w-56 flex items-center justify-center cursor-pointer ">
                                <p className="flex items-center gap-3 text-lg">
                                    <BsListCheck className="w-6 h-6" />
                                    Order Status{" "}
                                    <span>
                                        <AiFillCaretDown />
                                    </span>
                                </p>
                            </div>
                            <div className="h-[60%] rounded bg-white w-40 flex items-center justify-center cursor-pointer ">
                                <p className="flex items-center gap-3 text-lg">
                                    <BiReset className="w-6 h-6" />
                                    Reset Filter{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-max bg-fuchsia-200">
                        <div className="w-full h-16 flex ">
                            <div className="w-16 h-full flex items-center justify-center">
                                ID
                            </div>
                            <div className="w-16 h-full  flex items-center justify-center">
                                DATE
                            </div>
                            <div className="w-20 h-full flex items-center justify-center">NAME</div>
                            <div className="w-20 h-full flex items-center justify-center">PRODUCT</div>
                            <div className="w-20 h-full flex items-center justify-center">PRICE</div>
                            <div className="w-20 h-full flex items-center justify-center">CATEGORY</div>
                            <div className="w-20 h-full flex items-center justify-center bg-black">STATUS</div>
                        </div>
                        <div className="w-full h-max">
                            <div className="w-full h-16 flex">
                                <div className="">00001</div>
                                <div className="">24/10/2023</div>
                                <div className="">John Elizabeth</div>
                                <div className="">
                                    Xiaomi Mi Watch Waterproof
                                </div>
                                <div className="">N94,000</div>
                                <div className="">Accessories</div>
                                <div className="">In transit</div>
                            </div>
                            <div className="w-full h-16 flex">
                                <div className="">00001</div>
                                <div className="">24/10/2023</div>
                                <div className="">John Elizabeth</div>
                                <div className="">
                                    Xiaomi Mi Watch Waterproof
                                </div>
                                <div className="">N94,000</div>
                                <div className="">Accessories</div>
                                <div className="">In transit</div>
                            </div>
                            <div className="w-full h-16 flex">
                                <div className="">00001</div>
                                <div className="">24/10/2023</div>
                                <div className="">John Elizabeth</div>
                                <div className="">
                                    Xiaomi Mi Watch Waterproof
                                </div>
                                <div className="">N94,000</div>
                                <div className="">Accessories</div>
                                <div className="">In transit</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-20 bg-lime-100">
                        <div className="">
                            <p>
                                Showing <span>1-13 results of 150 orders</span>
                            </p>
                        </div>
                        <div className="">
                            <Pagination defaultCurrent={1} total={50} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminOrder;
