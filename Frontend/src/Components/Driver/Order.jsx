import React from 'react'
import Logo from "../../assets/Logo2.svg";
import ourAim from "../../assets/ourAim.jpg";
import { useNavigate } from 'react-router';
function Order() {
    const nav = useNavigate()
  return (
    <>
        <div className='DesktopOrder'>Order</div>
        <div className='MobileDriverOrder'>
            <section className='DriversHeader' style={{width:"100%", paddingInline:"2.5%", background:"rgba(125, 124, 124, 0.312)"}}>
               <div className='LogoPart'>
                  <img onClick={()=>{
                    nav("/Driverdashboard")
                  }} src={Logo} alt="" />
              </div>
              <div className='NavToDriverDashboard'>
                  <span onClick={()=>{
                    nav('/DriverDashboard')
                  }}>back</span>
              </div>
        </section>

        <section className='MainOrders'>
            <h1>New Orders Delivery</h1>
            <div onClick={()=>{
                nav("/order/:id")
            }} className='OrderSummaryDiv'>
                 <div className='TopSummary'>
                    <div style={{display:'flex', justifyContent:"space-between"}}>
                        <span style={{color:"blue", fontWeight:"bold"}}>Ref no: #43561027</span>
                        <span className='ViewMore'>View details ^</span>
                    </div>
                    <h4 className='OrderDate'>06:45PM, 20/08/22</h4>
                 </div>

                 <div className='OrderLine'></div>

                 <div className='BotSummary'>

                 </div>
            </div>
        </section>
        </div>
    </>
  )
}

export default Order