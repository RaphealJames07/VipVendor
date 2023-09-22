
import Logo from "../../../assets/Logo2.svg";
import "./ForgetPwd.css";
import axios from "axios";
import {LoadingOutlined} from "@ant-design/icons";
import Swal from "sweetalert2";
import {useNavigate} from "react-router";
import { useState } from "react";

const ForgetPwd = () => {
    
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [inputError, setInputError] = useState(true);
    const [errMsg, setErrMsg] = useState({
        error: false,
        type: "",
        msg: "",
        multipleErr: "",
    });
    const nav = useNavigate();

    const data = {email};
    const url = `https://e-gadget.onrender.com/api/user/forgot-password`;

    const HandleForgetPwd = (e) => {
        e.preventDefault();
        setLoading(true);
        if (!email) {
            setErrMsg({
                error: true,
                type: "noMail",
                msg: "Input your Email",
                multipleErr: "mailErrMul",
            });
            setLoading(false);
            inputError(true);
        } else if (!email.includes("@")) {
            setErrMsg({
                error: true,
                type: "no@",
                msg: "Email must contain @",
                multipleErr: "mailErrMul",
            });
            setLoading(false);
            inputError(true);
        } else {
            axios
                .post(url, data)
                .then((res) => {
                    console.log(res);
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        html: "<h3>Code Resent Successfully <p>Check Your mail for code </p></h3>",
                        
                    });
                    nav("/");
                })
                .catch((error) => {
                    console.log(error);
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: `${error.response.data.message}`,
                        timer: "8000",
                    });
                    setLoading(false);
                });
        }
    };

    const handleBackTo = () => {
        nav("/");
    };
    
    return (
        <>
            <div className="ForgetPwdBody">
                <div className="ForgetPwdWrap">
                    <div className="ForgetPwdLogoDiv">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="ForgetPwdContentDiv">
                    <h1>Forgot Your Password?</h1>
                        <div className="ForgetPwdContentDivWrap">
                            <div className="ForgetPwdContentInputs">
                                <label htmlFor="email">
                                    Enter Email for Reset Password
                                </label>
                                <input
                                    style={{
                                        border: `${
                                            errMsg.multipleErr === "mailErrMul"
                                                ? "1px solid red"
                                                : ''
                                        }`,
                                    }}
                                    type="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setInputError(false);
                                        if (errMsg.multipleErr === "mailErrMul") {
                                            setErrMsg((prevState) => ({
                                                ...prevState,
                                                error: false,
                                                multipleErr: "",
                                                type:'',
                                            }));
                                        } 
                                    }}
                                />
                                {errMsg.type === "noMail" ? (
                                    <p style={{color: "red"}}>{errMsg.msg}</p>
                                ) : null}
                                {errMsg.type === "no@" ? (
                                    <p style={{color: "red"}}>{errMsg.msg}</p>
                                ) : null}
                            </div>
                            <div className="ForgetPwdContentBtn">
                                <button
                                    onClick={(e) => HandleForgetPwd(e)}
                                    disabled={inputError}
                                >
                                    {loading ? (
                                        <LoadingOutlined
                                            style={{
                                                fontSize: 24,
                                            }}
                                            spin
                                        />
                                    ) : (
                                        "Request Link"
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="ForgetPwdBackDiv">
                        <button onClick={handleBackTo}>Back To Sign In</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ForgetPwd;
