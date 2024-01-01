import "./App.css";
import AuthPage from "./Components/Auth/AuthPage/AuthPage";
import {HashRouter, Route, Routes} from "react-router-dom";
import ToTop from "./ToTop";
import Verify from "./Components/Auth/Verify/Verify";
import ResendResendVerify from "./Components/Auth/ResendVerify/ResendVerify";
import Home from "./Components/Home/Home";
import ForgetPwd from "./Components/Auth/ForgetPwd/ForgetPwd";
import ResetPwd from "./Components/Auth/ResetPwd/ResetPwd";
import Shop from "./Components/Shop/Shop";
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Blog from './Components/Blog/Blog'
import Cart from "./Components/Cart/Cart";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import Profile from "./Components/Profile/Profile";
import OrderDetail from "./Components/Profile/OrderDetail";
import Checkout from "./Components/Checkout/Checkout";
import PaySucces from "./Components/Checkout/PaySucces";
import Payfailed from "./Components/Checkout/Payfailed";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import DriverDashboard from "./Components/Driver/DriverDashboard";
import Order from "./Components/Driver/Order";
import GetOneOrder from "./Components/Driver/GetOneOrder";

// import EmptyCart from "./Components/Cart/EmptyCart";

const App = () => {
    return (
        <>
            <HashRouter>
                <ToTop />
                <div className="MainBody">
                    <Routes>
                        <Route path="/Home" element={<Home />} />
                        <Route path="/" element={<AuthPage />} />
                        <Route path="/Verify/:token" element={<Verify/>} />
                        <Route path="/ResendVerify" element={<ResendResendVerify/>} />
                        <Route path="/user/reset-password" element={<ResetPwd />} />
                        <Route path="/ForgetPassword" element={<ForgetPwd/>} />
                        <Route path="/Shop" element={<Shop/>} />
                        <Route path="/About" element={<About/>} />
                        <Route path="/Contact" element={<Contact/>} />
                        <Route path="/Blog" element={<Blog/>} />
                        <Route path="/Cart" element={<Cart/>} />
                        <Route path="/ProductDetail" element={<ProductDetail/>} />
                        <Route path="/Profile" element={<Profile/>} />
                        <Route path="/OrderDetail" element={<OrderDetail/>} />
                        <Route path="/Ckeckout" element={<Checkout/>} />
                        <Route path="/PaymentSuccess" element={<PaySucces/>} />
                        <Route path="/PaymentFailed" element={<Payfailed/>} />
                        <Route path="/AdminDashboard" element={<AdminDashboard/>} />
                        <Route path="/DriverDashboard" element={<DriverDashboard/>} />
                        <Route path="/order" element={<Order/>} />
                        <Route path="/order/:id" element={<GetOneOrder/>} />
                    </Routes>
                </div>
            </HashRouter>
        </>
    );
};

export default App;

// import {useEffect, useState} from "react";
// import "./App.css";

// const LandingPage = () => {
//     // const [rock, setRock] = useState(false);
//     // const [paper, setPaper] = useState(false);
//     // const [scissors, setScissors] = useState(false);
//     const [playerMove, setPlayerMove] = useState("");
//     const [computerMove, setComputerMove] = useState("");
//     const [anouncement, setanouncement] = useState("");
//     const [win, setWin] = useState(0);
//     const [lose, setLose] = useState(0);
//     const [draw, setDraw] = useState(0);

//     console.log("Computer has picked:", computerMove);

//     const handleComputerMove = () => {
//         let randomNumber = Math.floor(Math.random() * 3);
//         // console.log("my",randomNumber)

//         if (randomNumber === 0) {
//             setComputerMove("rock");
//             // console.log("rock is", randomNumber);
//         } else if (randomNumber === 1) {
//             setComputerMove("paper");
//             // console.log("paper is", randomNumber);
//         } else {
//             setComputerMove("scissors");
//             // console.log("scissors", randomNumber);
//         }
//     };

//     const handleanouncement = () => {
//         if (playerMove === "scissors" && computerMove === "paper") {
//             setanouncement("You win");
//             setWin((prevWins) => prevWins + 1);
//         } else if (playerMove === "scissors" && computerMove === "rock") {
//             setanouncement("You lose");
//             setLose((prevLose) => prevLose + 1);
//         } else if (playerMove === "scissors" && computerMove === "scissors") {
//             setanouncement("Draw");
//             setDraw((prevDraw) => prevDraw + 1);
//         } else if (playerMove === "paper" && computerMove === "rock") {
//             setanouncement("You win");
//             setWin((prevWins) => prevWins + 1);
//         } else if (playerMove === "paper" && computerMove === "scissors") {
//             setanouncement("You lose");
//             setLose((prevLose) => prevLose + 1);
//         } else if (playerMove === "paper" && computerMove === "paper") {
//             setanouncement("Draw");
//             setDraw((prevDraw) => prevDraw + 1);
//         } else if (playerMove === "rock" && computerMove === "scissors") {
//             setanouncement("You win");
//             setWin((prevWins) => prevWins + 1);
//         } else if (playerMove === "rock" && computerMove === "paper") {
//             setanouncement("You lose");
//             setLose((prevLose) => prevLose + 1);
//         } else if (playerMove === "rock" && computerMove === "rock") {
//             setanouncement("Draw");
//             setDraw((prevDraw) => prevDraw + 1);
//         } else if (playerMove === "" && computerMove === "") {
//             setanouncement("Pick a move for result");
//         }
//         console.log(anouncement);
//     };

