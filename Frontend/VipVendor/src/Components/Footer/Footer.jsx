import {
    AiFillAndroid,
    AiFillApple,
    AiFillFacebook,
    AiFillInstagram,
    AiFillMessage,
    AiFillTwitterSquare,
} from "react-icons/ai"
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <div className="FooterBody">
                <div className="FooterBodyWrap">
                    <div className="FooterTop">
                        <div className="FooterTopA">
                            <p>
                                10% off any product when you subscribe to our
                                news
                            </p>
                            <input type="email" placeholder="email" />
                            <button>Subscribe</button>
                            <div className="FooterTopAddyInfo">
                                <p>Physical Address</p>
                                <p>
                                    No 12 Kukoyi Street apapa Lagos
                                    Nigeria
                                </p>
                                <p>Tel: +234807493811 +2348123338204</p>
                            </div>
                        </div>
                        <div className="FooterTopB">
                            <h3>HELP AND INFO</h3>
                            <ul>
                                <li>Help</li>
                                <li>Track your order</li>
                                <li>Shipping and refunds</li>
                                <li>10% discounts for students</li>
                                <li>FAQs</li>
                            </ul>
                        </div>
                        <div className="FooterTopC">
                            <div className="FooterTopC1">
                                <h3>MOBILE VERSION</h3>
                                <div className="FooterTopC1IconsDiv">
                                    <AiFillApple className="FooterTopC1Icons"/>
                                    <AiFillAndroid className="FooterTopC1Icons"/>
                                </div>
                            </div>
                            <div className="FooterTopC2">
                                <h3>CONTACT US</h3>
                                <div className="FooterTopC2IconsDiv">
                                    <AiFillTwitterSquare className="FooterTopC1Icons"/>
                                    <AiFillFacebook className="FooterTopC1Icons"/>
                                    <AiFillInstagram className="FooterTopC1Icons"/>
                                    <AiFillMessage className="FooterTopC1Icons"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="FooterDown">
                        <div className="FooterDownB">
                            <p>Privacy and cookies</p>
                            <p>Accessibility</p>
                            <p>Terms and conditions</p>
                        </div>
                        <div className="FooterDownC">
                            C 2023 All Right Reserved
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
