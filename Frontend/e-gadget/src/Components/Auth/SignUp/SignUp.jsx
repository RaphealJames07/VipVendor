import "./SIgnUp.css";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {useState} from "react";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const [showPasswordC, setShowPasswordC] = useState(false);
    const handleShowPasswordC = () => {
        setShowPasswordC(!showPasswordC);
    };

    return (
        <>
            <div className="SignUpContentDown">
                <div className="SignUpContentDownInitials">
                    <h1>Hello There</h1>
                    <p>Create an account to get started</p>
                </div>
                <div className="SignUpContentDownForm">
                    <div className="SignUpContentDownFormNames">
                        <div className="SignUpContentDownFormFName">
                            <div className="SignUpContentDownFormFNameLabels">
                                <label htmlFor="">First Name</label>
                                <p>Input Your Name</p>
                            </div>
                            <div className="SignUpContentDownFormFNameInputs">
                                <input
                                    type="text"
                                    placeholder="Input First Name"
                                />
                            </div>
                        </div>
                        <div className="SignUpContentDownFormLName">
                            <div className="SignUpContentDownFormLNameLabels">
                                <label htmlFor="">Last Name</label>
                                <p>Input Your Name</p>
                            </div>
                            <div className="SignUpContentDownFormLNameInputs">
                                <input
                                    type="text"
                                    placeholder="Input Last Name"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="SignUpContentDownFormMail">
                        <div className="SignUpContentDownFormMailLabels">
                            <label htmlFor="">Email Address</label>
                            <p>Input Your Email</p>
                        </div>
                        <div className="SignUpContentDownFormMailInputs">
                            <input type='email' placeholder="Input Email" />
                        </div>
                    </div>
                    <div className="SignUpContentDownFormPhone">
                        <div className="SignUpContentDownFormPhoneLabels">
                            <label htmlFor="">Phone Number</label>
                            <p>Input Your Phone Number</p>
                        </div>
                        <div className="SignUpContentDownFormPhoneInputs">
                            <input type="tel" placeholder="Input Phone No" />
                        </div>
                    </div>
                    <div className="SignUpContentDownFormPwd">
                        <div className="SignUpContentDownFormPwdLabels">
                            <label htmlFor="">Password</label>
                            <p>Input Your Password</p>
                        </div>
                        <div className="SignUpContentDownFormPwdInputs">
                            <input
                                type={!showPassword ? "password" : "text"}
                                placeholder="Input Password"
                            />
                            <div
                                className="SignUpContentDownFormPwdEyes"
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
                    <div className="SignUpContentDownFormCPwd">
                        <div className="SignUpContentDownFormCPwdlabels">
                            <label htmlFor="">Confirm Password</label>
                            <p>Input Your Password</p>
                        </div>
                        <div className="SignUpContentDownFormcPwdInputs">
                            <input
                                type={!showPasswordC ? "password" : "text"}
                                placeholder="Confirm Your Password"
                            />
                            <div
                                className="SignUpContentDownFormCPwdEyes"
                                onClick={handleShowPasswordC}
                            >
                                {showPasswordC ? (
                                    <>
                                        <AiOutlineEyeInvisible className="AiOutlineEyeInvisible" />
                                    </>
                                ) : (
                                    <AiOutlineEye className="AiOutlineEye" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="SignUpContentDownBtn">
                    <button>Create Account</button>
                </div>
            </div>
        </>
    );
};

export default SignUp;
