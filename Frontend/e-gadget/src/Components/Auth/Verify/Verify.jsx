import Logo from "../../../assets/Logo2.svg";
import './Verify.css'

const Verify = () => {
    return (
        <>
            <div className="VerifyBody">
                <div className="VerifyWrap">
                    <div className="VerifyLogoDiv">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="VerifyContentDiv">
                        <div className="VerifyContentDivWrap">
                            <h1>Authenticate Your Account!</h1>
                            <p>
                                Protecting your account is our top priority,
                                please verify your account by entering the
                                authorization code sent to ra******07@gmail.com
                            </p>
                            <div style={{display: "flex", fontSize:'30px'}} className="VerifyContentCodeInputDiv">_ _ _ _ _ _</div>
                            <button>Verify</button>
                            <p>
                                it may take a minute to recieve your code, haven
                                {`'`}t recieved it?{" "}
                                <span style={{color:'#3F51B5', cursor:'pointer'}}>Resend a new code.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Verify;
