import Logo from "../../../assets/Logo2.svg";
import './ResendVerify.css'

const ResendResendVerify = () => {
    return (
        <>
            <div className="ResendVerifyBody">
                <div className="ResendVerifyWrap">
                    <div className="ResendVerifyLogoDiv">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="ResendVerifyContentDiv">
                        <div className="ResendVerifyContentDivWrap">
                            <div className="ResendVerifyContentInputs">
                              <label htmlFor="email">Input Email for verification code</label>
                              <input type="email" />
                            </div>
                            <div className="ResendVerifyContentBtn">
                              <button>Request Code</button>
                            </div>
                        </div>
                    </div>
                    <div className="ResendVerifyBackDiv">
                      <button>Back To Sign In</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResendResendVerify;
