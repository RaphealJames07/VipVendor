import Iphone from '../../assets/iphone12.png'
import { useNavigate } from 'react-router';


const Orders = () => {
    const nav = useNavigate()
    const handleViewMoreOrder = () =>{
        nav('/OrderDetail')
    }
  return (
      <>
          <div className="w-full h-[100vh]">
              <div className="w-full h-[10%]">
                  <ul className="w-full h-full flex items-center justify-between">
                      <li className="w-28 h-10  flex items-center justify-center rounded-full cursor-pointer bg-pry text-white">
                          All Orders
                      </li>
                      <li className="w-28 h-10 flex items-center justify-center rounded-full cursor-pointer border-y-2 border-x-2 border-pry">
                          Processing
                      </li>
                      <li className="w-28 h-10 flex items-center justify-center rounded-full cursor-pointer border-y-2 border-x-2 border-pry">
                          Delivered
                      </li>
                      <li className="w-28 h-10 flex items-center justify-center rounded-full cursor-pointer border-y-2 border-x-2 border-pry">
                          On Delivery
                      </li>
                      <li className="w-28 h-10 flex items-center justify-center rounded-full cursor-pointer border-y-2 border-x-2 border-pry">
                          Canceled
                      </li>
                      <li className="w-28 h-10 flex items-center justify-center rounded-full cursor-pointer border-y-2 border-x-2 border-pry">
                          Returned
                      </li>
                  </ul>
              </div>
              <div className="w-full h-[85%] flex flex-col gap-5">
                  <div className="w-full h-32 bg-slate-50 p-2 flex justify-between cursor-pointer" onClick={handleViewMoreOrder}>
                      <div className="w-[20%] h-full bg-red-100">
                          <img src={Iphone} alt="" className='w-full h-full object-contain' />
                      </div>
                      <div className="w-[20%] h-full flex flex-col justify-between">
                          <p>Iphone 12 Pro max</p>
                          <p className='flex justify-between'>QTY: 1 <span>Color: Red</span></p>
                          <p>Price: 300,000</p>
                      </div>
                      <div className="w-[20%] h-full ">
                          <p>Order No</p>
                          <h1>VIP-123456789</h1>
                      </div>

                      <div className="w-[20%] h-full ">
                          <p>Status</p>
                          <p>
                              Shipped <span>12-10-2023</span>
                          </p>
                      </div>
                  </div>
                  <div className="w-full h-32 bg-slate-50 p-2 flex justify-between cursor-pointer">
                      <div className="w-[20%] h-full bg-red-100">
                          <img src={Iphone} alt="" className='w-full h-full object-contain' />
                      </div>
                      <div className="w-[20%] h-full flex flex-col justify-between">
                          <p>Iphone 12 Pro max</p>
                          <p className='flex justify-between'>QTY: 1 <span>Color: Red</span></p>
                          <p>Price: 300,000</p>
                      </div>
                      <div className="w-[20%] h-full ">
                          <p>Order No</p>
                          <h1>VIP-123456789</h1>
                      </div>

                      <div className="w-[20%] h-full ">
                          <p>Status</p>
                          <p>
                              Shipped <span>12-10-2023</span>
                          </p>
                      </div>
                  </div>
                  <div className="w-full h-32 bg-slate-50 p-2 flex justify-between cursor-pointer">
                      <div className="w-[20%] h-full bg-red-100">
                          <img src={Iphone} alt="" className='w-full h-full object-contain' />
                      </div>
                      <div className="w-[20%] h-full flex flex-col justify-between">
                          <p>Iphone 12 Pro max</p>
                          <p className='flex justify-between'>QTY: 1 <span>Color: Red</span></p>
                          <p>Price: 300,000</p>
                      </div>
                      <div className="w-[20%] h-full ">
                          <p>Order No</p>
                          <h1>VIP-123456789</h1>
                      </div>

                      <div className="w-[20%] h-full ">
                          <p>Status</p>
                          <p>
                              Shipped <span>12-10-2023</span>
                          </p>
                      </div>
                  </div>
                  <div className="w-full h-32 bg-slate-50 p-2 flex justify-between cursor-pointer">
                      <div className="w-[20%] h-full bg-red-100">
                          <img src={Iphone} alt="" className='w-full h-full object-contain' />
                      </div>
                      <div className="w-[20%] h-full flex flex-col justify-between">
                          <p>Iphone 12 Pro max</p>
                          <p className='flex justify-between'>QTY: 1 <span>Color: Red</span></p>
                          <p>Price: 300,000</p>
                      </div>
                      <div className="w-[20%] h-full ">
                          <p>Order No</p>
                          <h1>VIP-123456789</h1>
                      </div>

                      <div className="w-[20%] h-full ">
                          <p>Status</p>
                          <p>
                              Shipped <span>12-10-2023</span>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </>
  );
}

export default Orders