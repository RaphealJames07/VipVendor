import {AiFillGift, AiOutlineDownload} from "react-icons/ai";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import {TbBasketCancel, TbLocationFilled} from "react-icons/tb";
import {BsBoxFill} from "react-icons/bs";

const OrderDetail = () => {
    return (
        <>
            <div>
                <Header />
                <div className="w-full h-[100vh]">
                    <div className="">
                        <div className="">
                            <div className="">
                                <p>Order No: VIP-12345678</p>
                                <button>
                                    <AiOutlineDownload />
                                    Invoice
                                </button>
                            </div>
                            <div className="">
                                <div>Product Details</div>
                                <div>Item Price</div>
                                <div>Quantity</div>
                                <div>Total Amount</div>
                            </div>
                            <div className="">
                                <div>
                                    <img src="" alt="" />
                                </div>
                                <div>
                                    <p>Iphone 12 Pro Max</p>
                                    <p>Color: Pink</p>
                                    <p>Category: Phone</p>
                                </div>
                                <div>
                                    <p>N200,000</p>
                                </div>
                                <div>2</div>
                                <div>Total Amount: 400,000</div>
                            </div>
                            <div>
                                <p>
                                    Sub Total: <span>400,000</span>
                                </p>
                                <p>
                                    Discount(ONEYBNAD): <span>-30,000</span>
                                </p>
                                <p>
                                    Delivery Fee: <span>3,000</span>
                                </p>
                                <p>
                                    Total: <span>N400,000</span>
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <div>Order Status</div>
                            <div>
                                <button>
                                    <TbLocationFilled />
                                    Change Address
                                </button>
                                <button>
                                    <TbBasketCancel />
                                    Cancel Order
                                </button>
                            </div>
                            <div>
                                <div className="">
                                    <div className="">
                                        <div className="">
                                            <span>
                                                <BsBoxFill />
                                            </span>
                                        </div>
                                        <div className="">
                                            <p>
                                                Order Placed{" "}
                                                <span>Wed, 15 Oct 2023</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="">......</div>
                                        <div className="">
                                            <p>
                                                An order has been placed.{" "}
                                                <span>
                                                    Wed, 15 Oct 2023 - 5:34PM
                                                </span>
                                            </p>
                                            <p>
                                                Your order is up for processing{" "}
                                                <span>
                                                    Wed, 15 Oct 2023 - 5:34PM
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="">
                                        <div className="">
                                            <span>
                                                <AiFillGift />
                                            </span>
                                        </div>
                                        <div className="">
                                            <p>
                                                Packaged, Out for delivery
                                                <span>Wed, 15 Oct 2023</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="">......</div>
                                        <div className="">
                                            <p>
                                                An order has been placed.{" "}
                                                <span>
                                                    Wed, 15 Oct 2023 - 5:34PM
                                                </span>
                                            </p>
                                            <p>
                                                Your order is up for processing{" "}
                                                <span>
                                                    Wed, 15 Oct 2023 - 5:34PM
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="">
                                        <div className="">
                                            <span>
                                                <BsBoxFill />
                                            </span>
                                        </div>
                                        <div className="">
                                            <p>
                                                Order Placed{" "}
                                                <span>Wed, 15 Oct 2023</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="">......</div>
                                        <div className="">
                                            <p>
                                                An order has been placed.{" "}
                                                <span>
                                                    Wed, 15 Oct 2023 - 5:34PM
                                                </span>
                                            </p>
                                            <p>
                                                Your order is up for processing{" "}
                                                <span>
                                                    Wed, 15 Oct 2023 - 5:34PM
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="">
                                        <div className="">
                                            <span>
                                                <BsBoxFill />
                                            </span>
                                        </div>
                                        <div className="">
                                            <p>
                                                Order Placed{" "}
                                                <span>Wed, 15 Oct 2023</span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <div className="">......</div>
                                        <div className="">
                                            <p>
                                                An order has been placed.{" "}
                                                <span>
                                                    Wed, 15 Oct 2023 - 5:34PM
                                                </span>
                                            </p>
                                            <p>
                                                Your order is up for processing{" "}
                                                <span>
                                                    Wed, 15 Oct 2023 - 5:34PM
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=""></div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default OrderDetail;
