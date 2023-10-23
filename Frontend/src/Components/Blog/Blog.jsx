import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import blogHeadphone from "../../assets/blogHeadphone.jpg";
import {BiTimeFive} from "react-icons/bi";
import { Pagination } from "antd";

const Blog = () => {
    return (
        <>
            <Header />
            <div className="w-full h-max  px-20">
                <div className="w-full h-40 flex items-end py-10 text-4xl font-bold">
                    Top Stories
                </div>
                <div className="w-full h-[400vh]  flex justify-between">
                    <div className="h-full w-[60%] flex flex-col gap-10">
                        <div className="w-full h-[95vh] bg-slate-50  p-4">
                            <div className="w-full h-[50%]">
                                <img
                                    src={blogHeadphone}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full h-[40%] py-5 flex flex-col gap-5">
                                <h1 className="text-3xl text-pry ">
                                    New Model Update{" "}
                                    <span className="text-gray-300">
                                        - 2 hours ago
                                    </span>
                                </h1>
                                <p className="text-xl w-[65%]">
                                    An updated model of Bowers & Wilkins Px7
                                    Headphones is unveiled
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Error itaque voluptatibus
                                    amet dolores temporibus sint quos, placeat
                                    quasi veniam illum dolorem iure quas unde
                                    laborum libero magni explicabo mollitia
                                    ipsam? Officia praesentium id quas quo
                                    consequatur, veritatis quisquam nihil?
                                    Voluptatibus ullam expedita esse assumenda?
                                    Dicta, tenetur hic sit velit voluptate,
                                    dolorum rerum, magni suscipit facilis porro
                                    nemo molestiae perspiciatis! Placeat.
                                </p>
                            </div>
                            <div className="w-full h-[10%]  flex items-center">
                                <button className="w-32 h-12 bg-pry rounded-md text-white">
                                    Read More
                                </button>
                            </div>
                        </div>
                        <div className="w-full h-[95vh] bg-slate-50  p-4">
                            <div className="w-full h-[50%]">
                                <img
                                    src={blogHeadphone}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full h-[40%] py-5 flex flex-col gap-5">
                                <h1 className="text-3xl text-pry ">
                                    New Model Update{" "}
                                    <span className="text-gray-300">
                                        - 2 hours ago
                                    </span>
                                </h1>
                                <p className="text-xl w-[65%]">
                                    An updated model of Bowers & Wilkins Px7
                                    Headphones is unveiled
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Error itaque voluptatibus
                                    amet dolores temporibus sint quos, placeat
                                    quasi veniam illum dolorem iure quas unde
                                    laborum libero magni explicabo mollitia
                                    ipsam? Officia praesentium id quas quo
                                    consequatur, veritatis quisquam nihil?
                                    Voluptatibus ullam expedita esse assumenda?
                                    Dicta, tenetur hic sit velit voluptate,
                                    dolorum rerum, magni suscipit facilis porro
                                    nemo molestiae perspiciatis! Placeat.
                                </p>
                            </div>
                            <div className="w-full h-[10%]  flex items-center">
                                <button className="w-32 h-12 bg-pry rounded-md text-white">
                                    Read More
                                </button>
                            </div>
                        </div>
                        <div className="w-full h-[95vh] bg-slate-50  p-4">
                            <div className="w-full h-[50%]">
                                <img
                                    src={blogHeadphone}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full h-[40%] py-5 flex flex-col gap-5">
                                <h1 className="text-3xl text-pry ">
                                    New Model Update{" "}
                                    <span className="text-gray-300">
                                        - 2 hours ago
                                    </span>
                                </h1>
                                <p className="text-xl w-[65%]">
                                    An updated model of Bowers & Wilkins Px7
                                    Headphones is unveiled
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Error itaque voluptatibus
                                    amet dolores temporibus sint quos, placeat
                                    quasi veniam illum dolorem iure quas unde
                                    laborum libero magni explicabo mollitia
                                    ipsam? Officia praesentium id quas quo
                                    consequatur, veritatis quisquam nihil?
                                    Voluptatibus ullam expedita esse assumenda?
                                    Dicta, tenetur hic sit velit voluptate,
                                    dolorum rerum, magni suscipit facilis porro
                                    nemo molestiae perspiciatis! Placeat.
                                </p>
                            </div>
                            <div className="w-full h-[10%]  flex items-center">
                                <button className="w-32 h-12 bg-pry rounded-md text-white">
                                    Read More
                                </button>
                            </div>
                        </div>
                        <div className="w-full h-[95vh] bg-slate-50  p-4">
                            <div className="w-full h-[50%]">
                                <img
                                    src={blogHeadphone}
                                    alt=""
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="w-full h-[40%] py-5 flex flex-col gap-5">
                                <h1 className="text-3xl text-pry ">
                                    New Model Update{" "}
                                    <span className="text-gray-300">
                                        - 2 hours ago
                                    </span>
                                </h1>
                                <p className="text-xl w-[65%]">
                                    An updated model of Bowers & Wilkins Px7
                                    Headphones is unveiled
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Error itaque voluptatibus
                                    amet dolores temporibus sint quos, placeat
                                    quasi veniam illum dolorem iure quas unde
                                    laborum libero magni explicabo mollitia
                                    ipsam? Officia praesentium id quas quo
                                    consequatur, veritatis quisquam nihil?
                                    Voluptatibus ullam expedita esse assumenda?
                                    Dicta, tenetur hic sit velit voluptate,
                                    dolorum rerum, magni suscipit facilis porro
                                    nemo molestiae perspiciatis! Placeat.
                                </p>
                            </div>
                            <div className="w-full h-[10%]  flex items-center">
                                <button className="w-32 h-12 bg-pry rounded-md text-white">
                                    Read More
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="h-full w-[35%]  p-4 flex flex-col gap-3">
                        <div className="w-full h-12 text-2xl font-semibold flex items-center">Featured</div>
                        <div className="w-full h-max flex flex-col gap-3">
                            <div className="w-full h-28 bg-slate-100 flex justify-between p-2">
                                <div className="w-[25%] h-full bg-black">
                                    <img src="" alt="" />
                                </div>
                                <div className="w-[72%] h-full flex flex-col justify-around py-1">
                                    <p className="text-base font-semibold">
                                        ARTICLE:{" "}
                                        <span className="font-normal">
                                            Lorem ipsum dolor sit amet,
                                            consur adipisicing elit. Vitae
                                            error.
                                        </span>
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <BiTimeFive />
                                        <span>5 days ago</span>
                                        <div className="w-2 h-2 bg-black rounded-full"></div>
                                        <p>technology</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-28 bg-slate-100 flex justify-between p-2">
                                <div className="w-[25%] h-full bg-black">
                                    <img src="" alt="" />
                                </div>
                                <div className="w-[72%] h-full flex flex-col justify-around py-1">
                                    <p className="text-base font-semibold">
                                        ARTICLE:{" "}
                                        <span className="font-normal">
                                            Lorem ipsum dolor sit amet,
                                            consur adipisicing elit. Vitae
                                            error.
                                        </span>
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <BiTimeFive />
                                        <span>5 days ago</span>
                                        <div className="w-2 h-2 bg-black rounded-full"></div>
                                        <p>technology</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-28 bg-slate-100 flex justify-between p-2">
                                <div className="w-[25%] h-full bg-black">
                                    <img src="" alt="" />
                                </div>
                                <div className="w-[72%] h-full flex flex-col justify-around py-1">
                                    <p className="text-base font-semibold">
                                        ARTICLE:{" "}
                                        <span className="font-normal">
                                            Lorem ipsum dolor sit amet,
                                            consur adipisicing elit. Vitae
                                            error.
                                        </span>
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <BiTimeFive />
                                        <span>5 days ago</span>
                                        <div className="w-2 h-2 bg-black rounded-full"></div>
                                        <p>technology</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-28 bg-slate-100 flex justify-between p-2">
                                <div className="w-[25%] h-full bg-black">
                                    <img src="" alt="" />
                                </div>
                                <div className="w-[72%] h-full flex flex-col justify-around py-1">
                                    <p className="text-base font-semibold">
                                        ARTICLE:{" "}
                                        <span className="font-normal">
                                            Lorem ipsum dolor sit amet,
                                            consur adipisicing elit. Vitae
                                            error.
                                        </span>
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <BiTimeFive />
                                        <span>5 days ago</span>
                                        <div className="w-2 h-2 bg-black rounded-full"></div>
                                        <p>technology</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-40 flex items-center justify-center">
                <Pagination defaultCurrent={1} total={50} />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Blog;
