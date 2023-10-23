import {BiArrowBack} from "react-icons/bi";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import {BsFillPenFill} from "react-icons/bs";
import {MdDelete} from "react-icons/md";

const Checkout = () => {
    return (
        <>
            <div>
                <Header />
                <div className="w-full h-[120vh]">
                    <div className="w-full h-20 flex items-center pl-20">
                        <BiArrowBack className="mr-6 text-2xl" />
                        <p>
                            Cart /{" "}
                            <span className="text-[#3F51B5]">Checkout</span>
                        </p>
                    </div>
                    <div className="w-full h-[90%] bg-red-50 px-20">
                        <div className="w-full h-16 flex items-center justify-center">
                            <div className="w-8 h-8 bg-pry rounded-full"></div>
                            <div className="w-36 h-1 bg-pry"></div>
                            <div className="w-8 h-8 bg-pry rounded-full"></div>
                            <div className="w-36 h-1 bg-pry"></div>
                            <div className="w-8 h-8 bg-pry rounded-full"></div>
                        </div>
                        <div className="w-full h-[90%] flex justify-between">
                            <div className="w-[73%] h-full">
                                <div className="w-full h-[60%] bg-slate-100">
                                    <div className="w-full h-20 ">
                                        <h1 className="text-xl">
                                            Shippiing Information
                                        </h1>
                                        <p>Please Fill all information below</p>
                                    </div>
                                    <div className="w-full h-14 flex justify-between">
                                        <p className="flex items-center text-lg">
                                            Saved Address
                                        </p>
                                        <button className="w-36 h-10 bg-emerald-500 flex items-center justify-center rounded text-white">
                                            Add Address
                                        </button>
                                    </div>
                                    <div className="w-full h-[69%] bg-red-400 flex gap-10 items-center justify-center">
                                        <div className="w-72 h-60 bg-sky-400 p-2 rounded">
                                            <div className="w-full h-[85%] flex flex-col justify-around">
                                                <p>ADDRESS 1</p>
                                                <p>Rapheal James</p>
                                                <p>
                                                    12 Kukoyi street olodi apapa
                                                    lagos nigeria 12 Kukoyi
                                                    street olodi apapa lagos
                                                    nigeria
                                                </p>
                                                <p>08129931343</p>
                                                <p>123@gmail.com</p>
                                            </div>
                                            <div className="w-full h-[15%] flex justify-between items-center">
                                                <p className="w-20 flex items-center h-full gap-3 cursor-pointer">
                                                    <BsFillPenFill />
                                                    Edit
                                                </p>
                                                <p className="w-20 flex items-center h-full gap-3 cursor-pointer ">
                                                    <MdDelete />
                                                    Delete
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-72 h-60 bg-sky-400 p-2 rounded">
                                            <div className="w-full h-[85%] flex flex-col justify-around">
                                                <p>ADDRESS 1</p>
                                                <p>Rapheal James</p>
                                                <p>
                                                    12 Kukoyi street olodi apapa
                                                    lagos nigeria 12 Kukoyi
                                                    street olodi apapa lagos
                                                    nigeria
                                                </p>
                                                <p>08129931343</p>
                                                <p>123@gmail.com</p>
                                            </div>
                                            <div className="w-full h-[15%] flex justify-between items-center">
                                                <p className="w-20 flex items-center h-full gap-3 cursor-pointer">
                                                    <BsFillPenFill />
                                                    Edit
                                                </p>
                                                <p className="w-20 flex items-center h-full gap-3 cursor-pointer ">
                                                    <MdDelete />
                                                    Delete
                                                </p>
                                            </div>
                                        </div>
                                        <div className="w-72 h-60 bg-sky-400 p-2 rounded">
                                            <div className="w-full h-[85%] flex flex-col justify-around">
                                                <p>ADDRESS 1</p>
                                                <p>Rapheal James</p>
                                                <p>
                                                    12 Kukoyi street olodi apapa
                                                    lagos nigeria 12 Kukoyi
                                                    street olodi apapa lagos
                                                    nigeria
                                                </p>
                                                <p>08129931343</p>
                                                <p>123@gmail.com</p>
                                            </div>
                                            <div className="w-full h-[15%] flex justify-between items-center">
                                                <p className="w-20 flex items-center h-full gap-3 cursor-pointer">
                                                    <BsFillPenFill />
                                                    Edit
                                                </p>
                                                <p className="w-20 flex items-center h-full gap-3 cursor-pointer ">
                                                    <MdDelete />
                                                    Delete
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-[30%] bg-amber-100 p-4">
                                    <p className="text-lg h-10 flex items-center">
                                        Payment Method
                                    </p>
                                    <div className="w-full h-[70%] flex items-center justify-between gap-7">
                                        <div className="w-[50%] h-[90%] bg-slate-50 rounded flex p-4">
                                            <div className="w-[70%] h-full flex flex-col justify-center gap-3">
                                                <p>Free Delivery</p>
                                                <p>
                                                    Expected Delivery 3 to 5
                                                    days
                                                </p>
                                            </div>
                                            <div className="w-[30%] h-full flex items-center">
                                                <p>Free</p>
                                            </div>
                                        </div>
                                        <div className="w-[50%] h-[90%] bg-slate-50 rounded flex p-4">
                                            <div className="w-[70%] h-full flex flex-col justify-center gap-3">
                                                <p>Express Delivery</p>
                                                <p>
                                                    Expected Delivery Within
                                                    24Hrs
                                                </p>
                                            </div>
                                            <div className="w-[30%] h-full flex items-center">
                                                <p>$24.99</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-[10%] flex justify-between items-center">
                                    <button className="w-36 h-10 flex items-center rounded-md bg-pry justify-center text-white">
                                        Back To Cart
                                    </button>
                                    <button className="w-44 h-10 flex items-center rounded-md bg-teal-500 justify-center text-white">
                                        Continue to payment
                                    </button>
                                </div>
                            </div>
                            <div className="w-[25%] bg-fuchsia-300 h-full p-4 flex flex-col gap-5">
                                <h1 className="w-full h-16 flex items-center justify-center text-2xl text-center">
                                    Order Summary
                                </h1>
                                <div className="w-full h-28 flex flex-col justify-between gap-5 ">
                                    <div className="w-full h-14 flex justify-center flex-col">
                                        <p>Iphone 12 Pro Max</p>
                                        <p className="w-full flex justify-between">
                                            Price: 200,000 <span>Quantity: X1</span>
                                        </p>
                                    </div>
                                    <div className="w-full h-14 flex justify-center flex-col">
                                        <p>Iphone 12 Pro Max</p>
                                        <p className="w-full flex justify-between">
                                            Price: 200,000 <span>Quantity: X1</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full h-20 flex flex-col justify-around ">
                                    <p className="w-full flex justify-between">
                                        Sub Total<span>N200,000</span>
                                    </p>
                                    <p className="w-full flex justify-between">
                                        Delivery Charges <span>20,000</span>
                                    </p>
                                </div>
                                <div className="w-full h-20 flex items-center">
                                    <h1 className="w-full flex justify-between text-2xl text-pry">
                                        Total <span>N275,000</span>
                                    </h1>
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

export default Checkout;
