import React from 'react'
import './Popup.css'
import succFram from '../../assets/succFrame.png'
import { useNavigate } from 'react-router-dom'
function Popup(props) {
    const navigate = useNavigate()
    return (props.trigger) ? (
        <div className='popup'>
            <div className='popup-inner'>
                <div className='imgcont'>
                    <img src={succFram} alt="succFrame" />
                </div>
                <div className='poppupbot'>
                    <p className='added'>ჩანაწერი დამატებულია</p>
                    <div className='inputcont'>
                        <input type="button" value="სიაში გადაყვანა" onClick={() => navigate("/laptoplist")} />

                    </div>
                    <p onClick={() => navigate("/")} className='poppupmain'>მთავარი</p>
                </div>
            </div>
        </div>) : "";
}

export default Popup