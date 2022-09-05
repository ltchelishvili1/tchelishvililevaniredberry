import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './Attributes.css'
import logo from '../../assets/LOGO-10 2.png'
import back from '../../assets/back.png'
const Attributes = () => {
    const navigate = useNavigate()
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
        <div className='all'>

            <img src={back} alt="" className='backarrow' style={{ scale: "2", cursor: "pointer", transform: "translate(600%,300%)" }} onClick={() => 
               {window.location.reload(); 
                navigate(-1)}} />
            <div className='nav'>
                <div id='emply' className='empp mobdispempp'>
                    <div >
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
                    <p className='dsp1' style={{ fontSize: "14px", opacity: "0.5", transform: "translateX(30%)" }}>1/2</p>
                </div>



                <div className=' mobdisplapt' id='lapt'
                >
                    <div>

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
                    <p className='dsp2' style={{ fontSize: "14px", opacity: "0.5", transform: "translateX(35%)" }}>2/2</p>
                </div>
            </div>
            <Outlet />

            <img className='logoimage' src={logo} alt="logo" />


        </div>
    )
}

export default Attributes