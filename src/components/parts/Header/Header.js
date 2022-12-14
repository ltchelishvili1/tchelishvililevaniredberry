import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import frame from '../../assets/Frame.png'
import logo from '../../assets/LOGO-02 1.png'
import './Header.css'
import group from '../../assets/Group.png'
const Header = () => {
    const navigate=useNavigate()
    return (
        <div className='main' style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "4rem" }}>
            <img src={logo} className="main-page-logo" alt="logo" />
            <img src={frame} className="main-page-frame" alt="frame" />
            <img src={group} className="mobpict" alt="frame" />
            <form>
                <div className='btnup'>
                    <a  href="/attributes/employeeinfo">
                        <input type="button" value="ჩანაწერის დამატება" />
                    </a>

                </div>
                <div className='btndown'>
                    <input type="button" value="ჩანაწერების სია" onClick={()=>navigate('/laptoplist')} />
                </div>
            </form>
        </div>
    )
}

export default Header