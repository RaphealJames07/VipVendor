import {BiArrowBack} from "react-icons/bi";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import {AiFillHeart, AiFillStar, AiOutlineStar} from "react-icons/ai";

const ProductDetail = () => {
    return (
        <>
            <div className="w-full h-max">
                <Header />
                <div className="w-full h-[140vh]">
                    <div className="w-full h-16  flex items-center pl-20">
                        <BiArrowBack className="mr-6 text-2xl" />
                        <p>
                            Home / <span className="text-[#3F51B5]">Shop</span>{" "}
                            / <span>Categories</span> / <span>Drones</span> /
                            Camera Drone
                        </p>
                    </div>
                    <div className="w-full h-[93%] bg-slate-200 flex justify-center">
                        <div className="w-[90%] h-full flex flex-col justify-between">
                            <div className="w-full h-[35%] flex justify-between">
                                <div className="w-[48%] h-full  ">
                                    <div className="w-full h-[75%] bg-red-50">
                                        <img src="" alt="" />
                                    </div>
                                    <div className="w-full h-[25%] flex justify-between bg-black">
                                        <div className="w-[30%] h-full bg-white">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="w-[30%] h-full bg-white">
                                            <img src="" alt="" />
                                        </div>
                                        <div className="w-[30%] h-full bg-white">
                                            <img src="" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[48%] h-full bg-red-200 flex flex-col justify-between py-3">
                                    <h1 className="font-semibold text-2xl">
                                        Air 22 Camera Drone
                                    </h1>
                                    <p className="text-pry font-semibold">
                                        DJI MINI
                                    </p>
                                    <span className="flex items-center gap-1">
                                        <AiFillStar className="text-yellow-500" />
                                        <AiFillStar className="text-yellow-500" />
                                        <AiFillStar className="text-yellow-500" />
                                        <AiFillStar className="text-yellow-500" />
                                        <AiOutlineStar />
                                        (20)
                                    </span>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Minus, aliquam
                                        consequuntur voluptas mollitia, placeat
                                        provident veniam sunt voluptate a aut
                                        expedita labore numquam reprehenderit
                                        distinctio rem aliquid suscipit nostrum
                                        veritatis?
                                    </p>
                                    <div className="flex w-full h-10  gap-16">
                                        <div className="w-32 h-full  flex items-center justify-between">
                                            <p>Qty</p>
                                            <div className="w-[60%] h-full flex items-center justify-between">
                                                <span className="w-10 h-6 bg-pry text-white flex items-center justify-center text-xl cursor-pointer">-</span>
                                                <span className="w-10 h-6 flex items-center justify-center">2</span>
                                                <span className="w-10 h-6 bg-pry text-white flex items-center justify-center text-xl cursor-pointer">+</span>
                                            </div>
                                        </div>
                                        <div className="w-40 h-full  flex items-center gap-5">
                                            <p className="flex items-center">Colour:</p>
                                            <select name="colour" id="" className="h-[50%] w-20 text-sm cursor-pointer outline-none border-y-2 border-x-2 border-black">
                                                <option value="White">
                                                    White
                                                </option>
                                                <option value="White">
                                                    White
                                                </option>
                                                <option value="White">
                                                    White
                                                </option>
                                                <option value="White">
                                                    White
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <button className="w-[80%] h-12 text-white bg-pry rounded-md">Add to cart</button>
                                </div>
                            </div>
                            <div className="w-full h-[25%] bg-slate-100">
                                <div className="flex w-full h-[20%]">
                                    <div className="w-[33.9%] h-full border-b-2 border-b-pry flex items-center justify-center cursor-pointer">Product Information</div>
                                    <div className="w-[33.9%] h-full border-b-2 border-b-green-200 flex items-center justify-center cursor-pointer">Specification</div>
                                    <div className="w-[33.9%] h-full border-b-2 border-b-red-500 flex items-center justify-center cursor-pointer">Reviews</div>
                                </div>
                                <div className="w-full h-[80%] py-10 px-10">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Eos tempora esse mollitia
                                    animi impedit accusamus placeat enim. Alias,
                                    temporibus. Reiciendis enim quaerat quisquam
                                    excepturi atque eaque rerum nisi mollitia
                                    veniam eum! Nisi, autem voluptatem, beatae
                                    earum quam assumenda quo accusantium ducimus
                                    ipsam a eius error sint reprehenderit quod
                                    architecto animi. Odio consequuntur ratione
                                    officiis possimus nostrum. Neque, voluptatum
                                    laboriosam. Vero, id. Officia itaque eaque
                                    numquam corporis iusto! Quod minus
                                    consequuntur laboriosam? Adipisci officia
                                    suscipit voluptatibus officiis
                                    reprehenderit. Consequatur mollitia
                                    voluptate vero non quia animi consequuntur?
                                    Repudiandae ipsum enim eveniet consequuntur
                                    voluptate ullam ratione aliquam mollitia
                                    dolorum, optio commodi sed itaque.
                                    laboriosam. Vero, id. Officia itaque eaque
                                    numquam corporis iusto! Quod minus
                                    consequuntur laboriosam? 
                                </div>
                            </div>
                            <div className="w-full flex flex-col justify-between h-[35%] ">
                                <div className="flex w-full h-[17%] justify-between items-center bg-white">
                                    <p>You may also like</p>
                                    <p>View all {`>>>`}</p>
                                </div>
                                <div className="h-[75%] w-full ">
                                    <div className="w-52 h-60 ">
                                        <div className="w-full h-[60%] bg-green-100">
                                            <img src="" alt="" />
                                        </div>
                                        <div>
                                            <p>Camera Drone mini 2</p>
                                            <p>
                                                N200,000{" "}
                                                <span>
                                                    <AiFillHeart />
                                                </span>
                                            </p>
                                            <p>
                                                <span>
                                                    <AiFillStar />
                                                </span>
                                                4.5 (10) reviews{" "}
                                            </p>
                                        </div>
                                    </div>
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

export default ProductDetail;
