import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import AboutUsImg from "../../assets/aboutus.jpg";
import WhoWeAre from "../../assets/whoweare.jpg";
import ourAim from "../../assets/ourAim.jpg";
import ourApproach from "../../assets/ourApproach.jpg";
import {MdDeliveryDining} from "react-icons/md";
import {RiCustomerService2Fill} from "react-icons/ri";
import {
    BsFillChatDotsFill,
    BsFillCreditCard2BackFill,
    BsFillTagFill,
} from "react-icons/bs";

const About = () => {
    return (
        <>
            <div className="w-full h-max">
                <Header />
                <div className="w-full h-max">
                    <div className="w-full h-[80vh] bg-gray-200">
                        <img
                            src={AboutUsImg}
                            alt=""
                            className="w-full h-full "
                        />
                    </div>
                    <div className="w-full h-[170vh] bg-purple-50 flex flex-col justify-around px-16">
                        <div className="w-full h-80 flex justify-between items-center pl-4">
                            <div className="w-[65%] h-[50%] flex flex-col justify-between">
                                <h1 className="text-2xl font-bold w-[80%]">
                                    Who We Are
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Hic, quod dicta ea eveniet
                                    quam, iusto autem rem commodi labore tempore
                                    possimus rerum sed dolorem quae, optio enim
                                    inventore aliquid consequatur ab maxime
                                    tenetur placeat necessitatibus. Earum,
                                    repellendus error maiores dignissimos nemo
                                    dolorum eius perspiciatis suscipit, fugiat
                                    nihil beatae asperiores veritatis recusandae
                                    sunt eum quaerat sapiente? Perspiciatis
                                    dolor natus amet obcaecati?
                                </p>
                            </div>
                            <div className="w-[30%] h-full bg-black  rounded">
                                <img
                                    src={WhoWeAre}
                                    alt=""
                                    className="w-full h-full object-cover rounded"
                                />
                            </div>
                        </div>
                        <div className="w-full h-80 flex flex-row-reverse justify-between items-center pl-4">
                            <div className="w-[65%] h-[50%] flex flex-col justify-between">
                                <h1 className="text-2xl font-bold w-[80%]">
                                    Our Aim
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Hic, quod dicta ea eveniet
                                    quam, iusto autem rem commodi labore tempore
                                    possimus rerum sed dolorem quae, optio enim
                                    inventore aliquid consequatur ab maxime
                                    tenetur placeat necessitatibus. Earum,
                                    repellendus error maiores dignissimos nemo
                                    dolorum eius perspiciatis suscipit, fugiat
                                    nihil beatae asperiores veritatis recusandae
                                    sunt eum quaerat sapiente? Perspiciatis
                                    dolor natus amet obcaecati?
                                </p>
                            </div>
                            <div className="w-[30%] h-full bg-black  rounded">
                                <img
                                    src={ourAim}
                                    alt=""
                                    className="w-full h-full object-cover rounded"
                                />
                            </div>
                        </div>
                        <div className="w-full h-80 flex justify-between items-center pl-4">
                            <div className="w-[65%] h-[50%] flex flex-col justify-between">
                                <h1 className="text-2xl font-bold w-[80%]">
                                    Our Approach
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Hic, quod dicta ea eveniet
                                    quam, iusto autem rem commodi labore tempore
                                    possimus rerum sed dolorem quae, optio enim
                                    inventore aliquid consequatur ab maxime
                                    tenetur placeat necessitatibus. Earum,
                                    repellendus error maiores dignissimos nemo
                                    dolorum eius perspiciatis suscipit, fugiat
                                    nihil beatae asperiores veritatis recusandae
                                    sunt eum quaerat sapiente? Perspiciatis
                                    dolor natus amet obcaecati?
                                </p>
                            </div>
                            <div className="w-[30%] h-full bg-black  rounded">
                                <img
                                    src={ourApproach}
                                    alt=""
                                    className="w-full h-full object-cover rounded"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[70vh] ">
                        <div className="w-full h-[15%] bg-slate-100 flex items-center justify-center text-2xl font-bold">
                            Our Services
                        </div>
                        <div className="w-full h-[85%] bg-slate-100 px-20 flex flex-col items-center">
                            <div className="w-full h-[50%]  flex justify-between items-center">
                                <div className="w-80 h-44 bg-gray-50 rounded p-4">
                                    <div className="w-full h-[20%] flex items-center gap-5 text-pry">
                                        <MdDeliveryDining className="w-10 h-10" />
                                        <h3 className="text-xl font-semibold">
                                            Fast Delivery
                                        </h3>
                                    </div>
                                    <div className="w-full h-[80%] flex items-center">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Illo veritatis porro
                                        provident eum deleniti aut cum? Neque
                                        doloremque at esse.
                                    </div>
                                </div>
                                <div className="w-80 h-44 bg-gray-50 rounded p-4">
                                    <div className="w-full h-[20%] flex items-center gap-5 text-pry">
                                        <BsFillChatDotsFill className="w-8 h-8" />
                                        <h3 className="text-xl font-semibold">
                                            Chat Support
                                        </h3>
                                    </div>
                                    <div className="w-full h-[80%] flex items-center">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Illo veritatis porro
                                        provident eum deleniti aut cum? Neque
                                        doloremque at esse.
                                    </div>
                                </div>
                                <div className="w-80 h-44 bg-gray-50 rounded p-4">
                                    <div className="w-full h-[20%] flex items-center gap-5 text-pry">
                                        <BsFillCreditCard2BackFill className="w-8 h-8" />
                                        <h3 className="text-xl font-semibold">
                                            Easy Payment
                                        </h3>
                                    </div>
                                    <div className="w-full h-[80%] flex items-center">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Illo veritatis porro
                                        provident eum deleniti aut cum? Neque
                                        doloremque at esse.
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-1/2  flex justify-between items-center">
                                <div className="w-80 h-44 bg-gray-50 rounded p-4">
                                    <div className="w-full h-[20%] flex items-center gap-5 text-pry">
                                        <BsFillTagFill className="w-8 h-8" />
                                        <h3 className="text-xl font-semibold">
                                            Best Offer
                                        </h3>
                                    </div>
                                    <div className="w-full h-[80%] flex items-center">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Illo veritatis porro
                                        provident eum deleniti aut cum? Neque
                                        doloremque at esse.
                                    </div>
                                </div>
                                <div className="w-80 h-44 bg-gray-50 rounded p-4">
                                    <div className="w-full h-[20%] flex items-center gap-5 text-pry">
                                        <RiCustomerService2Fill className="w-8 h-8" />
                                        <h3 className="text-xl font-semibold">
                                            Customer Care
                                        </h3>
                                    </div>
                                    <div className="w-full h-[80%] flex items-center">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Illo veritatis porro
                                        provident eum deleniti aut cum? Neque
                                        doloremque at esse.
                                    </div>
                                </div>
                                <div className="w-80 h-44 bg-gray-50 rounded p-4 opacity-0">
                                    <div className="w-full h-[20%] flex items-center gap-5 text-pry">
                                        <RiCustomerService2Fill className="w-10 h-10" />
                                        <h3 className="text-xl font-semibold">
                                            Customer Care
                                        </h3>
                                    </div>
                                    <div className="w-full h-[80%] flex items-center">
                                        Lorem ipsum, dolor sit amet consectetur
                                        adipisicing elit. Illo veritatis porro
                                        provident eum deleniti aut cum? Neque
                                        doloremque at esse.
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

export default About;
