import "./Header.css";
import Logo from "../../assets/Logo2.svg";
import {AiOutlineSearch} from "react-icons/ai";
import {BiSolidUserCircle} from "react-icons/bi";
import {FaShoppingCart} from "react-icons/fa";
import { useNavigate } from "react-router";

const Header = () => {
    const nav = useNavigate()
    const navToHome = () =>{
        nav('/Home')
    }
    const navToShop = () =>{
        nav('/Shop')
    }
    const navToAbout = () =>{
        nav('/About')
    }
    const navToContact = () =>{
        nav('/Contact')
    }
    const navToBlog = () =>{
        nav('/Blog')
    }

    return (
        <>
            <div className="HeaderBody">
                <div className="HeaderWrap">
                    <div className="HeaderLogo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="HeaderNav">
                        <ul>
                            <li onClick={navToHome}>Home</li>
                            <li onClick={navToShop}>Shop</li>
                            <li onClick={navToAbout}>About Us</li>
                            <li onClick={navToContact}>Contact Us</li>
                            <li onClick={navToBlog}>Blog</li>
                        </ul>
                    </div>
                    <div className="HeaderAcc">
                        <div className="HeaderAccSearchDiv">
                            <AiOutlineSearch className="AiOutlineSearch"/>
                        </div>
                        <div className="HeaderAccUserDiv">
                            <BiSolidUserCircle className="BiSolidUserCircle"/>
                        </div>
                        <div className="HeaderAccCartDiv">
                            <FaShoppingCart className="FaShoppingCart"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
