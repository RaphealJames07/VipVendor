

const AdminProducts = () => {
  return (
      <>
          <div className="w-full h-[89vh] bg-sky-300">
              <div className="w-full h-80 flex flex-col justify-between ">
                  <div className="w-full h-12 flex items-center text-2xl">
                      All Categories
                  </div>
                  <div className="w-full h-[17rem] flex p-12 justify-between ">
                      <div className="w-60 h-full rounded-md bg-white flex flex-col items-center justify-center gap-3">
                          <img
                              src=""
                              alt=""
                              className="w-36 h-28 bg-amber-300"
                          />
                          <p>Mobile Phones</p>
                      </div>
                      <div className="w-60 h-full rounded-md bg-white flex flex-col items-center justify-center gap-3">
                          <img
                              src=""
                              alt=""
                              className="w-36 h-28 bg-amber-300"
                          />
                          <p>Mobile Phones</p>
                      </div>
                      <div className="w-60 h-full rounded-md bg-white flex flex-col items-center justify-center gap-3">
                          <img
                              src=""
                              alt=""
                              className="w-36 h-28 bg-amber-300"
                          />
                          <p>Mobile Phones</p>
                      </div>
                      <div className="w-60 h-full rounded-md bg-white flex flex-col items-center justify-center gap-3">
                          <img
                              src=""
                              alt=""
                              className="w-36 h-28 bg-amber-300"
                          />
                          <p>Mobile Phones</p>
                      </div>
                  </div>
              </div>
              <div className="w-full h-[21rem] bg-purple-200 p-7">
                <div className="w-full h-full border-y-2 border-x-2 border-blue-950 border-dashed rounded-md flex items-center justify-center">
                  <h1 className="text-2xl cursor-pointer">Click here to add a new product</h1>
                </div>  
              </div>
          </div>
      </>
  );
}

export default AdminProducts