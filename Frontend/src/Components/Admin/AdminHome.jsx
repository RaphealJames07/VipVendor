
import {BiTrendingDown, BiTrendingUp, BiUserCheck} from "react-icons/bi";
import {FaClipboardList, FaUsers} from "react-icons/fa";
import {MdOutlineTouchApp} from "react-icons/md";
import iphone from '../../assets/iphone12.png'

const AdminHome = () => {
    return (
        <>
            <div className="w-full h-full overflow-y-auto">
                <div className="w-full h-52 ">
                    <p className="w-full h-12 flex items-center text-2xl pl-10">
                        Hello Rapheal
                    </p>
                    <div className="w-full h-40 flex items-center justify-between px-5">
                        <div className="w-[24%] h-[85%] rounded-md bg-white py-5 px-5">
                            <div className="w-full h-[80%] flex">
                                <div className="w-[30%] flex justify-center">
                                    <span className="w-12 h-12 rounded-full bg-[#e0dbff] flex items-center justify-center">
                                        <FaClipboardList className="w-6 h-6 text-[#2b66c3]" />
                                    </span>
                                </div>
                                <div className="w-[70%] flex flex-col items-center font-semibold">
                                    <h1 className="w-[80%] flex justify-end text-xl">
                                        Total Orders
                                    </h1>
                                    <p className="w-[80%] flex justify-end">
                                        150
                                    </p>
                                </div>
                            </div>
                            <p className="w-full h-[20%] flex items-center text-sm pl-3">
                                <span className="flex items-center mr-1 text-green-400">
                                    <BiTrendingUp /> 10%
                                </span>
                                up from the past week
                            </p>
                        </div>
                        <div className="w-[24%] h-[85%] rounded-md bg-white py-5 px-5">
                            <div className="w-full h-[80%] flex">
                                <div className="w-[30%] flex justify-center">
                                    <span className="w-12 h-12 rounded-full bg-[#d2ebc6] flex items-center justify-center">
                                        <MdOutlineTouchApp className="w-6 h-6 text-[#81c361]" />
                                    </span>
                                </div>
                                <div className="w-[70%] flex flex-col items-center font-semibold">
                                    <h1 className="w-[80%] flex justify-end text-xl">
                                        Total Visits
                                    </h1>
                                    <p className="w-[80%] flex justify-end">
                                        150
                                    </p>
                                </div>
                            </div>
                            <p className="w-full h-[20%] flex items-center text-sm pl-3">
                                <span className="flex items-center mr-1 text-red-400">
                                    <BiTrendingDown /> 10%
                                </span>
                                down from the past week
                            </p>
                        </div>
                        <div className="w-[24%] h-[85%] rounded-md bg-white py-5 px-5">
                            <div className="w-full h-[80%] flex">
                                <div className="w-[30%] flex justify-center">
                                    <span className="w-12 h-12 rounded-full bg-[#f4ddff] flex items-center justify-center">
                                        <FaUsers className="w-6 h-6 text-[#f114f7]" />
                                    </span>
                                </div>
                                <div className="w-[70%] flex flex-col items-center font-semibold">
                                    <h1 className="w-[80%] flex justify-end text-xl">
                                        Total Users
                                    </h1>
                                    <p className="w-[80%] flex justify-end">
                                        150
                                    </p>
                                </div>
                            </div>
                            <p className="w-full h-[20%] flex items-center text-sm pl-3">
                                <span className="flex items-center mr-1 text-green-400">
                                    <BiTrendingUp /> 10%
                                </span>
                                up from the past week
                            </p>
                        </div>
                        <div className="w-[24%] h-[85%] rounded-md bg-white py-5 px-5">
                            <div className="w-full h-[80%] flex">
                                <div className="w-[30%] flex justify-center">
                                    <span className="w-12 h-12 rounded-full bg-[#c6d8e4] flex items-center justify-center">
                                        <BiUserCheck className="w-6 h-6 text-[#34a1b0]" />
                                    </span>
                                </div>
                                <div className="w-[70%] flex flex-col items-center font-semibold">
                                    <h1 className="w-[80%] flex justify-end text-xl">
                                        Active Users
                                    </h1>
                                    <p className="w-[80%] flex justify-end">
                                        150
                                    </p>
                                </div>
                            </div>
                            <p className="w-full h-[20%] flex items-center text-sm pl-3">
                                <span className="flex items-center mr-1 text-green-400">
                                    <BiTrendingUp /> 10%
                                </span>
                                up from the past week
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full h-60 flex flex-col justify-between">
                    <p className="w-full h-12 flex items-center pl-10 text-2xl">Most Purchased</p>
                    <div className="w-full h-44 flex justify-between">
                        <div className="w-[31%] h-full flex">
                            <div className="w-[40%] h-full bg-gray-700 flex items-center justify-center">
                                <img src={iphone} alt="" />
                            </div>
                            <div className="w-[60%] h-full flex flex-col justify-between py-3 pl-2">
                                <h1 className="text-xl">Headset</h1>
                                <p className="text-sm">Oriamo</p>
                                <p className="text-sm font-semibold">Wireless foldable headset </p>
                                <p className="text-sm">Color Black</p>
                                <p>
                                    Price <span>10,000</span>
                                </p>
                            </div>
                        </div>
                        <div className="w-[31%] h-full flex">
                            <div className="w-[40%] h-full bg-gray-700 flex items-center justify-center">
                                <img src={iphone} alt="" />
                            </div>
                            <div className="w-[60%] h-full flex flex-col justify-between py-3 pl-2">
                                <h1 className="text-xl">Headset</h1>
                                <p className="text-sm">Oriamo</p>
                                <p className="text-sm font-semibold">Wireless foldable headset </p>
                                <p className="text-sm">Color Black</p>
                                <p>
                                    Price <span>10,000</span>
                                </p>
                            </div>
                        </div>
                        <div className="w-[31%] h-full flex">
                            <div className="w-[40%] h-full bg-gray-700 flex items-center justify-center">
                                <img src={iphone} alt="" />
                            </div>
                            <div className="w-[60%] h-full flex flex-col justify-between py-3 pl-2">
                                <h1 className="text-xl">Headset</h1>
                                <p className="text-sm">Oriamo</p>
                                <p className="text-sm font-semibold">Wireless foldable headset </p>
                                <p className="text-sm">Color Black</p>
                                <p>
                                    Price <span>10,000</span>
                                </p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="w-full h-[35rem] p-10 flex flex-col justify-between bg-blue-200">
                    <div className="w-full h-14 flex justify-between ">
                        <h1 className="text-xl flex flex-col">
                            Sales Analytics{" "}
                            <span className="text-sm">Average sales of 1500 monthly</span>
                        </h1>
                        <div className="w-32 h-10">
                            <select name="" id="" className="w-full h-full border-blue-950 border-y rounded border-x">
                                <option value="">January</option>
                                <option value="">February</option>
                                <option value="">March</option>
                                <option value="">April</option>
                                <option value="">May</option>
                                <option value="">June</option>
                                <option value="">July</option>
                                <option value="">August</option>
                                <option value="">September</option>
                                <option value="">October</option>
                                <option value="">November</option>
                                <option value="">December</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full h-96 bg-blue-300">graph</div>
                </div>
            </div>
        </>
    );
};

export default AdminHome;
