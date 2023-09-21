import {useNavigate} from "react-router";
import "./Home.css";

const Home = () => {
    const nav = useNavigate();

    const handleNavBack = () => {
        nav("/");
    };

    return (
        <>
            <div className="HomeBody">
                <h1>Welcome To HomePage</h1>
                <p>The homepage is under development check later</p>
                <button onClick={handleNavBack}>Visit Signup</button>
            </div>
        </>
    );
};

export default Home;
