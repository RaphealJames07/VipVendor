import Logo from "../../../assets/Logo2.svg";
import "./SuccessVerify.css";

const SuccessVerify = () => {
    return (
        <>
            <div className="SuccessVerifyBody">
                <div className="SuccessVerifyWrap">
                    <div className="SuccessVerifyLogoDiv">
                        <img src={Logo} alt="" />
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
