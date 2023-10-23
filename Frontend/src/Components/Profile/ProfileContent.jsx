import {FaUserEdit} from "react-icons/fa";
import {MdOutlinePayments} from "react-icons/md";
import {RiCustomerService2Fill} from "react-icons/ri";
import profilePic from "../../assets/profile-pic.png";
import {BiPackage, BiSolidPencil} from "react-icons/bi";
import {AiFillHeart} from "react-icons/ai";

const ProfileContent = () => {
    return (
        <>
            <div className="w-full h-[30vh] flex flex-col items-center gap-3 ">
                <div className="w-44 h-44 bg-red-500 rounded-full relative">
                    <img
                        src={profilePic}
                        alt=""
                        className="w-full h-full rounded-full"
                    />
                    <span className="absolute top-0 right-2 w-12 h-12 rounded-full flex items-center justify-center bg-pry cursor-pointer">
                        <BiSolidPencil className="text-2xl text-white" />
                    </span>
                </div>
                <div className="w-full h-[20%] flex items-center justify-center text-3xl font-semibold">
                    Welcome,<span> John Doe</span>
                </div>
            </div>
            <div className="w-full h-[50vh] flex flex-col justify-between">
                <div className="w-full h-[45%] bg-white flex justify-between">
                    <div className="w-[48%] h-full flex justify-between border-x-2 border-y-2 border-black rounded cursor-pointer">
                        <div className="w-[75%] h-full flex flex-col justify-around py-5 px-6">
                            <h1 className="text-2xl font-semibold">
                                Manage Account
                            </h1>
                            <p>
                                Edit account information, address book and
                                password
                            </p>
                        </div>
                        <div className="w-[25%] h-full flex items-center justify-center">
                            <span className="w-14 h-14 rounded-full flex items-center justify-center bg-pry">
                                <FaUserEdit className="text-2xl text-white" />
                            </span>
                        </div>
                    </div>
                    <div className="w-[48%] h-full flex justify-between border-x-2 border-y-2 border-black rounded cursor-pointer">
                        <div className="w-[75%] h-full flex flex-col justify-around py-5 px-6">
                            <h1 className="text-2xl font-semibold">Orders</h1>
                            <p>
                                See and manage order details, track past orders
                                and history
                            </p>
                        </div>
                        <div className="w-[25%] h-full flex items-center justify-center">
                            <span className="w-14 h-14 rounded-full flex items-center justify-center bg-pry">
                                <BiPackage className="text-2xl text-white" />
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[45%] bg-white flex justify-between">
                    <div className="w-[48%] h-full flex justify-between border-x-2 border-y-2 border-black rounded cursor-pointer">
                        <div className="w-[75%] h-full flex flex-col justify-around py-5 px-6">
                            <h1 className="text-2xl font-semibold">
                                Payment Methods
                            </h1>
                            <p>
                                Make your purchases fast and easy by selecting a
                                payment method
                            </p>
                        </div>
                        <div className="w-[25%] h-full flex items-center justify-center">
                            <span className="w-14 h-14 rounded-full flex items-center justify-center bg-pry">
                                <MdOutlinePayments className="text-2xl text-white" />
                            </span>
                        </div>
                    </div>
                    <div className="w-[48%] h-full flex justify-between border-x-2 border-y-2 border-black rounded cursor-pointer">
                        <div className="w-[75%] h-full flex flex-col justify-around py-5 px-6">
                            <h1 className="text-2xl font-semibold">
                                Saved Items
                            </h1>
                            <p>Manage saved items</p>
                        </div>
                        <div className="w-[25%] h-full flex items-center justify-center">
                            <span className="w-14 h-14 rounded-full flex items-center justify-center bg-pry">
                                <AiFillHeart className="text-2xl text-white" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[40vh] flex justify-around items-center flex-col border-x-2 border-y-2 rounded-md border-black py-5">
                <div className="w-full h-[40%] flex flex-col items-center justify-around  py-2">
                    <h1 className="text-3xl font-semibold">Need more help?</h1>
                    <p>Try these next steps</p>
                </div>
                <div className="w-[50%] h-[40%] flex justify-between bg-white shadow-lg rounded-md cursor-pointer">
                    <div className="w-[20%] h-full flex items-center justify-center">
                        <span className="w-14 h-14 rounded-full bg-pry flex items-center justify-center text-white">
                            <RiCustomerService2Fill className="text-2xl" />
                        </span>
                    </div>
                    <div className="w-[75%] h-full flex flex-col justify-center gap-1">
                        <p className="text-2xl">Contact us</p>
                        <p>Let us hear from you</p>
                    </div>
                </div>
            </div>
            <p className="w-full h-20">
                To ensure privacy and security, only you can see your settings,
                review and manage your data.{" "}
                <span className="text-pry cursor-pointer">Learn more</span>
            </p>
        </>
    );
};

export default ProfileContent;
