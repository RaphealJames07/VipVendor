import "./SIgnUp.css";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";
import {useEffect, useState} from "react";
import { FcCheckmark } from 'react-icons/fc'
import {LoadingOutlined} from "@ant-design/icons";
import axios from "axios";
import Swal from "sweetalert2";
import Flag from "../../../assets/flag.svg";
import {useNavigate} from "react-router-dom";

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [process, setProcess] = useState(false)
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const [showPasswordC, setShowPasswordC] = useState(false);
    const handleShowPasswordC = () => {
        setShowPasswordC(!showPasswordC);
    };
    const[quanVal, setQuanVal] = useState(false)
    const[uppCaseVal, setUppCaseVal] = useState(false)
    const[lowCaseVal, setLowCaseVal] = useState(false)
    const[numVal, setNumVal] = useState(false)
    const[specCharVal, setSpecCharVal] = useState(false)

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errMsg, setErrMsg] = useState({
        error: false,
        type: "",
        message: "",
        multipleErr: "",
        div: "",
    });
    // const [trackDiv, setTrackDiv] = useState(false);
    const [loading, setLoading] = useState(false);
    const [inputErr, setInputErr] = useState(true);
    const [backErr, setBackErr] = useState("");
    // console.log(backErr);

    const data = {
        firstName,
        lastName,
        email,
        password,
        phoneNumber,
        confirmPassword,
    };
    const url = "https://e-gadget.onrender.com/api/sign-up";
    const nav = useNavigate();

    const handleInputChange = (e, inputType) => {
        const inputValue = e.target.value;

        // Reset error styles when input value changes
        setErrMsg((prevState) => ({
            ...prevState,
            error: false,
            type: "",
            message: "",
            multipleErr: "",
            div: "",
        }));

        // Set the input value based on the inputType
        switch (inputType) {
            case "firstName":
                setFirstName(inputValue);
                break;
            case "lastName":
                setLastName(inputValue);
                break;
            case "email":
                setEmail(inputValue);
                break;
            case "phone":
                setPhoneNumber(inputValue);
                break;
            case "password":
                setPassword(inputValue);
                break;
            case "confirmPassword":
                setConfirmPassword(inputValue);
                break;
            default:
                break;
        }
    };
    const [phoneDivError, setPhoneDivError] = useState(false);
    const [passwordDivError, setPasswordDivError] = useState(false);
    const [confirmPasswordDivError, setConfirmPasswordDivError] =
        useState(false);

    const HandleSignUp = (e) => {
        console.log("Signing Up...");
        e.preventDefault();
        setErrMsg({error: false, type: "", message: "", multipleErr: ""});
        setPhoneDivError(false);
        setPasswordDivError(false);
        setConfirmPasswordDivError(false);
        if (!firstName) {
            setErrMsg({
                error: true,
                type: "firstName",
                message: "Enter Name",
                multipleErr: "firstName",
                div: "firstName",
            });
            // setErrMsg('');

            setLoading(false);
            setInputErr(false);
        } else if (!lastName) {
            setErrMsg({
                error: true,
                type: "lastName",
                message: "Enter Name",
                multipleErr: "lastName",
                div: "lastName",
            });

            setLoading(false);
            setInputErr(false);
        } else if (!email) {
            setErrMsg({
                error: true,
                type: "email",
                message: "Input Email Address",
                multipleErr: "email",
                div: "email",
            });

            setLoading(false);
            setInputErr(false);
        } else if (!email.includes("@")) {
            setErrMsg({
                error: true,
                type: "email@",
                message: "email must include @",
                multipleErr: "email",
                div: "email",
            });

            setLoading(false);
            setInputErr(false);
        } else if (!phoneNumber) {
            setErrMsg({
                error: true,
                type: "phoneNumber",
                message: "Enter Phone Number",
                multipleErr: "phone",
                div: "phone",
            });

            setPhoneDivError(true);
            setLoading(false);
            setInputErr(false);
        } else if (phoneNumber.length < 11) {
            setErrMsg({
                error: true,
                type: "phoneLength",
                message: "Phone No Must be 11 digits",
                multipleErr: "phone",
                div: "phone",
            });
            setPhoneDivError(true);
            setLoading(false);
            setInputErr(false);
        } else if (!/^\d+$/.test(phoneNumber)) {
            setErrMsg({
                error: true,
                type: "phoneAlpha",
                message: "No Alphabets allowed",
                multipleErr: "phone",
                div: "phone",
            });
            setPhoneDivError(true);
            setLoading(false);
            setInputErr(false);
        } else if (password.length < 7) {
            setErrMsg({
                error: true,
                type: "passwordSmall",
                message: "must be 8 characters long",
                multipleErr: "password",
                div: "password",
            });
            setPasswordDivError(true);
            setLoading(false);
            setInputErr(false);
        } else if (password !== confirmPassword) {
            setErrMsg({
                error: true,
                type: "passwordMatch",
                message: "password does not match",
                multipleErr: "confirmPassword",
                div: "confirmPassword",
            });
            setConfirmPasswordDivError(true);
            setLoading(false);
            setInputErr(false);
        } else {
            setPhoneDivError(false);
            setPasswordDivError(false);
            setConfirmPasswordDivError(false);
            setLoading(true);
            setInputErr(true);
            setErrMsg("");
            axios
                .post(url, data)
                .then((res) => {
                    console.log(res);
                    setLoading(false);
                    setInputErr(false);
                    Swal.fire({
                        icon: "success",
                        title: "Success",
                        html: "<h3>Account Created Successfully</h3> <p>Sending verification code...</p>",
                        timer: "8000",
                    });
                    const token = res.data.data.token;
                    const email = res.data.data.email;
                    nav(`/Verify/${token}?email=${email}`);
                })
                .catch((error) => {
                    console.log(error);
                    const errorMessage = error.response?.data?.message;
                    setBackErr(errorMessage);
                    setLoading(false);
                    setInputErr(false);
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: errorMessage,
                    });
                });
        }

        useEffect(() => {
            setBackErr();
        }, []);
    };

    useEffect(() => {
        if (!/[A-Z]/.test(password)) {
            setUppCaseVal(true);
        } else {
            setUppCaseVal(false); 
        }
    
        if (!/[a-z]/.test(password)) {
            setLowCaseVal(true);
        } else {
            setLowCaseVal(false); 
        }
    
        if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
            setSpecCharVal(true);
        } else {
            setSpecCharVal(false); 
        }
    
        if (!password.split('').some(char => '0123456789'.includes(char))) {
            setNumVal(true);
        } else {
            setNumVal(false); 
        }
    
        if (password.length < 7) {
            setQuanVal(true);
        } else {
            setQuanVal(false); 
        }
    }, [password]);
    

    return (
        <>
            <div className="SignUpContentDownWrap">
                <div className="SignUpContentDownInitials">
                    <h1>Hello There</h1>
                    <p>Create an account to get started</p>
                </div>
                <div className="SignUpContentDownForm">
                    <div className="SignUpContentDownFormNames">
                        <div className="SignUpContentDownFormFName">
                            <div className="SignUpContentDownFormFNameLabels">
                                <label htmlFor="">First Name</label>
                                {errMsg.type === "firstName" ? (
                                    <p>{errMsg.message}</p>
                                ) : null}
                            </div>
                            <div className="SignUpContentDownFormFNameInputs">
                                <input
                                    type="text"
                                    placeholder="Input First Name"
                                    value={firstName}
                                    onChange={(e) =>
                                        handleInputChange(e, "firstName")
                                    } // Pass input type to handleInputChange
                                    style={{
                                        border: `${
                                            errMsg.type === "firstName"
                                                ? "2px solid red"
                                                : ""
                                        }`,
                                    }}
                                />
                            </div>
                        </div>
                        <div className="SignUpContentDownFormLName">
                            <div className="SignUpContentDownFormLNameLabels">
                                <label htmlFor="">Last Name</label>
                                {errMsg.type === "lastName" ? (
                                    <p>{errMsg.message}</p>
                                ) : null}
                            </div>
                            <div className="SignUpContentDownFormLNameInputs">
                                <input
                                    type="text"
                                    placeholder="Input Last Name"
                                    value={lastName}
                                    onChange={(e) =>
                                        handleInputChange(e, "lastName")
                                    } // Pass input type to handleInputChange
                                    style={{
                                        border: `${
                                            errMsg.type === "lastName"
                                                ? "2px solid red"
                                                : ""
                                        }`,
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="SignUpContentDownFormMail">
                        <div className="SignUpContentDownFormMailLabels">
                            <label htmlFor="">Email Address</label>
                            {errMsg.type === "email" ? (
                                <p>{errMsg.message}</p>
                            ) : null}
                            {errMsg.type === "email@" ? (
                                <p>{errMsg.message}</p>
                            ) : null}
                        </div>
                        <div className="SignUpContentDownFormMailInputs">
                            <input
                                type="email"
                                placeholder="Input Email"
                                value={email}
                                onChange={(e) => handleInputChange(e, "email")}
                                style={{
                                    border: `${
                                        errMsg.multipleErr === "email"
                                            ? "2px solid red"
                                            : ""
                                    }`,
                                }}
                            />
                        </div>
                    </div>
                    <div className="SignUpContentDownFormPhone">
                        <div className="SignUpContentDownFormPhoneLabels">
                            <label htmlFor="">Phone Number</label>
                            {errMsg.type === "phoneNumber" ? (
                                <p>{errMsg.message}</p>
                            ) : null}

                            {errMsg.type === "phoneAlpha" ? (
                                <p>{errMsg.message}</p>
                            ) : null}
                            {errMsg.type === "phoneLength" ? (
                                <p>{errMsg.message}</p>
                            ) : null}
                        </div>
                        <div
                            className="SignUpContentDownFormPhoneInputs"
                            style={{
                                border: `${
                                    phoneDivError ? "2px solid red" : ""
                                }`,
                            }}
                        >
                            <div className="SignUpContentDownFormPhoneFlag">
                                <img src={Flag} alt="" /> <span>+234</span>
                            </div>

                            <input
                                type="tel"
                                placeholder="Input Number"
                                value={phoneNumber}
                                maxLength={11}
                                onChange={(e) => {
                                    handleInputChange(e, "phone");
                                    setPhoneDivError(false);
                                }}
                            />
                        </div>
                    </div>
                    <span style={{display: "none"}}>{backErr}</span>
                    <div className="SignUpContentDownFormPwd">
                        <div className="SignUpContentDownFormPwdLabels">
                            <label htmlFor="">Password</label>
                            {errMsg.type === "password" ? (
                                <p>{errMsg.message}</p>
                            ) : null}
                            {errMsg.type === "passwordSmall" ? (
                                <p>{errMsg.message}</p>
                            ) : null}
                        </div>
                        <div
                            className="SignUpContentDownFormPwdInputs"
                            style={{
                                border: `${
                                    passwordDivError ? "2px solid red" : ""
                                }`,
                            }}
                        >
                            <input
                                type={!showPassword ? "password" : "text"}
                                placeholder="Input Password"
                                value={password}
                                onFocus={() => setProcess(true)}
                                onBlur={() => {
                                    !password
                                        ? setProcess(false)
                                        : setProcess(true);
                                }}
                                onChange={(e) => {
                                    handleInputChange(e, "password");
                                    setPasswordDivError(false);
                                }}
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
                            {errMsg.type === "passwordMatch" ? (
                                <p>{errMsg.message}</p>
                            ) : null}
                        </div>
                        <div
                            className="SignUpContentDownFormcPwdInputs"
                            style={{
                                border: `${
                                    confirmPasswordDivError
                                        ? "2px solid red"
                                        : ""
                                }`,
                            }}
                        >
                            <input
                                type={!showPasswordC ? "password" : "text"}
                                placeholder="Confirm Your Password"
                                value={confirmPassword}
                                onChange={(e) => {
                                    handleInputChange(e, "confirmPassword");
                                    setConfirmPasswordDivError(false);
                                    setInputErr(false);
                                }}
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
                    <button
                        onClick={(e) => HandleSignUp(e)}
                        disabled={loading || inputErr}
                    >
                        {loading ? (
                            <LoadingOutlined
                                style={{
                                    fontSize: 24,
                                }}
                                spin
                            />
                        ) : (
                            "Create Account"
                        )}
                    </button>
                </div>
            </div>
            {process ? (
                <div className="Validation_Process">
                    <div className="Validation_Head">
                        <span>Your Password must contain</span>
                    </div>
                    <div className="Validation_Body">
                        <div>
                            <span style={{color: `${uppCaseVal ? 'red': 'green'}`}}>
                                UpperCase(A-Z)
                            </span>
                            {uppCaseVal === false ? <FcCheckmark /> : null}
                        </div>
                        <div>
                            <span style={{color: `${lowCaseVal ? 'red': 'green'}`}}>
                                LowerCase(a-z)
                            </span>
                            {lowCaseVal === false ? <FcCheckmark /> : null}
                        </div>
                        <div>
                            <span style={{color: `${specCharVal ? 'red': 'green'}`}}>
                                Special Characters
                            </span>
                            {specCharVal === false ? <FcCheckmark /> : null}
                        </div>
                        <div>
                            <span style={{color: `${numVal ? 'red': 'green'}`}}>
                                Number(0-9)
                            </span>
                            {numVal === false ? <FcCheckmark /> : null}
                        </div>
                        <div>
                            <span style={{color: `${quanVal ? 'red': 'green'}`}}>
                                7+ characters
                            </span>
                            {quanVal === false ? <FcCheckmark /> : null}
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default SignUp;
