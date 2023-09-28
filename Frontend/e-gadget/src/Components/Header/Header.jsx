import "./Header.css";
import Logo from "../../assets/Logo2.svg";
import {AiOutlineSearch} from "react-icons/ai";
import {BiSolidUserCircle} from "react-icons/bi";
import {FaShoppingCart} from "react-icons/fa";

const Header = () => {
    return (
        <>
            <div className="HeaderBody">
                <div className="HeaderWrap">
                    <div className="HeaderLogo">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="HeaderNav">
                        <ul>
                            <li>Home</li>
                            <li>Shop</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Blog</li>
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
