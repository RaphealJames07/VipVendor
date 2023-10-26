

const Payfailed = () => {
  return (
    <>
      <div className="w-full h-[100vh] flex flex-col items-center justify-center gap-7 text-center">
                <div className="w-14 h-14 bg-red-500 rounded-full"></div>
                <h1 className="text-4xl">
                    Transaction Failed
                </h1>
                <p className="text-lg">
                    Unfortunately there was an error when processing your order
                </p>
                <div className="w-full h-14 flex justify-center items-center gap-10">
                    <button className="w-36 h-12 border-y border-x rounded-md border-pry">
                        Cancel
                    </button>
                    <button className="w-40 h-12 bg-pry rounded-md text-white">
                        Retry
                    </button>
                </div>
            </div>
    </>
  )
}

export default Payfailed