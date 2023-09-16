import './AuthPage.css';
import Logo from "../../../assets/Logo2.svg";
import {useState} from "react";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

const AuthPage = () => {
    const [ui, setUi] = useState(false);

    const handleUiChange = () => {
        setUi(!ui);
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
                                    onClick={handleUiChange}
                                >
                                    Create Account
                                </div>
                                <div className="AuthPageContentTop2" onClick={handleUiChange}>Login</div>
                            </div>
                            {ui ? (
                                <>
                                    <SignUp />
                                </>
                            ) : (
                                <Login />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthPage;
