import Logo from "../../../assets/Logo2.svg";
import "./SuccessVerify.css";

const SuccessVerify = () => {
    return (
        <>
            <div className="w-full h-screen bg-[#f5f5f5] flex justify-center">
                <div className="w-[90%] h-full">
                    <div className="w-full h-[8%]">
                        <img src={Logo} alt="" className="w-[8%] h-full object-contain"/>
                    </div>
                    <div className="SuccessVerifyContentDiv">
                        <div className="SuccessVerifyContentDivWrap">
                            <h1>Congratulations</h1>
                            <p>Welcome To Curve<span style={{color:'#3F51B5'}}>Tech</span></p>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SuccessVerify;
