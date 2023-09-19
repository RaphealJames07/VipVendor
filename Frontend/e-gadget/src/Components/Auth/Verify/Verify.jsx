// import Logo from "../../../assets/Logo2.svg";
// import './Verify.css'

// const Verify = () => {
//     return (
//         <>
//             <div className="VerifyBody">
//                 <div className="VerifyWrap">
//                     <div className="VerifyLogoDiv">
//                         <img src={Logo} alt="" />
//                     </div>
//                     <div className="VerifyContentDiv">
//                         <div className="VerifyContentDivWrap">
//                             <h1>Authenticate Your Account!</h1>
//                             <p>
//                                 Protecting your account is our top priority,
//                                 please verify your account by entering the
//                                 authorization code sent to ra******07@gmail.com
//                             </p>
//                             <div style={{display: "flex", fontSize:'30px'}} className="VerifyContentCodeInputDiv">
//                                 <input type="text" maxLength={1}/>
//                                 <input type="text" maxLength={1}/>
//                                 <input type="text" maxLength={1}/>
//                                 <input type="text" maxLength={1}/>
//                             </div>
//                             <button>Verify</button>
//                             <p>
//                                 it may take a minute to recieve your code, haven
//                                 {`'`}t recieved it?{" "}
//                                 <span style={{color:'#3F51B5', cursor:'pointer'}}>Resend a new code.</span>
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Verify;

import Logo from "../../../assets/Logo2.svg";
import { useRef, useState } from "react";
import "./Verify.css";
import { Modal } from 'antd';

const Verify = () => {
    const inputRefs = [useRef(), useRef(), useRef(), useRef()];
    const [modalVisible, setModalVisible] = useState(false);

    const focusNextInput = (currentIndex) => {
        if (currentIndex < inputRefs.length - 1) {
            inputRefs[currentIndex + 1].current.focus();
        }
    };

    const handleInputChange = (e, currentIndex) => {
        const { value } = e.target;

        if (!/^[0-9]+$/.test(value)) {
            showModal();
            return;
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

        if (/^\d{4}$/.test(pastedText)) {
            const digits = pastedText.split("");

            inputRefs.forEach((inputRef, index) => {
                if (index < digits.length) {
                    inputRef.current.value = digits[index];
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
        }
    };

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
                                authorization code sent to ra******07@gmail.com
                            </p>
                            <div
                                style={{ display: "flex", fontSize: '30px' }}
                                className="VerifyContentCodeInputDiv"
                                onPaste={handlePaste}
                            >
                                {inputRefs.map((inputRef, index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        maxLength={1}
                                        ref={inputRef}
                                        onChange={(e) => handleInputChange(e, index)}
                                        onKeyDown={(e) => handleKeyDown(e, index)}
                                        onInput={(e) => {
                                            const newValue = e.target.value.replace(/\D/g, "");
                                            e.target.value = newValue;
                                            handleInputChange(e, index);
                                        }}
                                    />
                                ))}
                            </div>
                            <button>Verify</button>
                            <p>
                                it may take a minute to receive your code, haven
                                {'\''}t received it?{" "}
                                <span style={{ color: '#3F51B5', cursor: 'pointer' }}>Resend a new code.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                title="Invalid Input"
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
                footer={null}
                
            >
                The code sent to your email should contain 4 digit numbers only. No alphabets or special characters are allowed. Please check and try again.
            </Modal>
        </>
    );
};

export default Verify;

