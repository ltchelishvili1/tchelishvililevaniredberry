import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Attributes.css'
import logo from '../../assets/LOGO-10 2.png'
const Attributes = () => {
    function handleClick(x) {
        if (document.body.offsetWidth + 16 > 829) {
            if (x == 1) {
                document.getElementById("try").style.opacity = "1"
                document.getElementById("hrr2").style.opacity = "0"
            } else if (x == 0) {
                document.getElementById("try").style.opacity = "0"
                document.getElementById("hrr2").style.opacity = "1"
            }
        }

    }
 

    return (
        <div>
            <div className='nav'>
                <div id='emply' className='empp mobdispempp'>
                    <Link className='attrtxt' onClick={() => handleClick(1)} style={{ textDecoration: "none", color: "black", cursor: "pointer" }} to='employeeinfo'> <p>თანამშრომლის ინფო</p></Link>
                    <hr
                        id='try'
                        style={
                            window.location.href.includes("employeeinfo") ? {
                                opacity: "1"
                            } : { opacity: "0" }
                        }
                    />
                   
                </div>
               

                <div className=' mobdisplapt' id='lapt'
                >
                    <Link className='attrtxt' onClick={() => handleClick(0)} style={{ textDecoration: "none", color: "black", cursor: "pointer" }} to='laptopinfo'><p  >ლეპტოპის მახასიათებლები</p></Link>
                    <hr
                        id='hrr2'
                        style={
                            window.location.href.includes("laptopinfo") ? {
                                opacity: "1"
                            } : { opacity: "0" }
                        }
                    />
                </div>
            </div>
            <Outlet />
            <img className='logoimage' src={logo} alt="logo" />
        </div>
    )
}

export default Attributes