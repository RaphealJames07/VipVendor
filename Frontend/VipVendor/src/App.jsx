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
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import Profile from "./Components/Profile/Profile";
import OrderDetail from "./Components/Profile/OrderDetail";

// import EmptyCart from "./Components/Cart/EmptyCart";


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
                        <Route path="/ProductDetail" element={<ProductDetail/>} />
                        <Route path="/Profile" element={<Profile/>} />
                        <Route path="/OrderDetail" element={<OrderDetail/>} />
                    </Routes>
                </div>
            </HashRouter>
        </>
    );
};

export default App;
