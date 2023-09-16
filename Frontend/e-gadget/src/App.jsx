import "./App.css";
import AuthPage from "./Components/Auth/AuthPage/AuthPage";
import {HashRouter, Route, Routes} from "react-router-dom";
import ToTop from "./ToTop";

const App = () => {
    return (
        <>
            <HashRouter>
                <ToTop />
                <div className="MainBody">
                    <Routes>
                        <Route path="/" element={<AuthPage />} />
                    </Routes>
                </div>
            </HashRouter>
        </>
    );
};

export default App;
