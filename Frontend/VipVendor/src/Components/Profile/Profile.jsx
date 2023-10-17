import {BiArrowBack} from "react-icons/bi";
import {HiMiniUser} from "react-icons/hi2";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import {TbLogout, TbTruckDelivery} from "react-icons/tb";
import {BsCreditCard2BackFill} from "react-icons/bs";
import {AiFillHeart} from "react-icons/ai";
import ProfileContent from "./ProfileContent";
import { useState } from "react";
import Account from "./Account";
import Orders from "./Orders";
import Saved from "./Saved";
import Payments from "./Payments";


const Profile = () => {

  const [myProfile, setMyProfile] = useState(true)
  const [myAccount, setMyAccount] = useState(false)
  const [myOrders, setMyOrders] = useState(false)
  const [mySaved, setMySaved] = useState(false)
  const [myPayment, setMyPayment] = useState(false)

  const setProfile = () =>{
    setMyProfile(true)
    setMyAccount(false)
    setMyOrders(false)
    setMySaved(false)
    setMyPayment(false)
  }
  const setAccount = () =>{
    setMyProfile(false)
    setMyAccount(true)
    setMyOrders(false)
    setMySaved(false)
    setMyPayment(false)
  }
  const setOrders = () =>{
    setMyProfile(false)
    setMyAccount(false)
    setMyOrders(true)
    setMySaved(false)
    setMyPayment(false)
  }
  const setSaved = () =>{
    setMyProfile(false)
    setMyAccount(false)
    setMyOrders(false)
    setMySaved(true)
    setMyPayment(false)
  }
  const setPayment = () =>{
    setMyProfile(false)
    setMyAccount(false)
    setMyOrders(false)
    setMySaved(false)
    setMyPayment(true)
  }
  

    return (
        <>
            <div className="w-full h-max">
                <Header />
                <div className="w-full h-max px-20">
                    <div className="w-full h-20 flex items-center">
                        <BiArrowBack className="mr-6 text-2xl" />
                        <p>
                            Home /{" "}
                            <span className="text-[#3F51B5] cursor-pointer" onClick={setProfile}>Profile</span>
                        </p>
                    </div>
                    <div className="w-full h-max flex justify-between">
                        <div className="w-[30%] h-[40%] bg-slate-100 flex justify-center py-8">
                            <ul className="w-[80%] h-[60vh] flex flex-col gap-4">
                                <li className="w-full h-12 flex items-center text-xl gap-6 cursor-pointer" onClick={setAccount}>
                                    <HiMiniUser className="text-2xl" />
                                    <span>My Account</span>
                                </li>
                                <li className="w-full h-12 flex items-center text-xl gap-6 cursor-pointer" onClick={setOrders}>
                                    <TbTruckDelivery className="text-2xl" />
                                    <span>Orders</span>
                                </li>
                                <li className="w-full h-12 flex items-center text-xl gap-6 cursor-pointer" onClick={setPayment}>
                                    <BsCreditCard2BackFill className="text-2xl" />
                                    <span>Payment Methods</span>
                                </li>
                                <li className="w-full h-12 flex items-center text-xl gap-6 cursor-pointer" onClick={setSaved}>
                                    <AiFillHeart className="text-2xl" />
                                    <span>Saved</span>
                                </li>
                                <li className="w-full h-12 flex items-center text-xl gap-6 cursor-pointer" >
                                    <TbLogout className="text-2xl" />
                                    <span>Logout</span>
                                </li>
                            </ul>
                        </div>
                        <div className="w-[66%] h-[100%] ">
                           <div className="w-full h-max  flex gap-10 flex-col">
                            {
                              myProfile ? <ProfileContent/> : myAccount ? <Account/> : myOrders ? <Orders/> : myPayment? <Payments/> : mySaved ? <Saved/> : null
                            }
                            
                           </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default Profile;
