import {Pagination} from "antd";
import {AiFillStar} from "react-icons/ai";
import {BiSolidUserVoice, BiTrendingDown, BiTrendingUp} from "react-icons/bi";
import {FaUsers} from "react-icons/fa";
import {MdOutlineMoreVert} from "react-icons/md";

const AdminReports = () => {
    return (
        <>
            <div className="w-full h-[89vh] bg-sky-200">
                <div className="">
                    <div className="">
                        <div className="">
                            <AiFillStar />
                            <h1>
                                <p>
                                    Customer Ratings <span>4.2</span>
                                </p>
                            </h1>
                        </div>
                        <div className="">
                            <p>
                                <span className="flex items-center mr-1 text-green-400">
                                    <BiTrendingUp /> 10%
                                </span>
                                up from the past week
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            <FaUsers />
                            <h1>
                                <p>
                                    Conversion Rate <span>7.80%</span>
                                </p>
                            </h1>
                        </div>
                        <div className="">
                            <nav>
                                <p>Added to cart</p>
                                <p>150</p>
                                <p>
                                    <BiTrendingUp />
                                    20%
                                </p>
                            </nav>
                            <nav>
                                <p>Proceed to checkout</p>
                                <p>50</p>
                                <p>
                                    <BiTrendingDown />
                                    20%
                                </p>
                            </nav>
                            <nav>
                                <p>Purchased</p>
                                <p>40</p>
                                <p>
                                    <BiTrendingUp />
                                    20%
                                </p>
                            </nav>
                            <p>
                                <span className="flex items-center mr-1 text-green-400">
                                    <BiTrendingUp /> 10%
                                </span>
                                up from the past week
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <div className="">
                            <BiSolidUserVoice />
                            <h1>
                                <p>
                                    Retention Rate <span>15%</span>
                                </p>
                            </h1>
                        </div>
                        <div className="">
                            <p>
                                <span className="flex items-center mr-1 text-green-400">
                                    <BiTrendingUp /> 10%
                                </span>
                                up from the past week
                            </p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="">All Reports</div>
                    <div className="">
                        <div className="">
                            <div className="">User</div>
                            <div className="">Region</div>
                            <div className="">Product</div>
                            <div className="">Status</div>
                            <div className="">Action</div>
                        </div>
                        <div className="">
                            <div className="">
                                <div className="">Rapheal Ukachukwu</div>
                                <div className="">Lagos, Nigeria</div>
                                <div className="">Iphone 13 Pro Max</div>
                                <div className="">Fixed</div>
                                <div className="">
                                    <MdOutlineMoreVert />
                                </div>
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
