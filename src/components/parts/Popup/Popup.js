import React from 'react'
import './Popup.css'
import succFram from '../../assets/succFrame.png'
import { Link, useNavigate } from 'react-router-dom'
function Popup(props) {
    const navigate = useNavigate()
    return (props.trigger) ? (
        <div className='popup'>
            
            <div className='popup-inner'>
                <div className='imgcont'>
                    <img src={succFram} alt="succFrame" />
                </div>
                <div >
                    <p className='added'>ჩანაწერი დამატებულია</p>
                    <div className='inputcont'>
                    <a  style={{textDecoration:"none",color:"fff",width:"100%"}}  href='/laptoplist'><p className='listmove'>სიაში გადაყვანა</p></a>

                    </div>
                    <a  style={{textDecoration:"none",width:"100%",color:"#62A1EB"}} className="mainp"  href='/laptoplist'>მთავარი</a>
                </div>
            </div>
        </div>) : "";
}

export default Popup