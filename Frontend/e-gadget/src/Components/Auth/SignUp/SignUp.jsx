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
    const[quanVal, setQuanVal] = useState()
    const[uppCaseVal, setUppCaseVal] = useState()
    const[lowCaseVal, setLowCaseVal] = useState()
    const[numVal, setNumVal] = useState()
    const[specCharVal, setSpecCharVal] = useState()

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
    });
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
    const nav = useNavigate()

    const HandleSignUp = (e) => {
        console.log("Signing Up...");
        e.preventDefault();
        setErrMsg({error: false, type: "", message: "", multipleErr: ""});
        if (!firstName) {
            setErrMsg({
                error: true,
                type: "firstName",
                message: "Enter Name",
                multipleErr: "firstName",
            });
            setLoading(false);
            setInputErr(false);
        } else if (!lastName) {
            setErrMsg({
                error: true,
                type: "lastName",
                message: "Enter Name",
                multipleErr: "lastName",
            });
            setLoading(false);
            setInputErr(false);
        } else if (!email) {
            setErrMsg({
                error: true,
                type: "email",
                message: "Input Email Address",
                multipleErr: "email",
            });
            setLoading(false);
            setInputErr(false);
        } else if (!email.includes("@")) {
            setErrMsg({
                error: true,
                type: "email@",
                message: "email must include @",
                multipleErr: "email",
            });
            setLoading(false);
            setInputErr(false);
        } else if (!phoneNumber) {
            setErrMsg({
                error: true,
                type: "phoneNumber",
                message: "Enter Phone Number",
                multipleErr: "phone",
            });
            setLoading(false);
            setInputErr(false);
        } else if (phoneNumber.length < 11) {
            setErrMsg({
                error: true,
                type: "phoneLength",
                message: "Phone No Must be 11 digits",
                multipleErr: "phone",
            });
            setLoading(false);
            setInputErr(false);
        } else if (!/^\d+$/.test(phoneNumber)) {
            setErrMsg({
                error: true,
                type: "phoneAlpha",
                message: "No Alphabets allowed",
                multipleErr: "phone",
            });
            setLoading(false);
            setInputErr(false);
        } else if (password.length < 7) {
            setErrMsg({
                error: true,
                type: "passwordSmall",
                message: "must be 8 characters long",
                multipleErr: "password",
            });
            setLoading(false);
            setInputErr(false);
        } else if (password !== confirmPassword) {
            setErrMsg({
                error: true,
                type: "passwordMatch",
                message: "password does not match",
                multipleErr: "confirmPassword",
            });
            setLoading(false);
            setInputErr(false);
        } else {
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
                        icon: 'success',
                        title: "Success",
                        html: '<h3>Account Created Successfully</h3> <p>Sending verification code...</p>',
                        timer: '8000'
                    });
                    const token = res.data.data.token
                    nav(`/Verify/${token}`)
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
        if(!/[A-Z]/.test(password)) {
            console.log('Password must contain at least one uppercase letter');
            setUppCaseVal(true)
          }
        
          else if(!/[a-z]/.test(password)) {
            console.log('Password must contain at least one lowercase letter');
            setLowCaseVal(true)
            
          }
    
          else if(!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
            console.log('Password must contain at least one special character');
            setSpecCharVal(true)
            
          }
        
          else if(!password.split('').some(char => '0123456789'.includes(char))) {
            console.log('Password must contain at least one number');
            setNumVal(true)
            
          }
          else if(password.length < 8){
              console.log("password must be more than 8 character");
              setQuanVal(true)
          }
        
           else{
              setQuanVal(false)
              setNumVal(false)
              setSpecCharVal(false)
              setLowCaseVal(false)
              setUppCaseVal(false)
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
                                    onChange={(e) => {
                                        setFirstName(e.target.value);
                                        if (
                                            errMsg.multipleErr === "firstName"
                                        ) {
                                            setErrMsg((prevState) => ({
                                                ...prevState,
                                                error: false,
                                                multipleErr: "",
                                            }));
                                        }
                                    }}
                                    style={{
                                        border: `${
                                            errMsg.multipleErr === "firstName"
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
                                    onChange={(e) => {
                                        setLastName(e.target.value);
                                        if (errMsg.multipleErr === "lastName") {
                                            setErrMsg((prevState) => ({
                                                ...prevState,
                                                error: false,
                                                multipleErr: "",
                                            }));
                                        }
                                    }}
                                    style={{
                                        border: `${
                                            errMsg.multipleErr === "lastName"
                                                ? "1px solid red"
                                                : null
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
                                type="text"
                                placeholder="Input Email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    if (errMsg.multipleErr === "email") {
                                        setErrMsg((prevState) => ({
                                            ...prevState,
                                            error: false,
                                            multipleErr: "",
                                        }));
                                    }
                                }}
                                style={{
                                    border: `${
                                        errMsg.multipleErr == "email"
                                            ? "2px solid red"
                                            : null
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
                                    errMsg.multipleErr == "phone"
                                        ? "2px solid red"
                                        : null
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
                                onChange={(e) => {
                                    setPhoneNumber(e.target.value);
                                    if (errMsg.multipleErr === "phone") {
                                        setErrMsg((prevState) => ({
                                            ...prevState,
                                            error: false,
                                            multipleErr: "",
                                        }));
                                    }
                                }}
                                maxLength={11}
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
                                <p>Must be 7 characters or more</p>
                            ) : null}
                        </div>
                        <div
                            className="SignUpContentDownFormPwdInputs"
                            style={{
                                border: `${
                                    errMsg.multipleErr === "password"
                                        ? "2px solid red"
                                        : null
                                }`,
                            }}
                        >
                            <input
                                type={!showPassword ? "password" : "text"}
                                placeholder="Input Password"
                                value={password}
                                onFocus={()=>setProcess(true)}
                                onBlur={()=>{
                                    !password?setProcess(false):setProcess(true)
                                }}
                                onChange={(e) => {
                                    // madValidation()
                                    setPassword(e.target.value);
                                    if (errMsg.multipleErr === "password") {
                                        setErrMsg((prevState) => ({
                                            ...prevState,
                                            error: false,
                                            multipleErr: "",
                                        }));
                                    }
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
                            {errMsg.type === "confirmPassword" ? (
                                <p>{errMsg.message}</p>
                            ) : null}
                        </div>
                        <div
                            className="SignUpContentDownFormcPwdInputs"
                            style={{
                                border: `${
                                    errMsg.multipleErr === "confirmPassword"
                                        ? "2px solid red"
                                        : null
                                }`,
                            }}
                        >
                            <input
                                type={!showPasswordC ? "password" : "text"}
                                placeholder="Confirm Your Password"
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                    setInputErr(false)
                                    if (
                                        errMsg.multipleErr === "confirmPassword"
                                    ) {
                                        setErrMsg((prevState) => ({
                                            ...prevState,
                                            error: false,
                                            multipleErr: "",
                                        }));
                                    }
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
          {
            process?
            <div className="Validation_Process">
            <div className="Validation_Head">
                <span>Your Password must contain</span>
            </div>
            <div className="Validation_Body">
                <div>
                    <span style={{color:uppCaseVal?"red":uppCaseVal === false?"green":null}}>UpperCase(A-Z)</span>{uppCaseVal === false?<FcCheckmark />:null}
                </div>
                <div>
                    <span style={{color:lowCaseVal?"red":lowCaseVal === false?"green":null}}>LowerCase(a-z)</span>{lowCaseVal === false?<FcCheckmark />:null}
                </div>
                <div>
                    <span style={{color:specCharVal?"red":specCharVal === false?"green":null}}>Special Characters</span>{specCharVal === false?<FcCheckmark />:null}
                </div>
                <div>
                    <span style={{color:numVal?"red":numVal === false?"green":null}}>Number(0-9)</span>{numVal === false?<FcCheckmark />:null}
                </div>
                <div>
                    <span style={{color:quanVal?"red":quanVal === false?"green":null}}>8+ characters</span>{quanVal === false?<FcCheckmark />:null}
                </div>
            </div>

        </div>:null
          }
        </>
    );
};

export default SignUp;
