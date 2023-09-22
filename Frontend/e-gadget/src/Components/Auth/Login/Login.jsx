import "./Login.css";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {useState} from "react";
import axios from "axios";
import {useDispatch} from "react-redux";
import {curveGadgetUserLogin} from "../../Redux/Features";
import {useNavigate} from "react-router";
import Swal from "sweetalert2";
import {LoadingOutlined} from "@ant-design/icons";

const Login = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const [email, setEmailPhone] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [errMsg, setErrMsg] = useState({error: false, type: "", msg: ""});
    const [inputErr, setInputErr] = useState(true);

    const url = `https://e-gadget.onrender.com/api/sign-in`;
    const data = {email, password};

    const handleLoginIn = (e) => {
        e.preventDefault();
        setLoading(true);
        if (!email) {
            setErrMsg({
                error: true,
                type: "noMailPhone",
                msg: "Input Your Email or Phone",
            });
            setLoading(false);
            setInputErr(true);
        } else if (!password) {
            setErrMsg({
                error: true,
                type: "password",
                msg: "Enter Password",
            });
            setLoading(false);
            setInputErr(true);
        } else {
            axios
                .post(url, data)
                .then((res) => {
                    console.log(res);
                    dispatch(curveGadgetUserLogin(res.data));
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        html: "<h3>Log In Successfull</h3> <p>Loading your Dashboard...</p>",
                        timer: "5000",
                    });
                    nav("/Home");
                })
                .catch((error) => {
                    console.log(error);
                    const unVeriry = error.response.data.message
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: `${error.response.data.message}`,
                        timer: "8000",
                    });
                    if (unVeriry === 'Email Not Verified, Please verify your email to log in.'){
                        nav('/ResendVerify')
                    }
                    setLoading(false);
                });
        }
        
    };

    const handleForgetPwdNav = () =>{
        nav('/ForgetPassword')
    }

    return (
        <>
            <div className="LoginContentDownWrap">
                <div className="LoginContentDownInitials">
                    <h1>Hello There</h1>
                    <p>Log In to get started</p>
                </div>
                <div className="LoginContentDownForm">
                    <div className="LoginContentDownFormMail">
                        <div className="LoginContentDownFormMailLabels">
                            <label htmlFor="">Email / Phone</label>
                            {errMsg.type === "noMailPhone" ? (
                                <p>{errMsg.msg}</p>
                            ) : null}
                        </div>
                        <div className="LoginContentDownFormMailInputs">
                            <input
                                type="text"
                                placeholder="Input Email"
                                onChange={(e) => {
                                    setEmailPhone(e.target.value);
                                    if (errMsg.type === "noMailPhone") {
                                        setErrMsg((prevState) => ({
                                            ...prevState,
                                            error: false,
                                            type: "",
                                        }));
                                    }
                                }}
                                value={email}
                                style={{
                                    border: `${
                                        errMsg.type === "noMailPhone"
                                            ? "2px solid red"
                                            : ""
                                    }`,
                                }}
                            />
                        </div>
                    </div>

                    <div className="LoginContentDownFormPwd">
                        <div className="LoginContentDownFormPwdLabels">
                            <label htmlFor="">Password</label>
                            {errMsg.type === "password" ? (
                                <p>{errMsg.msg}</p>
                            ) : null}
                        </div>
                        <div
                            className="LoginContentDownFormPwdInputs"
                            style={{
                                border: `${
                                    errMsg.type === "password"
                                        ? "2px solid red"
                                        : ""
                                }`,
                            }}
                        >
                            <input
                                type={!showPassword ? "password" : "text"}
                                placeholder="Input Password"
                                value={password}
                                onChange={(e) => {
                                    setInputErr(false)
                                    setPassword(e.target.value);
                                    if (errMsg.type === "password") {
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
                </div>
                <div className="LoginContentDownBtn">
                    <button onClick={(e) => handleLoginIn(e)} disabled={inputErr}>
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
                <div className="LoginForgetPwdDIv">
                    <p onClick={handleForgetPwdNav} style={{cursor:'pointer'}}>Forget Password?</p>
                </div>
            </div>
        </>
    );
};

export default Login;
