// import "./Header.css";
import Logo from "../../assets/Logo2.svg";
import {AiOutlinePoweroff, AiOutlineSearch} from "react-icons/ai";
import {BiSolidUserCircle} from "react-icons/bi";
import { FaShoppingCart} from "react-icons/fa";
import { GiHamburgerMenu} from "react-icons/gi";
import {useNavigate} from "react-router";
import { Menu, Drawer } from 'antd';
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
    const nav = useNavigate();
    const navToHome = () => {
        nav("/Home");
    };
    const navToShop = () => {
        nav("/Shop");
    };
    const navToAbout = () => {
        nav("/About");
    };
    const navToContact = () => {
        nav("/Contact");
    };
    const navToBlog = () => {
        nav("/Blog");
    };
    const navToCart = () => {
        nav("/Cart");
    };

     // State to control the visibility of the mobile menu
     const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
    
     // Handle opening and closing the mobile menu
     const toggleMobileMenu = () => {
         setMobileMenuVisible(!mobileMenuVisible);
     };

     const mobileMenu = (
        <Menu>
            <Menu.Item key="1">
                <Link to="/Home" className="HeaderLoneNavDownLinks">
                    Home
                </Link>
            </Menu.Item>
            <Menu.Item key="2">
                <Link to="/Shop" className="HeaderLoneNavDownLinks">
                    Shop
                </Link>
            </Menu.Item>
            <Menu.Item key="3">
                <Link to='/About' className="HeaderLoneNavDownLinks">
                    About
                </Link>
            </Menu.Item>
            <Menu.Item key="4">
                <Link to='/NewHotel' className="HeaderLoneNavDownLinks">
                    Contact
                </Link>
            </Menu.Item>
            <Menu.Item key="5">
                <Link to='/NewCar' className="HeaderLoneNavDownLinks">
                    Blog
                </Link>
            </Menu.Item>
            <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem' }}>
            <div className="flex items-center justify-between">
                <span>John Doe</span>
                <AiOutlinePoweroff />
            </div>
        </div>
        </Menu>
    )
    
    

    return (
        <>

            <Drawer
                title="Menu"
                placement="left"
                closable={true}
                onClose={toggleMobileMenu}
                visible={mobileMenuVisible}
                width={300}
                
                footer={true}
            >
                {mobileMenu}
            </Drawer>

            <div className="w-full h-20 flex justify-center shadow-md">
                <div className="h-full w-[90%] flex justify-between">
                    <div className="h-full w-[10%] ph:w-[30%] flex items-center justify-between">
                        <GiHamburgerMenu onClick={toggleMobileMenu} className="ph:block hidden ph:w-8 h-10"/>
                        <img src={Logo} alt="" className="w-[60%] h-[60%]" onClick={navToHome}/>
                    </div>
                    <div className="h-full w-[45%] ph:hidden">
                        <ul className="w-full h-full flex items-center justify-between">
                            <li
                                onClick={navToHome}
                                className="list-none flex items-center justify-center rounded cursor-pointer w-[18%] h-[45%]"
                            >
                                Home
                            </li>
                            <li
                                onClick={navToShop}
                                className="list-none flex items-center justify-center rounded cursor-pointer w-[18%] h-[45%]"
                            >
                                Shop
                            </li>
                            <li
                                onClick={navToAbout}
                                className="list-none flex items-center justify-center rounded cursor-pointer w-[18%] h-[45%]"
                            >
                                About Us
                            </li>
                            <li
                                onClick={navToContact}
                                className="list-none flex items-center justify-center rounded cursor-pointer w-[18%] h-[45%]"
                            >
                                Contact Us
                            </li>
                            <li
                                onClick={navToBlog}
                                className="list-none flex items-center justify-center rounded cursor-pointer w-[18%] h-[45%]"
                            >
                                Blog
                            </li>
                        </ul>
                    </div>
                    <div className="w-[20%] h-full ph:w-[35%] flex justify-between items-center">
                        <div className="w-[25%] h-full ph:w-[23%]  ph:h-10 flex items-center justify-center">
                            <AiOutlineSearch className="w-6 h-6 ph:w-28 ph:h-28 cursor-pointer" />
                        </div>
                        <div className="w-[25%] h-full ph:w-[23%]  ph:h-10 flex items-center justify-center">
                            <BiSolidUserCircle className="w-6 h-6 ph:w-28 ph:h-28  cursor-pointer" />
                        </div>
                        <div className="w-[25%] h-full ph:w-[23%]  ph:h-10 flex items-center justify-center">
                            <FaShoppingCart
                                className="w-6 h-6 ph:w-28 ph:h-28  cursor-pointer"
                                onClick={navToCart}
                            />  
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
