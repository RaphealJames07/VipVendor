import React, { useState } from 'react'
import Logo from "../../assets/Logo2.svg";
import { useNavigate } from 'react-router';
import ourAim from "../../assets/ourAim.jpg";

function GetOneOrder() {
    const nav = useNavigate()
    const [popUp, setPopUp] = useState(false)

  return (
    <>
        <div className='DesktopGetOneOrder'>GetOneOrder</div>
        <div className='MobileGetOneOrder'>
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

        <section className='OneOrderImg'>
            <img src={ourAim} alt="" />
            <div className='OrderImgCar'>
                <div style={{background:"white"}}></div>
                <div></div>
                <div></div>
            </div>
        </section>

        <section className='OrderInfo'>
            <div className='InfoSection'>
               <div className='TopSection'>
                  <span>Product</span>
                  <span>Status</span>
               </div>
               <div className='BotSection'>
                  <div className='FirstBot'>
                     <span>Xiaomi Mi Watch Waterproof</span>
                  </div>
                  <div className='SecBot'>
                     <span style={{color:"#3F51B5", fontWeight:"bold"}}>In transit</span>
                  </div>
               </div>
            </div>
            <div className='InfoSection'>
               <div className='TopSection'>
                  <span>Name</span>
                  <span>Price</span>
               </div>
               <div className='BotSection'>
                  <div className='FirstBot'>
                     <span>John Elizabeth</span>
                  </div>
                  <div className='SecBot'>
                     <span style={{color:"#3F51B5", fontWeight:"bold"}}>N94,000</span>
                  </div>
               </div>
            </div>
            <div className='InfoSection'>
               <div className='TopSection'>
                  <span>Addresss</span>
               </div>
               <div className='BotSection'>
                  <div className='FirstBot'  style={{width:'100%', textAlign:"start"}}>
                     <span style={{width:'100%'}}>12 Kokoyi Street Olodi Apapa Lagos</span>
                  </div>
                  {/* <div className='SecBot'>
                     <span style={{color:"#3F51B5", fontWeight:"bold"}}>In transit</span>
                  </div> */}
               </div>
            </div>
            <div className='InfoSection'>
               <div className='TopSection'>
                  <span>Category</span>
                  <span>Reference No</span>
               </div>
               <div className='BotSection'>
                  <div className='FirstBot'>
                     <span>Accessories</span>
                  </div>
                  <div className='SecBot'>
                     <span style={{color:"#3F51B5", fontWeight:"bold"}}>#22483628</span>
                  </div>
               </div>
            </div>
            <div className='InfoSection'>
               <div className='TopSection'>
                  <span>Phone</span>
                  <span>Email</span>
               </div>
               <div className='BotSection'>
                  <div className='FirstBot'>
                     <span>09088777655</span>
                  </div>
                  <div className='SecBot'>
                     <span style={{color:"#3F51B5", fontWeight:"bold"}}>123@gmail.com</span>
                  </div>
               </div>
            </div>
        </section>

        <section className='ConfirmOrder'>
            <input type="number" placeholder='Order Number' className='OrderInput' />
            <div className='OrderConfirm'>
                <button className='ConfirmBtn'>Confirm Delivery</button>
                <button className='FailedBtn' onClick={()=>{
                    setPopUp(!popUp)
                }}>Failed Delivery</button>
            </div>
        </section>

        </div>
        {
            popUp?
            <section className='FailedPopUp'>
            <div className='FailedPopUpDiv'>
                <div className='FailedHeader'>
                   <div style={{display:"flex", alignItems:"center", gap:"4px"}}>
                    <div style={{width:"35px", height:"35px", borderRadius:"50%", background:"orangered"}}></div>
                    <span className='FailedText'>Failed Pickup</span>
                   </div>
                   <h4>The Order delivery failed. Please select a reason as to why this happened</h4>
                </div>
                <div className='FailedBody'>
                    <textarea  className='FailedReason' id="" cols="30" rows="10" placeholder='Reasons'></textarea>
                    <input type="File" id='Image' style={{display:"none"}}/>
                    <label htmlFor="Image" className='ImageUploadLabel'></label>
                </div>
                <div className='FailedReasonBtn'>
                    <span onClick={()=>{
                    setPopUp(!popUp)
                }}>Cancel</span>
                    <button>Submit</button>
                </div>
            </div>
        </section>:null
        }
    </>
  )
}

export default GetOneOrder