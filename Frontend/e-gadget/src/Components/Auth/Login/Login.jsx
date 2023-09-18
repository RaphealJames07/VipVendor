import "./Login.css";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {useState} from "react";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <div className="LoginContentDown">
                <div className="LoginContentDownInitials">
                    <h1>Hello There</h1>
                    <p>Log In to get started</p>
                </div>
                <div className="LoginContentDownForm">
                    <div className="LoginContentDownFormMail">
                        <div className="LoginContentDownFormMailLabels">
                            <label htmlFor="">Email / Phone</label>
                            <p>Input Your Email</p>
                        </div>
                        <div className="LoginContentDownFormMailInputs">
                            <input type="text" placeholder="Input Email" />
                        </div>
                    </div>

                    <div className="LoginContentDownFormPwd">
                        <div className="LoginContentDownFormPwdLabels">
                            <label htmlFor="">Password</label>
                            <p>Input Your Password</p>
                        </div>
                        <div className="LoginContentDownFormPwdInputs">
                            <input
                                type={!showPassword ? "password" : "text"}
                                placeholder="Input Password"
                            />
                            <div
                                className="LoginContentDownFormPwdEyes"
                                onClick={handleShowPassword}
                            >
                                {showPassword ? (
                                    <AiOutlineEyeInvisible className="AiOutlineEyeInvisible" />
                                ) : (
                                    <AiOutlineEye className="AiOutlineEye" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="LoginContentDownBtn">
                    <button>Create Account</button>
                </div>
                <div className="LoginForgetPwdDIv">
                    <p>Forget Password?</p>
                </div>
            </div>
        </>
    );
};

export default Login;
