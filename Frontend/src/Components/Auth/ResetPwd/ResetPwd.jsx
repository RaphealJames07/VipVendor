

import {useState} from "react";
import Logo from "../../../assets/Logo2.svg";
import "./ResetPwd.css";
import axios from "axios";
import {  useLocation} from "react-router";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {LoadingOutlined} from "@ant-design/icons";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const ResetPwd = () => {
    const nav = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const [showPasswordC, setShowPasswordC] = useState(false);
    const handleShowPasswordC = () => {
        setShowPasswordC(!showPasswordC);
    };

    const [newPassword, setNewPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [inputError, setInputError] = useState(true);
    const [errMsg, setErrMsg] = useState({
        error: false,
        type: "",
        msg: "",
        multipleErr: "",
    });
    const data = {newPassword};
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const token = searchParams.get("token");
    // console.log(token);
    const url = `https://e-gadget.onrender.com/api/user/reset-password/${token}`;

    const handleResetPwd = (e) => {
        e.preventDefault(e);
        setLoading(true);
        if (!newPassword) {
            setErrMsg({
                error: true,
                type: "password",
                msg: "Input your Password",
                multipleErr: "mailErrMul",
            });
            setLoading(false);
            inputError(true);
        } else if (newPassword !== cPassword) {
            setErrMsg({
                error: true,
                type: "noMatch",
                msg: "Password does not Match",
                multipleErr: "mailErrMul",
            });
            setLoading(false);
            inputError(true);
        } else {
            setLoading(true)
            setInputError(true)
            axios.post(url, data)
                .then((res)=>{
                    console.log(res);
                    setLoading(false)
                    Swal.fire({
                        icon: 'success',
                        title: "Error",
                        text:  `Password reset Successfully, Please login`,
                        timer: '5000'
                    });
                })
                .catch((error)=>{
                    console.log(error);
                    setLoading(false)
                    const expToken = error.response.data.message
                    if (expToken === 'jwt expired'){
                        Swal.fire({
                            icon: 'error',
                            title: "Error",
                            text:  `Token Expired, please request another one`,
                            timer: '5000'
                        });
                    }else {
                        Swal.fire({
                            icon: 'error',
                            title: "Error",
                            text:  `${error.response.data.message}`,
                            timer: '5000'
                        });
                    }
                })
        }
    };

    const handleBackto = () =>{
        nav('/')
    }

    return (
        <>
            <div className="ResetPwdBody">
                <div className="ResetPwdWrap">
                    <div className="ResetPwdLogoDiv">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="ResetPwdContentDiv">
                        <h1>Reset Password</h1>
                        <div className="ResetPwdContentDivWrap">
                            <div className="ResetPwdContentInputs">
                                <div className="ResetPwdContentInputs1">
                                    <p
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        Input New Password
                                        {errMsg.type === "password" ? (
                                            <span
                                                style={{
                                                    color: "red",
                                                    fontSize: "14px",
                                                }}
                                            >
                                                enter Password
                                            </span>
                                        ) : null}
                                    </p>
                                    <div
                                        className="ResetPwdFormPwdInputs"
                                        style={{
                                            border: `${
                                                errMsg.type === "password"
                                                    ? "2px solid red"
                                                    : ""
                                            }`,
                                        }}
                                    >
                                        <input
                                            type={
                                                !showPassword
                                                    ? "password"
                                                    : "text"
                                            }
                                            placeholder="Input Password"
                                            value={newPassword}
                                            onChange={(e) => {
                                                
                                                setNewPassword(e.target.value);
                                                if (
                                                    errMsg.type === "password"
                                                ) {
                                                    setErrMsg((prevState) => ({
                                                        ...prevState,
                                                        error: false,
                                                        type: "",
                                                    }));
                                                }
                                            }}
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
                                <div className="ResetPwdContentInputs2">
                                    <p
                                        style={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                        }}
                                    >
                                        Confirm Password
                                        {errMsg.type === "noMatch" ? (
                                            <span
                                                style={{
                                                    color: "red",
                                                    fontSize: "14px",
                                                }}
                                            >
                                                {errMsg.msg}
                                            </span>
                                        ) : null}
                                    </p>
                                    <div
                                        className="ResetPwdFormPwdInputs"
                                        style={{
                                            border: `${
                                                errMsg.type === "noMatch"
                                                    ? "2px solid red"
                                                    : ""
                                            }`,
                                        }}
                                    >
                                        <input
                                            type={
                                                !showPasswordC
                                                    ? "password"
                                                    : "text"
                                            }
                                            placeholder="Input Password"
                                            value={cPassword}
                                            onChange={(e) => {
                                                setInputError(false);
                                                setCPassword(e.target.value);
                                                if (
                                                    errMsg.type === "noMatch"
                                                ) {
                                                    setErrMsg((prevState) => ({
                                                        ...prevState,
                                                        error: false,
                                                        type: "",
                                                    }));
                                                }
                                            }}
                                        />
                                        <div
                                            className="LoginContentDownFormPwdEyes"
                                            onClick={handleShowPasswordC}
                                        >
                                            {showPasswordC ? (
                                                <AiOutlineEyeInvisible className="AiOutlineEyeInvisible" />
                                            ) : (
                                                <AiOutlineEye className="AiOutlineEye" />
                                            )}
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                            <div className="ResetPwdContentBtn">
                                <button
                                    onClick={(e) => handleResetPwd(e)}
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
                                        "Login"
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="ResetPwdBackDiv">
                        <button onClick={handleBackto}>Back To Sign In</button> 
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResetPwd;