//     // const handleScore = () => {
//     //     if (anouncement === "You win") {
//     //         setWin((prev) => prev++);
//     //     } else if (anouncement === "Draw") {
//     //         setDraw((prev) => prev++);
//     //     } else if (anouncement === "You lose") {
//     //         setLose((prev) => prev++);
//     //     } else {
//     //         return;
//     //     }
//     // };

//     useEffect(() => {
//         handleanouncement();
//         // handleScore();
//     }, [playerMove]);

//     return (
//         <div className="gamewrapper">
//             <div className="hold1">
//                 <div className="title">
//                     <div className="option">
//                         <p>ROCK</p>
//                         <p>PAPER</p>
//                         <p>SCISSORS</p>
//                     </div>
//                     <div className="score">
//                         <div>
//                             <main className="xx">
//                                 <h2>WIN</h2>
//                             </main>
//                             <main className="xx">
//                                 <h2>LOSS</h2>
//                             </main>
//                             <main className="xx">
//                                 <h2>DRAW</h2>
//                             </main>
//                         </div>
//                         <div>
//                             <main className="xx dx">{win}</main>
//                             <main className="xx dx">{lose}</main>
//                             <main className="xx dx">{draw}</main>
//                         </div>
//                         {/* <p>score</p>
//                         <h1>12</h1> */}
//                     </div>
//                 </div>
//                 <div className="top">
//                     <h3 style={{color: "lightblue"}}>PAPER</h3>
//                     <div
//                         style={{backgroundColor: "lightBlue"}}
//                         onClick={() => {
//                             setPlayerMove("paper");
//                             console.log("Player pick PAPER");
//                             handleComputerMove();
//                             handleanouncement();
//                             // handleScore()
//                         }}
//                     >
//                         <main className="palet">
//                             <img
//                                 src="https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296855_1280.png"
//                                 alt="paper"
//                             />
//                         </main>
//                     </div>
//                     <div
//                         style={{backgroundColor: "yellow"}}
//                         onClick={() => {
//                             setPlayerMove("scissors");
//                             console.log("Player pick SCISSORS");
//                             handleComputerMove();
//                             handleanouncement();
//                             // handleScore()
//                         }}
//                     >
//                         <main className="palet">
//                             <img
//                                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqPLc5jt6UWel1Vrpc_k8cuH8ox8thO0Jn6-La1LQRhkcHMO2CGfVEzOdP1JY5yhP3D9Q&usqp=CAU"
//                                 alt="scissors"
//                             />
//                         </main>
//                     </div>
//                     <h3 style={{color: "yellow"}}>SCISSORS</h3>
//                 </div>
//                 <div className="down">
//                     <div
//                         onClick={() => {
//                             setPlayerMove("rock");
//                             console.log("Player pick ROCK");
//                             handleComputerMove();
//                             handleanouncement();
//                             // handleScore()
//                         }}
//                     >
//                         <main className="palet">
//                             <img
//                                 src="https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_1280.png"
//                                 alt="rock"
//                             />
//                         </main>
//                     </div>
//                     <h3 style={{color: "red", marginLeft: "20px"}}>ROCK</h3>
//                 </div>
//             </div>

//             <div className="hold2">
//                 <div className="player">
//                     <h2>You picked {playerMove}</h2>
//                     {playerMove === "paper" ? (
//                         <div
//                             style={{backgroundColor: "lightBlue"}}
//                             className="xr"
//                         >
//                             <main className="palet">
//                                 <img
//                                     src="https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296855_1280.png"
//                                     alt="paper"
//                                 />
//                             </main>
//                         </div>
//                     ) : null}

//                     {playerMove === "scissors" ? (
//                         <div style={{backgroundColor: "yellow"}} className="xr">
//                             <main className="palet">
//                                 <img
//                                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqPLc5jt6UWel1Vrpc_k8cuH8ox8thO0Jn6-La1LQRhkcHMO2CGfVEzOdP1JY5yhP3D9Q&usqp=CAU"
//                                     alt="scissors"
//                                 />
//                             </main>
//                         </div>
//                     ) : null}

//                     {playerMove === "rock" ? (
//                         <div style={{backgroundColor: "red"}} className="xr">
//                             <main className="palet">
//                                 <img
//                                     src="https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_1280.png"
//                                     alt="rock"
//                                 />
//                             </main>
//                         </div>
//                     ) : null}
//                 </div>
//                 <div className="outcome">
//                     <h2>{anouncement}</h2>
//                 </div>
//                 <div className="computer">
//                     <h2>The house picked {computerMove}</h2>
//                     {computerMove === "rock" ? (
//                         <div style={{backgroundColor: "red"}} className="xr">
//                             <main className="palet">
//                                 <img
//                                     src="https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296854_1280.png"
//                                     alt="rock"
//                                 />
//                             </main>
//                         </div>
//                     ) : computerMove === "paper" ? (
//                         <div
//                             style={{backgroundColor: "lightBlue"}}
//                             className="xr"
//                         >
//                             <main className="palet">
//                                 <img
//                                     src="https://cdn.pixabay.com/photo/2014/03/25/15/26/rock-paper-scissors-296855_1280.png"
//                                     alt="paper"
//                                 />
//                             </main>
//                         </div>
//                     ) : computerMove === "scissors" ? (
//                         <div style={{backgroundColor: "yellow"}} className="xr">
//                             <main className="palet">
//                                 <img
//                                     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqPLc5jt6UWel1Vrpc_k8cuH8ox8thO0Jn6-La1LQRhkcHMO2CGfVEzOdP1JY5yhP3D9Q&usqp=CAU"
//                                     alt="scissors"
//                                 />
//                             </main>
//                         </div>
//                     ) : null}
//                 </div>
//             </div>
            
//         </div>
//     );
// };

// export default LandingPage;
