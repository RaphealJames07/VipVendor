import "./Hero.css";

const Hero = () => {
    return (
        <>
            <div className="HeroBody">
                <div className="HeroWrap">
                    <div className="HeroContent">
                        <div className="HeroContentWrap">
                            <h1>Find your best Gadgets</h1>
                            <p>
                                Let us help you choose you latest trends of
                                gadgets and devices, seamless experience and
                                quality assured gadgets
                            </p>
                            <button>Shop Now</button>
                        </div>
                    </div>
                    <div className="HeroSelectImg">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
