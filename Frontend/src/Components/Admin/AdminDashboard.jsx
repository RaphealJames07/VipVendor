
import {AiFillCaretDown, AiOutlineUnorderedList} from "react-icons/ai";
import {BiSolidDashboard} from "react-icons/bi";
import {BsFillBagCheckFill} from "react-icons/bs";
import {HiUsers} from "react-icons/hi";
import {SiGoogleanalytics} from "react-icons/si";
import {RiSettings5Fill} from "react-icons/ri";
import Logo from "../../assets/vipLogo.png";
import promo from "../../assets/customerpromo.gif";
import {useState} from "react";
import AdminHome from "./AdminHome";
import AdminOrder from "./AdminOrder";
import AdminProducts from "./AdminProducts";
import AdminUsers from "./AdminUsers";
import AdminSettings from "./AdminSettings";
import AdminReports from "./AdminReports";

const AdminDashboard = () => {
    const [adminHome, setAdminHome] = useState(true);
    const [adminOrder, setAdminOrder] = useState(false);
    const [adminProducts, setAdminProducts] = useState(false);
    const [adminUsers, setAdminUsers] = useState(false);
    const [adminReports, setAdminReports] = useState(false);
    const [adminSettings, setAdminSettings] = useState(false);

    const handleShowAdmin = () => {
        setAdminHome(true);
        setAdminOrder(false);
        setAdminProducts(false);
        setAdminUsers(false);
        setAdminReports(false);
        setAdminSettings(false);
    };
    const handleShowOrder = () => {
        setAdminHome(false);
        setAdminOrder(true);
        setAdminProducts(false);
        setAdminUsers(false);
        setAdminReports(false);
        setAdminSettings(false);
    };
    const handleShowProducts = () => {
        setAdminHome(false);
        setAdminOrder(false);
        setAdminProducts(true);
        setAdminUsers(false);
        setAdminReports(false);
        setAdminSettings(false);
    };
    const handleShowUsers = () => {
        setAdminHome(false);
        setAdminOrder(false);
        setAdminProducts(false);
        setAdminUsers(true);
        setAdminReports(false);
        setAdminSettings(false);
    };
    const handleShowReports = () => {
        setAdminHome(false);
        setAdminOrder(false);
        setAdminProducts(false);
        setAdminUsers(false);
        setAdminReports(true);
        setAdminSettings(false);
    };
    const handleShowSettings = () => {
        setAdminHome(false);
        setAdminOrder(false);
        setAdminProducts(false);
        setAdminUsers(false);
        setAdminReports(false);
        setAdminSettings(true);
    };

    return (
        <>
            <div className="w-full h-[100vh] flex justify-between">
                <div className="w-[17%] h-full bg-red-50">
                    <div className="w-full h-full flex flex-col justify-between">
                        <div className="w-full h-[22rem]">
                            <div className="w-full h-[20%] bg-red-500 flex items-center justify-center">
                                <img src={Logo} alt="" className="w-28 h-28" />
                            </div>
                            <div className="w-full h-[80%] bg-indigo-300 py-3">
                                <ul className="w-full h-full flex flex-col justify-between">
                                    <li
                                        className="w-full h-12 bg-pry flex items-center gap-5 pl-5 cursor-pointer"
                                        onClick={handleShowAdmin}
                                    >
                                        <BiSolidDashboard className="w-6 h-6" />
                                        <p>Dashboard</p>
                                    </li>
                                    <li
                                        className="w-full h-12 flex items-center gap-5 pl-5 cursor-pointer"
                                        onClick={handleShowOrder}
                                    >
                                        <AiOutlineUnorderedList className="w-6 h-6" />
                                        <p>Orders</p>
                                    </li>
                                    <li
                                        className="w-full h-12 flex items-center gap-5 pl-5 cursor-pointer"
                                        onClick={handleShowProducts}
                                    >
                                        <BsFillBagCheckFill className="w-6 h-6" />
                                        <p>Products</p>
                                    </li>
                                    <li
                                        className="w-full h-12 flex items-center gap-5 pl-5 cursor-pointer"
                                        onClick={handleShowUsers}
                                    >
                                        <HiUsers className="w-6 h-6" />
                                        <p>Users</p>
                                    </li>
                                    <li
                                        className="w-full h-12 flex items-center gap-5 pl-5 cursor-pointer"
                                        onClick={handleShowReports}
                                    >
                                        <SiGoogleanalytics className="w-6 h-6" />
                                        <p>Reports</p>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="w-full h-72 flex flex-col justify-around">
                            <div
                                className="w-full h-10 flex items-center pl-5 gap-5 cursor-pointer"
                                onClick={handleShowSettings}
                            >
                                <RiSettings5Fill className="w-6 h-6" />
                                <p>Settings</p>
                            </div>
                            <div className="w-full h-52 px-10 bg-gray-400 flex items-end">
                                <div className="w-full h-40 flex flex-col justify-end items-center gap-5 bg-red-500 relative">
                                    <img
                                        src={promo}
                                        alt=""
                                        className="absolute w-16 h-16 top-[-20px]"
                                    />
                                    <p className="text-sm text-center">
                                        Upgrade to pro and get 25% off your
                                        first purchase
                                    </p>
                                    <button className="w-full h-10 rounded-sm bg-pry text-white">
                                        Get discount
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[82%] h-full bg-slate-50 flex flex-col justify-between">
                    <div className="w-full h-16">
                        <div className="w-full h-full flex justify-end items-center px-5 bg-blue-200">
                            <div className="w-64 h-12 bg-lime-100 flex items-center justify-around cursor-pointer">
                                <div className="w-10 h-10 bg-amber-200 rounded-full"></div>
                                <div className="w-40 h-10">
                                    <p className="font-semibold">
                                        Rapheal Ukachukwu
                                    </p>
                                    <p className="text-xs">Admin</p>
                                </div>
                                <div className="w-5 h-10 flex items-center justify-center">
                                    <AiFillCaretDown />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[89%] bg-grey-200">
                      {
                        adminHome? <AdminHome/> : adminOrder ? <AdminOrder/> : adminProducts ? <AdminProducts/> : adminUsers? <AdminUsers/> : adminReports ? <AdminReports/> : adminSettings? <AdminSettings/> : null 
                      }
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminDashboard;