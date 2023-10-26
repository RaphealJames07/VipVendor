import {Pagination} from "antd";
import {useState} from "react";
import {AiFillStar} from "react-icons/ai";
import {BiSolidUserVoice, BiTrendingDown, BiTrendingUp} from "react-icons/bi";
import {FaUsers} from "react-icons/fa";
import {MdOutlineMoreVert} from "react-icons/md";

const AdminReports = () => {
    const [openReportAction, setOpenReportAction] = useState(false);

    const handleReportAction = () => {
        setOpenReportAction(true);
    };

    return (
        <>
            <div className="w-full h-[89vh] bg-sky-200">
                <div className="w-full h-60 p-5 flex justify-around ">
                    <div className="w-80 h-full flex flex-col justify-between bg-white rounded-md p-5 shadow-md">
                        <div className="w-full h-[60%] flex gap-4">
                            <AiFillStar className="w-10 h-10" />
                            <h1 className="text-xl flex flex-col">
                                Customer Ratings <span>4.2</span>
                            </h1>
                        </div>
                        <div className="w-full h-[40%]">
                            <p className="flex items-center">
                                <span className="flex items-center mr-1 text-green-400">
                                    <BiTrendingUp /> 10%
                                </span>
                                up from the past week
                            </p>
                        </div>
                    </div>
                    <div className="w-80 h-full flex flex-col p-5 justify-between bg-white rounded-md shadow-sm">
                        <div className="w-full h-[20%] flex items-center gap-4">
                            <FaUsers className="w-10 h-10" />
                            <h1 className="text-xl flex flex-col">
                                Conversion Rate <span>7.80%</span>
                            </h1>
                        </div>
                        <div className="w-full h-[70%] flex flex-col justify-between text-sm">
                            <nav className="w-full flex justify-between">
                                <p>Added to cart</p>
                                <p>150</p>
                                <p className="flex items-center gap-2">
                                    <BiTrendingUp />
                                    20%
                                </p>
                            </nav>
                            <nav className="w-full flex justify-between">
                                <p>Proceed to checkout</p>
                                <p>50</p>
                                <p className="flex items-center gap-2">
                                    <BiTrendingDown />
                                    20%
                                </p>
                            </nav>
                            <nav className="w-full flex justify-between">
                                <p>Purchased Items</p>
                                <p>40</p>
                                <p className="flex items-center gap-2">
                                    <BiTrendingUp />
                                    20%
                                </p>
                            </nav>
                            <p className="flex">
                                <span className="flex items-center mr-1 text-green-400">
                                    <BiTrendingUp /> 10%
                                </span>
                                up from the past week
                            </p>
                        </div>
                    </div>
                    <div className="w-80 h-full flex flex-col justify-between bg-white rounded-md p-5 shadow-sm">
                        <div className="w-full h-[60%] flex gap-4">
                            <BiSolidUserVoice className="w-10 h-10" />
                            <h1 className="text-xl flex flex-col">
                                Retention Rate <span>15%</span>
                            </h1>
                        </div>
                        <div className="w-full h-[40%]">
                            <p className="flex items-center">
                                <span className="flex items-center mr-1 text-green-400">
                                    <BiTrendingUp /> 10%
                                </span>
                                up from the past week
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[22rem]">
                    <div className="w-full h-10 bg-sky-100 text-xl flex items-center pl-10">
                        All Reports
                    </div>
                    <div className="w-full h-12 flex justify-between items-center px-5">
                        <div className="h-full w-[30%] flex items-center text-lg font-medium">
                            User
                        </div>
                        <div className="h-full w-[18%] flex items-center text-lg font-medium">
                            Region
                        </div>
                        <div className="h-full w-[25%] flex items-center text-lg font-medium">
                            Product
                        </div>
                        <div className="h-full w-[15%] flex items-center text-lg font-medium">
                            Status
                        </div>
                        <div className="h-full w-[5%] flex items-center text-lg font-medium">
                            Action
                        </div>
                    </div>
                    <div className="w-full h-64 flex flex-col justify-between">
                        <div className="w-full h-12 flex justify-between items-center px-5 ">
                            <div className="h-full w-[30%] flex items-center font-medium">
                                Rapheal Ukachukwu
                            </div>
                            <div className="h-full w-[18%] flex items-center font-medium">
                                Lagos, Nigeria
                            </div>
                            <div className="h-full w-[25%] flex items-center font-medium">
                                Iphone 13 Pro Max
                            </div>
                            <div className="h-full w-[15%] flex items-center font-medium">
                                Fixed
                            </div>
                            <div className="h-full w-[5%] flex items-center font-medium relative">
                                <MdOutlineMoreVert
                                    className="w-6 h-6 cursor-pointer"
                                    onClick={handleReportAction}
                                />
                                {openReportAction ? (
                                    <>
                                        <div className="w-40 h-40 rounded-md absolute top-10 right-5 bg-slate-100 p-1">
                                            <ul className="w-full h-full flex flex-col">
                                                <li className="w-full h-10 bg-slate-100 flex items-center justify-center cursor-pointer border-b border-black">
                                                    Fixed
                                                </li>
                                                <li className="w-full h-10 bg-slate-100 flex items-center justify-center cursor-pointer border-b border-black">
                                                    In Process
                                                </li>
                                                <li className="w-full h-10 bg-slate-100 flex items-center justify-center cursor-pointer border-b border-black">
                                                    Damaged
                                                </li>
                                                <li className="w-full h-10 bg-slate-100 flex items-center justify-center cursor-pointer border-b border-black">
                                                    Lost
                                                </li>
                                            </ul>
                                        </div>
                                    </>
                                ) : null}
                            </div>
                        </div>
                        <div className="w-full h-12 flex justify-between items-center px-5 ">
                            <div className="h-full w-[30%] flex items-center font-medium">
                                Rapheal Ukachukwu
                            </div>
                            <div className="h-full w-[18%] flex items-center font-medium">
                                Lagos, Nigeria
                            </div>
                            <div className="h-full w-[25%] flex items-center font-medium">
                                Iphone 13 Pro Max
                            </div>
                            <div className="h-full w-[15%] flex items-center font-medium">
                                Fixed
                            </div>
                            <div className="h-full w-[5%] flex items-center font-medium">
                                <MdOutlineMoreVert className="w-6 h-6" />
                            </div>
                        </div>
                        <div className="w-full h-12 flex justify-between items-center px-5 ">
                            <div className="h-full w-[30%] flex items-center font-medium">
                                Rapheal Ukachukwu
                            </div>
                            <div className="h-full w-[18%] flex items-center font-medium">
                                Lagos, Nigeria
                            </div>
                            <div className="h-full w-[25%] flex items-center font-medium">
                                Iphone 13 Pro Max
                            </div>
                            <div className="h-full w-[15%] flex items-center font-medium">
                                Fixed
                            </div>
                            <div className="h-full w-[5%] flex items-center font-medium">
                                <MdOutlineMoreVert className="w-6 h-6" />
                            </div>
                        </div>
                        <div className="w-full h-12 flex justify-between items-center px-5 ">
                            <div className="h-full w-[30%] flex items-center font-medium">
                                Rapheal Ukachukwu
                            </div>
                            <div className="h-full w-[18%] flex items-center font-medium">
                                Lagos, Nigeria
                            </div>
                            <div className="h-full w-[25%] flex items-center font-medium">
                                Iphone 13 Pro Max
                            </div>
                            <div className="h-full w-[15%] flex items-center font-medium">
                                Fixed
                            </div>
                            <div className="h-full w-[5%] flex items-center font-medium">
                                <MdOutlineMoreVert className="w-6 h-6" />
                            </div>
                        </div>
                        <div className="w-full h-12 flex justify-between items-center px-5">
                            <div className="h-full w-[30%] flex items-center font-medium">
                                Rapheal Ukachukwu
                            </div>
                            <div className="h-full w-[18%] flex items-center font-medium">
                                Lagos, Nigeria
                            </div>
                            <div className="h-full w-[25%] flex items-center font-medium">
                                Iphone 13 Pro Max
                            </div>
                            <div className="h-full w-[15%] flex items-center font-medium">
                                Fixed
                            </div>
                            <div className="h-full w-[5%] flex items-center font-medium">
                                <MdOutlineMoreVert className="w-6 h-6" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-16 flex items-center justify-between px-5">
                    <div>
                        <p>Showing results of 1-7 of 321 Users</p>
                    </div>
                    <div>
                        <Pagination defaultCurrent={1} total={50} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminReports;
