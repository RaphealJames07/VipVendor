import './AuthPage.css';
import Logo from "../../../assets/Logo2.svg";
import {useState} from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import "../Login/Login.css";
import "../SignUp/SIgnUp.css";

const AuthPage = () => {
    const [login, setLogin] = useState(true);
    const [signUp, setSignUp] = useState(false);

    const showLogin = () => {
        setLogin(true);
        setSignUp(false);
    };

    const showSignUp = () => {
        setSignUp(true);
        setLogin(false);
    };

    return (
        <>
            <div className="AuthPageBody">
                <div className="AuthPageWrap">
                    <div className="AuthPageLogoDiv">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="AuthPageContentDiv">
                        <div className="AuthPageContentDivWrap">
                            <div className="AuthPageContentTop">
                                <div
                                    className="AuthPageContentTop1"
                                    onClick={showSignUp}
                                    style={{
                                        background: `${
                                            signUp ? "#3F51B5" : "#fff"
                                        }`,
                                        color: `${signUp ? "white" : "black"}`,
                                    }}
                                >
                                    Create Account
                                </div>
                                <div
                                    className="AuthPageContentTop2"
                                    onClick={showLogin}
                                    style={{
                                        background: `${
                                            login ? "#3F51B5" : "#fff"
                                        }`,
                                        color: `${login ? "white" : "black"}`,
                                    }}
                                >
                                    Login
                                </div>
                            </div>
                            <div
                                className={`LoginContentDown ${
                                    login ? "" : "hidden"
                                }`}
                            >
                                <Login />
                            </div>
                            <div
                                className={`SignUpContentDown ${
                                    signUp ? "" : "hidden"
                                }`}
                            >
                                <SignUp />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
  

export default AuthPage;
