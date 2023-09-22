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
                <p>Some prompts to check out</p>
                <ul>
                    <li>Login</li>
                    <li>Sign Up</li>
                    <li>Forget Password</li>
                    <li>Reset Password</li>
                    <li>Verification</li>
                    <li>Resend Verification(opens when you try to log in but you already have an account but not yet verified)</li>
                </ul>
                <button onClick={handleNavBack}>Visit Signup</button>
            </div>
        </>
    );
};

export default Home;
