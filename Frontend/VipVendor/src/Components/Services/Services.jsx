import {AiOutlineCreditCard, AiOutlineShoppingCart} from "react-icons/ai";
import {TbTruckDelivery} from "react-icons/tb";
import "./Services.css";

const Services = () => {
    return (
        <>
            <div className="ServicesBody">
               <div className="ServicesBodyWrap">
               <div className="ServicesCard1">
                    <AiOutlineShoppingCart  className="ServiceIcon"/>
                    <p>Easy To Shop</p>
                </div>
                <div className="ServicesCard2">
                    <AiOutlineCreditCard  className="ServiceIcon"/>
                    <p>Easy Payment</p>
                </div>
                <div className="ServicesCard3">
                    <TbTruckDelivery  className="ServiceIcon"/>
                    <p>Swift Delivery</p>
                </div>
               </div>
            </div>
        </>
    );
};

export default Services;
