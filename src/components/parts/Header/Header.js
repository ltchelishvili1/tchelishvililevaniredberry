import React from 'react'
import { Link } from 'react-router-dom'
import frame from '../../assets/Frame.png'
import logo from '../../assets/LOGO-02 1.png'
import './Header.css'
const Header = () => {
    return (
        <div className='main' style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "4rem" }}>
            <img src={logo} className="main-page-logo" alt="logo" />
            <img src={frame} className="main-page-frame" alt="frame" />
            <form>
                <div className='btnup'>
                    <Link  to="/attributes/employeeinfo">
                        <input type="button" value="ჩანაწერის დამატება" />
                    </Link>

                </div>
                <div className='btndown'>
                    <input type="button" value="ჩანაწერების სია" />
                </div>
            </form>
        </div>
    )
}

export default Header