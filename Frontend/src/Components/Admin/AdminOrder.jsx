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
                    <div className="w-full h-max  border-y border-x border-blue-950 rounded-md bg-fuchsia-200">
                        <div className="w-full h-16 flex gap-3 border-b border-b-blue-950 px-2">
                            <div className="w-20  h-full flex items-center font-semibold ">
                                ID
                            </div>
                            <div className="w-24  h-full  flex items-center font-semibold ">
                                DATE
                            </div>
                            <div className="w-48  h-full flex items-center font-semibold ">
                                NAME
                            </div>
                            <div className="w-56  h-full flex items-center font-semibold ">
                                PRODUCT
                            </div>
                            <div className="w-48  h-full flex items-center font-semibold ">
                                ADDRESS
                            </div>
                            <div className="w-28  h-full flex items-center font-semibold ">
                                PRICE
                            </div>
                            <div className="w-32  h-full flex items-center font-semibold ">
                                CATEGORY
                            </div>
                            <div className="w-32  h-full flex justify-center items-center font-semibold  ">
                                STATUS
                            </div>
                        </div>
                        <div className="w-full h-[50vh] flex flex-col gap- overflow-y-auto">
                            <div className="w-full h-16 flex gap-3 border-b border-b-blue-950 px-2 cursor-pointer">
                                <div className="w-20  h-full flex items-center text-sm ">
                                    00001
                                </div>
                                <div className="w-24  h-full flex items-center text-sm ">
                                    24/10/2023
                                </div>
                                <div className="w-48  h-full flex items-center text-sm ">
                                    John Elizabeth
                                </div>
                                <div className="w-56  h-full flex items-center text-sm ">
                                    Xiaomi Mi Watch Waterproof
                                </div>
                                <div className="w-48  h-full flex items-center text-sm ">
                                    12 Kokoyi Street Olodi Apapa Lagos
                                </div>
                                <div className="w-28  h-full flex items-center text-sm ">
                                    N94,000
                                </div>
                                <div className="w-32  h-full flex items-center text-sm ">
                                    Accessories
                                </div>
                                <div className="w-32  h-full flex justify-center items-center text-sm ">
                                    In transit
                                </div>
                            </div>
                            <div className="w-full h-16 flex gap-3 border-b border-b-blue-950 px-2 cursor-pointer">
                                <div className="w-20  h-full flex items-center text-sm ">
                                    00001
                                </div>
                                <div className="w-24  h-full flex items-center text-sm ">
                                    24/10/2023
                                </div>
                                <div className="w-48  h-full flex items-center text-sm ">
                                    John Elizabeth
                                </div>
                                <div className="w-56  h-full flex items-center text-sm ">
                                    Xiaomi Mi Watch Waterproof
                                </div>
                                <div className="w-48  h-full flex items-center text-sm ">
                                    12 Kokoyi Street Olodi Apapa Lagos
                                </div>
                                <div className="w-28  h-full flex items-center text-sm ">
                                    N94,000
                                </div>
                                <div className="w-32  h-full flex items-center text-sm ">
                                    Accessories
                                </div>
                                <div className="w-32  h-full flex justify-center items-center text-sm ">
                                    In transit
                                </div>
                            </div>
                            <div className="w-full h-16 flex gap-3 border-b border-b-blue-950 px-2 cursor-pointer">
                                <div className="w-20  h-full flex items-center text-sm ">
                                    00001
                                </div>
                                <div className="w-24  h-full flex items-center text-sm ">
                                    24/10/2023
                                </div>
                                <div className="w-48  h-full flex items-center text-sm ">
                                    John Elizabeth
                                </div>
                                <div className="w-56  h-full flex items-center text-sm ">
                                    Xiaomi Mi Watch Waterproof
                                </div>
                                <div className="w-48  h-full flex items-center text-sm ">
                                    12 Kokoyi Street Olodi Apapa Lagos
                                </div>
                                <div className="w-28  h-full flex items-center text-sm ">
                                    N94,000
                                </div>
                                <div className="w-32  h-full flex items-center text-sm ">
                                    Accessories
                                </div>
                                <div className="w-32  h-full flex justify-center items-center text-sm ">
                                    In transit
                                </div>
                            </div>
                            <div className="w-full h-16 flex gap-3 border-b border-b-blue-950 px-2 cursor-pointer">
                                <div className="w-20  h-full flex items-center text-sm ">
                                    00001
                                </div>
                                <div className="w-24  h-full flex items-center text-sm ">
                                    24/10/2023
                                </div>
                                <div className="w-48  h-full flex items-center text-sm ">
                                    John Elizabeth
                                </div>
                                <div className="w-56  h-full flex items-center text-sm ">
                                    Xiaomi Mi Watch Waterproof
                                </div>
                                <div className="w-48  h-full flex items-center text-sm ">
                                    12 Kokoyi Street Olodi Apapa Lagos
                                </div>
                                <div className="w-28  h-full flex items-center text-sm ">
                                    N94,000
                                </div>
                                <div className="w-32  h-full flex items-center text-sm ">
                                    Accessories
                                </div>
                                <div className="w-32  h-full flex justify-center items-center text-sm ">
                                    In transit
                                </div>
                            </div>
                            <div className="w-full h-16 flex gap-3 border-b border-b-blue-950 px-2 cursor-pointer">
                                <div className="w-20  h-full flex items-center text-sm ">
                                    00001
                                </div>
                                <div className="w-24  h-full flex items-center text-sm ">
                                    24/10/2023
                                </div>
                                <div className="w-48  h-full flex items-center text-sm ">
                                    John Elizabeth
                                </div>
                                <div className="w-56  h-full flex items-center text-sm ">
                                    Xiaomi Mi Watch Waterproof
                                </div>
                                <div className="w-48  h-full flex items-center text-sm ">
                                    12 Kokoyi Street Olodi Apapa Lagos
                                </div>
                                <div className="w-28  h-full flex items-center text-sm ">
                                    N94,000
                                </div>
                                <div className="w-32  h-full flex items-center text-sm ">
                                    Accessories
                                </div>
                                <div className="w-32  h-full flex justify-center items-center text-sm ">
                                    In transit
                                </div>
                            </div>
                            <div className="w-full h-16 flex gap-3 border-b border-b-blue-950 px-2 cursor-pointer">
                                <div className="w-20  h-full flex items-center text-sm ">
                                    00001
                                </div>
                                <div className="w-24  h-full flex items-center text-sm ">
                                    24/10/2023
                                </div>
                                <div className="w-48  h-full flex items-center text-sm ">
                                    John Elizabeth
                                </div>
                                <div className="w-56  h-full flex items-center text-sm ">
                                    Xiaomi Mi Watch Waterproof
                                </div>
                                <div className="w-48  h-full flex items-center text-sm ">
                                    12 Kokoyi Street Olodi Apapa Lagos
                                </div>
                                <div className="w-28  h-full flex items-center text-sm ">
                                    N94,000
                                </div>
                                <div className="w-32  h-full flex items-center text-sm ">
                                    Accessories
                                </div>
                                <div className="w-32  h-full flex justify-center items-center text-sm ">
                                    In transit
                                </div>
                            </div>
                            
                            
                            
                            
                            
                        </div>
                    </div>
                    <div className="w-full h-20 bg-lime-100 flex items-center justify-between">
                        <div className="w-80 pl-10">
                            <p>
                                Showing <span>1-13 results of 150 orders</span>
                            </p>
                        </div>
                        <div className="w-80 ">
                            <Pagination defaultCurrent={1} total={50} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminOrder;
