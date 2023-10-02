import "./Home.css";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import HomeProduct from "../HomeProducts/HomeProduct";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";
import Footer from "../Footer/Footer";

const Home = () => {
    return (
        <>
            <div className="HomeBody">
                <Header />
                <Hero />
                <HomeProduct />
                <Services />
                <Testimonial />
                <Footer/>
            </div>
        </>
    );
};

export default Home;
