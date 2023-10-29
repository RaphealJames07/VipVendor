import React from 'react'
import './DriverDashboard.css'
import Logo from "../../assets/Logo2.svg";
import ourAim from "../../assets/ourAim.jpg";
import { useNavigate } from 'react-router';

function DriverDashboard() {
    const nav = useNavigate()
  return (
    <>
        <div className='Desktop_Dashboard'>DriverDashboard</div>
        <div className='MobileDashboard'>
            <section className='DriversHeader'>
                <div className='LogoPart'>
                    <img src={Logo} alt="" />
                </div>
                <div className='ProfilePart'>
                    <span>^</span>
                    <div className='DriverProfile'>
                        <img src={ourAim} alt="" />
                    </div>
                </div>
            </section>

            <section className='DriversInfo'>
                <span>WELCOME BACK</span>
                <h4>Ikenga Frank</h4>
                <div>
                    ^!--DRIVER--1^
                </div>
            </section>

            <section className='DriverOrderSummary'>
                <div className='SummaryBox'>
                    <div>
                        <span>Total Orders</span>
                        <h4>45</h4>
                    </div>
                    <div>
                        <span>Completed Orders</span>
                        <h4>15</h4>
                    </div>
                    <div>
                        <span>Failed Orders</span>
                        <h4>3</h4>
                    </div>
                </div>
            </section>

            <section className='DriverOrderListSection'>
                <div className='ListHeader'>
                    <span>Your Orders</span>
                    <span style={{color:"#3F51B5", textDecoration:"underline"}}>View all</span>
                </div>
                <div className='HeaderLine'> </div>
                <div className='DriverOrderList'>
                    <div className='DriverListHeader'>
                        {/* <span>S/N</span> */}
                        <span className='OrderName'>Name</span>
                        <span className='OrderProduct'>Product</span>
                        <span className='OrderStatus'>Status</span>
                    </div>

                    <div className='TheOrders'>
                        <span className='BuyerName'>John Elizabeth</span>
                        <span className='ProductName'>Xiaomi Mi Watch Waterproof</span>
                        <span className='ProductStatus'>Ready</span>
                        <div className='MoreDiv'>
                            <button className='ViewMoreBtn' onClick={()=>{
                                nav("/order")
                            }}>More</button>
                        </div>
                    </div>
                    <div className='TheOrders'>
                        <span className='BuyerName'>John Elizabeth</span>
                        <span className='ProductName'>Xiaomi Mi Watch Waterproof</span>
                        <span className='ProductStatus'>Ready</span>
                        <div className='MoreDiv'>
                            <button className='ViewMoreBtn' onClick={()=>{
                                nav("/order")
                            }}>More</button>
                        </div>
                    </div>
                    <div className='TheOrders'>
                        <span className='BuyerName'>John Elizabeth</span>
                        <span className='ProductName'>Xiaomi Mi Watch Waterproof</span>
                        <span className='ProductStatus'>Ready</span>
                        <div className='MoreDiv'>
                            <button className='ViewMoreBtn' onClick={()=>{
                                nav("/order")
                            }}>More</button>
                        </div>
                    </div>
                    <div className='TheOrders'>
                        <span className='BuyerName'>John Elizabeth</span>
                        <span className='ProductName'>Xiaomi Mi Watch Waterproof</span>
                        <span className='ProductStatus'>Ready</span>
                        <div className='MoreDiv'>
                            <button className='ViewMoreBtn' onClick={()=>{
                                nav("/order")
                            }}>More</button>
                        </div>
                    </div>
                    <div className='TheOrders'>
                        <span className='BuyerName'>John Elizabeth</span>
                        <span className='ProductName'>Xiaomi Mi Watch Waterproof</span>
                        <span className='ProductStatus' style={{color:"green"}}>Ready</span>
                        <div className='MoreDiv'>
                            <button className='ViewMoreBtn' onClick={()=>{
                                nav("/order")
                            }}>More</button>
                        </div>
                    </div>
                    <div className='TheOrders'>
                        <span className='BuyerName'>John Elizabeth</span>
                        <span className='ProductName'>Xiaomi Mi Watch Waterproof</span>
                        <span className='ProductStatus'>Ready</span>
                        <div className='MoreDiv'>
                            <button className='ViewMoreBtn' onClick={()=>{
                                nav("/order")
                            }}>More</button>
                        </div>
                    </div>
                    <div className='TheOrders'>
                        <span className='BuyerName'>John Elizabeth</span>
                        <span className='ProductName'>Xiaomi Mi Watch Waterproof</span>
                        <span className='ProductStatus'>Ready</span>
                        <div className='MoreDiv'>
                            <button className='ViewMoreBtn' onClick={()=>{
                                nav("/order")
                            }}>More</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}

export default DriverDashboard