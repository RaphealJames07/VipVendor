import "./Hero.css";

const Hero = () => {
    return (
        <>
            <div className="w-full h-[80vh] bg-cover bg-no-repeat flex justify-center HeroBody ">
                <div className="h-full flex flex-col w-[90%]">
                    <div className="w-[50%] flex items-end h-[90%]">
                        <div className="w-full h-[70%]">
                            <h1 className="w-full text-white">Find your best Gadgets</h1>
                            <p className="w-[60%] h-[20%] text-white">
                                Let us help you choose you latest trends of
                                gadgets and devices, seamless experience and
                                quality assured gadgets
                            </p>
                            <button className="w-40 h-12 bg-indigo-700 rounded text-white cursor-pointer">Shop Now</button>
                        </div>
                    </div>
                    <div className="w-full flex justify-center items-center h-[10%] gap-[30px]">
                        <span className="w-5 h-5 bg-gray-400 cursor-pointer rounded-full"></span>
                        <span className="w-5 h-5 bg-gray-400 cursor-pointer rounded-full"></span>
                        <span className="w-5 h-5 bg-gray-400 cursor-pointer rounded-full"></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
