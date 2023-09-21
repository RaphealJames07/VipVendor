import {useState} from "react";
import Logo from "../../../assets/Logo2.svg";
import "./ResendVerify.css";
import axios from "axios";
import {LoadingOutlined} from "@ant-design/icons";
import Swal from "sweetalert2";
import {useNavigate} from "react-router";

const ResendResendVerify = () => {
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
    const url = `https://e-gadget.onrender.com/api/user/resend-verification-otp`;

    const HandleResendVerify = (e) => {
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
                        timer: "5000",
                    });
                    const token = res.data.token
                    nav(`/Verify/${token}`)
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
        nav("/Auth");
    };

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
                                <label htmlFor="email">
                                    Input Email for verification code
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
                            <div className="ResendVerifyContentBtn">
                                <button
                                    onClick={(e) => HandleResendVerify(e)}
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
                                        "Resend Code"
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="ResendVerifyBackDiv">
                        <button onClick={handleBackTo}>Back To Sign In</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ResendResendVerify;
