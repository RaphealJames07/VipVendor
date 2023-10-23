import {FaShoppingCart} from "react-icons/fa";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { useNavigate } from "react-router";

const EmptyCart = () => {
  const nav = useNavigate()

  const handleNavToSHop = () =>{
    nav("/Shop")
  }

    return (
        <>
            <div>
                <Header />
                <div className="w-full h-[80vh] px-20 flex flex-col justify-center gap-10 items-center text-center">
                    <FaShoppingCart className="w-32 h-32 text-pry" />
                    <h1 className="text-4xl font-semibold">
                        Oops, you haven&#39;t added any item to cart yet
                    </h1>
                    <p className="text-2xl">
                        Browse from our home page or shopping page
                    </p>
                    <button className="w-40 h-10 bg-pry rounded-md text-white text-sm" onClick={handleNavToSHop}>
                        Continue Shopping
                    </button>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default EmptyCart;
