import Logo from "../../../assets/Logo2.svg";
import './ForgetPwd.css'

const ForgetPwd = () => {
  
    return (
        <>
            <div className="ForgetPwdBody">
                <div className="ForgetPwdWrap">
                    <div className="ForgetPwdLogoDiv">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="ForgetPwdContentDiv">
                            <h1>Reset Password</h1>
                        <div className="ForgetPwdContentDivWrap">
                            <div className="ForgetPwdContentInputs">
                                <div className="ForgetPwdContentInputs1">
                                    <p>Input New Password</p>
                                    <input type="text" />
                                </div>
                                <div className="ForgetPwdContentInputs2">
                                    <p>Confirm New Password</p>
                                    <input type="text" />
                                </div>
                            </div>
                            <div className="ForgetPwdContentBtn">
                                <button>Reset</button>
                            </div>
                        </div>
                    </div>
                    <div className="ForgetPwdBackDiv">
                        <button>Back To Sign In</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgetPwd;
