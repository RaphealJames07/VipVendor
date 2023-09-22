import "./App.css";
import AuthPage from "./Components/Auth/AuthPage/AuthPage";
import {HashRouter, Route, Routes} from "react-router-dom";
import ToTop from "./ToTop";
import Verify from "./Components/Auth/Verify/Verify";
import ResendResendVerify from "./Components/Auth/ResendVerify/ResendVerify";
import Home from "./Components/Home/Home";
import ForgetPwd from "./Components/Auth/ForgetPwd/ForgetPwd";
import ResetPwd from "./Components/Auth/ResetPwd/ResetPwd";

const App = () => {
    return (
        <>
            <HashRouter>
                <ToTop />
                <div className="MainBody">
                    <Routes>
                        <Route path="/Home" element={<Home />} />
                        <Route path="/" element={<AuthPage />} />
                        <Route path="/Verify/:token" element={<Verify/>} />
                        <Route path="/ResendVerify" element={<ResendResendVerify/>} />
                        <Route path="/user/reset-password" element={<ResetPwd />} />
                        <Route path="/ForgetPassword" element={<ForgetPwd/>} />
                    </Routes>
                </div>
            </HashRouter>
        </>
    );
};

export default App;
