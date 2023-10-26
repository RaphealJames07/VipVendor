import Logo from "../../../assets/Logo2.svg";
import {useRef, useState} from "react";
import "./Verify.css";
import {Modal} from "antd";
import {LoadingOutlined} from "@ant-design/icons";
import axios from "axios";
import Swal from "sweetalert2";
import {  useNavigate, useParams } from "react-router";
import { useLocation } from "react-router-dom";

const Verify = () => {
    const nav = useNavigate()
    const inputRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];
    const [modalVisible, setModalVisible] = useState(false);
    
    const [inputValue1, setInputValue1] = useState("");
    const [inputValue2, setInputValue2] = useState("");
    const [inputValue3, setInputValue3] = useState("");
    const [inputValue4, setInputValue4] = useState("");
    const [inputValue5, setInputValue5] = useState("");
    


    const focusNextInput = (currentIndex) => {
        if (currentIndex < inputRefs.length - 1) {
            inputRefs[currentIndex + 1].current.focus();
        }
    };

    const handleInputChange = (e, currentIndex) => {
        const {value} = e.target;

        if (!/^[0-9]+$/.test(value)) {
            showModal();
            return;
        }

        if (currentIndex === 0) {
            setInputValue1(value);
        } else if (currentIndex === 1) {
            setInputValue2(value);
        } else if (currentIndex === 2) {
            setInputValue3(value);
        } else if (currentIndex === 3) {
            setInputValue4(value);
        }else if (currentIndex === 4) {
            setInputValue5(value);
            setInputErr(false)
        }

        if (value && currentIndex < inputRefs.length - 1) {
            focusNextInput(currentIndex);
        }
    };

    const showModal = () => {
        setModalVisible(true);
    };

    const handlePaste = (e) => {
        e.preventDefault();
        const pastedText = e.clipboardData.getData("text");

        if (/^\d{5}$/.test(pastedText)) {
            const digits = pastedText.split("");

            inputRefs.forEach((inputRef, index) => {
                if (index < digits.length) {
                    inputRef.current.value = digits[index];

                    if (index === 0) {
                        setInputValue1(digits[index]);
                    } else if (index === 1) {
                        setInputValue2(digits[index]);
                    } else if (index === 2) {
                        setInputValue3(digits[index]);
                    } else if (index === 3) {
                        setInputValue4(digits[index]);
                    } else if (index === 4) {
                        setInputValue5(digits[index]);
                        setInputErr(false)
                    }
                }
            });

            if (digits.length > 0) {
                focusNextInput(digits.length - 1);
            }
        }
    };

    const handleKeyDown = (e, currentIndex) => {
        if (e.key === "Backspace") {
            e.preventDefault();

            if (currentIndex > 0) {
                inputRefs[currentIndex - 1].current.focus();
            } else {
                inputRefs[currentIndex].current.focus();
            }

            inputRefs[currentIndex].current.value = "";

            // Clear the corresponding inputValue state variable based on the currentIndex
            if (currentIndex === 0) {
                setInputValue1("");
                setInputErr(true)
            } else if (currentIndex === 1) {
                setInputValue2("");
                setInputErr(true)
            } else if (currentIndex === 2) {
                setInputValue3("");
                setInputErr(true)
            } else if (currentIndex === 3) {
                setInputValue4("");
                setInputErr(true)
            } else if (currentIndex === 4) {
                setInputValue5("");
                setInputErr(true)
            }
        }
    };

    const otp = `${inputValue1}${inputValue2}${inputValue3}${inputValue4}${inputValue5}`;
    console.log("Verification Code:", otp);

    const [loading, setLoading] = useState(false);
    const [inputErr, setInputErr] = useState(true);
    const {token} = useParams()
    console.log(token);
    const data = {otp}
    const url = `https://e-gadget.onrender.com/api/user/verify/${token}`;

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const email = searchParams.get("email");
    console.log(email);

    const HandleVerify = (e) => {
        e.preventDefault();
        setLoading(true)
        axios
             .post(url, data)
             .then((res)=>{
                console.log(res);
                Swal.fire({
                    icon: 'success',
                    title: "Success",
                    html: '<h3>Account Verified Successfully</h3> <p>Taking you back to Login...</p>',
                    timer: '5000'
                });
                nav('/')
             })
             .catch((error)=>{
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: "Error",
                    text: `${error.response.data.message}`,
                    timer: '5000'
                });
                setLoading(false)
             })
    };

    const handleBackTo = () =>{
        nav('/')
    }

    function hideEmail(email) {
        const [username, domain] = email.split('@');
        const hiddenUsername = username.slice(0, 2) + '*'.repeat(username.length - 2);
        const maskedEmail = `${hiddenUsername}@${domain}`;
        return maskedEmail;
    }
    
    
    const maskedEmail = hideEmail(email);
    

    return (
        <>
            <div className="VerifyBody">
                <div className="VerifyWrap">
                    <div className="VerifyLogoDiv">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="VerifyContentDiv">
                        <div className="VerifyContentDivWrap">
                            <h1>Authenticate Your Account!</h1>
                            <p>
                                Protecting your account is our top priority,
                                please verify your account by entering the
                                authorization code sent to {maskedEmail}
                            </p>
                            <div
                                style={{display: "flex", fontSize: "30px"}}
                                className="VerifyContentCodeInputDiv"
                                onPaste={handlePaste}
                            >
                                {inputRefs.map((inputRef, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength={1}
                                        ref={inputRef}
                                        onChange={(e) =>
                                            handleInputChange(e, index)
                                        }
                                        onKeyDown={(e) =>
                                            handleKeyDown(e, index)
                                        }
                                        onInput={(e) => {
                                            const newValue =
                                                e.target.value.replace(
                                                    /\D/g,
                                                    ""
                                                );
                                            e.target.value = newValue;
                                            handleInputChange(e, index);
                                        }}
                                    />
                                ))}
                            </div>
                            <button onClick={(e)=>HandleVerify(e)} disabled={inputErr}>
                                {loading ? (
                                    <LoadingOutlined
                                        style={{
                                            fontSize: 24,
                                        }}
                                        spin
                                    />
                                ) : (
                                    "Verify"
                                )}
                            </button>
                            <p>
                                it may take a minute to receive your code, haven
                                {"'"}t received it?{" "}
                                <span
                                    style={{
                                        color: "#3F51B5",
                                        cursor: "pointer",
                                    }}
                                >
                                    Resend a new code.
                                </span>
                            </p>
                        </div>
                        <div className="VerifyBackBtn">

                    <button onClick={handleBackTo}>Back to Login</button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                title="Invalid Input"
                open={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={null}
            >
                The code sent to your email should contain 4 digit numbers only.
                No alphabets or special characters are allowed. Please check and
                try again.
            </Modal>
        </>
    );
};

export default Verify;
