import "./App.css";
import AuthPage from "./Components/Auth/AuthPage/AuthPage";
import {HashRouter, Route, Routes} from "react-router-dom";
import ToTop from "./ToTop";
import Verify from "./Components/Auth/Verify/Verify";
import ResendResendVerify from "./Components/Auth/ResendVerify/ResendVerify";
import Home from "./Components/Home/Home";
import ForgetPwd from "./Components/Auth/ForgetPwd/ForgetPwd";
import ResetPwd from "./Components/Auth/ResetPwd/ResetPwd";
import Shop from "./Components/Shop/Shop";
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Blog from './Components/Blog/Blog'
import Cart from "./Components/Cart/Cart";


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
                        <Route path="/Shop" element={<Shop/>} />
                        <Route path="/About" element={<About/>} />
                        <Route path="/Contact" element={<Contact/>} />
                        <Route path="/Blog" element={<Blog/>} />
                        <Route path="/Cart" element={<Cart/>} />
                    </Routes>
                </div>
            </HashRouter>
        </>
    );
};

export default App;
