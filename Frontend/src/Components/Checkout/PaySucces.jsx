const PaySucces = () => {
    return (
        <>
            <div className="w-full h-[100vh] flex flex-col items-center justify-center gap-7 text-center">
                <div className="w-14 h-14 bg-green-500 rounded-full"></div>
                <h1 className="text-4xl">
                    Your payment was processed successfully
                </h1>
                <p className="text-xl">
                    Order number: <span>1234567890</span>
                </p>
                <p className="text-lg">
                    Please check your email for order invoice and payment
                    reciepts
                </p>
                <div className="w-full h-14 flex justify-center items-center gap-10">
                    <button className="w-36 h-12 border-y border-x rounded-md border-pry">
                        Review order
                    </button>
                    <button className="w-40 h-12 bg-pry rounded-md text-white">
                        Back to homepage
                    </button>
                </div>
            </div>
        </>
    );
};

export default PaySucces;
