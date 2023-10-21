import {
    AiFillGift,
    AiFillPhone,
    AiOutlineDownload,
    AiOutlineMail,
} from "react-icons/ai";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import {TbLocationFilled, TbTruckDelivery} from "react-icons/tb";
import {BsBoxFill, BsShieldFillCheck} from "react-icons/bs";
import Truck from "../../assets/truckdelivery.gif";
import {MdCancelPresentation, MdLocationPin} from "react-icons/md";

const OrderDetail = () => {
    return (
        <>
            <div>
                <Header />
                <div className="w-full h-max flex flex-col justify-between px-20 py-5">
                    <div className="w-full h-14 flex items-center">
                        <p className="w-[30%] h-full flex items-center justify-between text-2xl font-medium">
                            Order Details<span>No: VIP-123456789</span>
                        </p>
                    </div>
                    <div className="w-full h-max bg-red-50 flex justify-between">
                        <div className="w-[78%] h-full flex flex-col gap-5">
                            <div className="w-full h-max bg-slate-100">
                                <div className="w-full h-16 flex justify-between px-5 items-center">
                                    <p className="text-lg font-semibold">
                                        Order No: VIP-12345678
                                    </p>
                                    <button className="flex items-center bg-emerald-500 w-24 h-8 justify-center cursor-pointer rounded text-white text-sm gap-2">
                                        <AiOutlineDownload />
                                        Invoice
                                    </button>
                                </div>
                                <div className="w-full h-12 flex items-center justify-between px-5 bg-slate-400">
                                    <div className="w-[40%] h-full flex items-center">
                                        Product Details
                                    </div>
                                    <div className="w-[20%] h-full flex items-center justify-center">
                                        Item Price
                                    </div>
                                    <div className="w-[20%] h-full flex items-center justify-center">
                                        Quantity
                                    </div>
                                    <div className="w-[20%] h-full flex items-center justify-center">
                                        Total Amount
                                    </div>
                                </div>
                                <div className="w-full h-28 flex px-5 py-3">
                                    <div className="w-[12%] h-full flex items-center justify-center bg-black">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="w-[28%] h-full flex flex-col justify-between py-3 px-3">
                                        <p className="text-lg font-semibold">
                                            Iphone 12 Pro Max
                                        </p>
                                        <p>Color: Pink</p>
                                        <p>Category: Phone</p>
                                    </div>
                                    <div className="w-[20%] h-full flex items-center justify-center">
                                        <p>N200,000</p>
                                    </div>
                                    <div className="w-[20%] h-full flex items-center justify-center">
                                        2
                                    </div>
                                    <div className="w-[20%] h-full flex items-center justify-center">
                                        400,000
                                    </div>
                                </div>
                                <div className="w-full h-28 flex px-5 py-3">
                                    <div className="w-[12%] h-full flex items-center justify-center bg-black">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="w-[28%] h-full flex flex-col justify-between py-3 px-3">
                                        <p className="text-lg font-semibold">
                                            Iphone 12 Pro Max
                                        </p>
                                        <p>Color: Pink</p>
                                        <p>Category: Phone</p>
                                    </div>
                                    <div className="w-[20%] h-full flex items-center justify-center">
                                        <p>N200,000</p>
                                    </div>
                                    <div className="w-[20%] h-full flex items-center justify-center">
                                        2
                                    </div>
                                    <div className="w-[20%] h-full flex items-center justify-center">
                                        400,000
                                    </div>
                                </div>

                                <div className="w-full h-60 flex justify-end px-5">
                                    <div className="w-64 h-full flex flex-col justify-between py-5 ">
                                        <p className="w-full flex justify-between">
                                            Sub Total: <span>400,000</span>
                                        </p>
                                        <p className="w-full flex justify-between">
                                            Discount(12345):{" "}
                                            <span>-30,000</span>
                                        </p>
                                        <p className="w-full flex justify-between">
                                            Delivery Fee: <span>3,000</span>
                                        </p>
                                        <p className="w-full flex justify-between">
                                            Total: <span>N400,000</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-max bg-slate-50 px-5">
                                <div className="w-full h-14 flex justify-between items-center">
                                    <div className="text-lg font-semibold">
                                        Order Status
                                    </div>
                                    <div className="w-[19rem] h-full flex items-center justify-between">
                                        <button className="w-36 h-10 flex items-center justify-center text-sm gap-2 bg-red-50">
                                            <TbLocationFilled />
                                            Change Address
                                        </button>
                                        <button className="w-36 h-10 flex items-center justify-center text-sm gap-2 bg-red-50">
                                            <MdCancelPresentation />
                                            Cancel Order
                                        </button>
                                    </div>
                                </div>
                                <div className="w-full h-max py-5 flex flex-col gap-2">
                                    <div className="w-full h-max">
                                        <div className="w-full h-14 flex items-center gap-5 ">
                                            <div className="w-10 h-10 bg-lime-500 rounded-full flex items-center justify-center">
                                                <span>
                                                    <BsBoxFill />
                                                </span>
                                            </div>
                                            <div className="">
                                                <p className="font-semibold">
                                                    Order Placed{" - "}
                                                    <span className="font-medium">
                                                        Wed, 15 Oct 2023
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-full flex h-max">
                                            {/* <div className="w-1 h-max bg-black"></div> */}
                                            <div className="w-full h-max border-l-4 border-dotted pl-10 ml-4 flex flex-col gap-5">
                                                <div className="w-full h-10 ">
                                                    <p className="text-sm flex flex-col">
                                                        Your order has been
                                                        placed.{" "}
                                                        <span className="text-gray-500">
                                                            Wed, 15 Oct 2023 -
                                                            5:34PM
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="w-full h-10 ">
                                                    <p className="text-sm flex flex-col">
                                                        Your order is up for
                                                        processing{" "}
                                                        <span className="text-gray-500">
                                                            Wed, 15 Oct 2023 -
                                                            5:34PM
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full h-max">
                                        <div className="w-full h-14 flex items-center gap-5 ">
                                            <div className="w-10 h-10 bg-lime-500 rounded-full flex items-center justify-center">
                                                <span>
                                                    <AiFillGift />
                                                </span>
                                            </div>
                                            <div className="">
                                                <p className="font-semibold">
                                                    Packaged, Out for delivery {" - "}
                                                    <span className="font-medium">
                                                        Wed, 15 Oct 2023
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-full flex h-max">
                                            {/* <div className="">......</div> */}
                                            <div className="w-full h-max border-l-4 border-dotted pl-10 ml-4 flex flex-col gap-5">
                                                <div className="w-full h-10 ">
                                                    <p className="text-sm flex flex-col">
                                                        Your order is processed
                                                        and ready for delivery
                                                        <span className="text-gray-500">
                                                            Wed, 15 Oct 2023 -
                                                            5:34PM
                                                        </span>
                                                    </p>
                                                </div>
                                                <div className="w-full h-10 ">
                                                    <p className="text-sm flex flex-col">
                                                        Your order is picked up
                                                        by the driver enroute to
                                                        you
                                                        <span className="text-gray-500">
                                                            Wed, 15 Oct 2023 -
                                                            5:34PM
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full h-max">
                                        <div className="w-full h-14 flex items-center gap-5 ">
                                            <div className="w-10 h-10 bg-lime-500 rounded-full flex items-center justify-center">
                                                <span>
                                                    <BsBoxFill />
                                                </span>
                                            </div>
                                            <div className="font-semibold">
                                                <p>
                                                    Order Delivered {" - "}
                                                    <span className="font-medium">
                                                        Wed, 15 Oct 2023
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-full flex h-max">
                                            {/* <div className="">......</div> */}
                                            <div className="w-full h-max  pl-11 ml-4 flex flex-col gap-5">
                                                <div className="w-full h-10 ">
                                                    <p className="text-sm flex flex-col">
                                                    Your order has been
                                                    delivered
                                                    <span>
                                                        Wed, 15 Oct 2023 -
                                                        5:34PM
                                                    </span>
                                                </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[20%] h-full bg-violet-100 ">
                            <div className="w-full h-64 ">
                                <div className="w-full h-14 bg-slate-50 flex items-center gap-4 border-b border-b-gray-500">
                                    <TbTruckDelivery className="w-6 h-6 text-gray-500 ml-4" />
                                    <p>Logistics Details</p>
                                </div>
                                <div className="w-full h-48 flex flex-col items-center justify-around">
                                    <div className="w-full h-1/2 flex items-center justify-center">
                                        <img src={Truck} alt="" className="w-20 h-20"/>
                                    </div>
                                    <div className="text-center w-full h-1/2">
                                        <h2>RQK Logistics</h2>
                                        <h3>Phone no: 080123456789</h3>
                                        <p>
                                            Payment mode: <span>Debit Card</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-64 ">
                                <div className="w-full">Customer Details</div>
                                <div className="w-full">
                                    <div>
                                        <img src="" alt="" />
                                        <p>
                                            Joseph Parker <span>Customer</span>
                                        </p>
                                    </div>
                                    <div>
                                        <AiOutlineMail />
                                        Joseph1234@gmail.com
                                    </div>
                                    <div>
                                        <AiFillPhone />
                                        +1234456780
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-64 ">
                                <div className="w-full">
                                    <MdLocationPin />
                                    Billing Address
                                </div>
                                <div className="w-full">
                                    <p>Joseph Parker</p>
                                    <p>+1234567890</p>
                                    <p>126 Kukoyi Street Olodi Apapa Lagos</p>
                                    <p>Lagos Nigeria</p>
                                </div>
                            </div>
                            <div className="w-full h-64 ">
                                <div className="w-full">
                                    <BsShieldFillCheck />
                                    Payment Details
                                </div>
                                <div className="w-full">
                                    <p>
                                        Transaction:{" "}
                                        <span>#VLZ124561278124</span>
                                    </p>
                                    <p>
                                        Payment Method: <span>Debit Card</span>
                                    </p>
                                    <p>
                                        Card Holder: <span>Joseph Peter</span>
                                    </p>
                                    <p>
                                        Card Number:{" "}
                                        <span>**** **** **** 1234</span>
                                    </p>
                                    <p>
                                        Amount: <span>N123,000</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default OrderDetail;
