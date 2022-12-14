import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './Attributes.css'
import logo from '../../assets/LOGO-10 2.png'
import back from '../../assets/back.png'
import { useLocation } from "react-router-dom";
const Attributes = () => {
    const [count, setCount] = useState(0)
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        window.screen.width <= 830 ? setIsMobile(true) : setIsMobile(false);
    }, [window.screen.width]);

    function detectWindowSize() {
        window.innerWidth <= 760 ? setIsMobile(true) : setIsMobile(false);
    }

    window.onresize = detectWindowSize;

    useEffect(() => {
        if (isMobile) {

            if (window.location.href.includes("employeeinfo")) {
                if (document.getElementById("lapt")) {
                    document.getElementById("lapt").style.display = "none"
                    document.getElementById("try").style.display = "none"
                }
            } else if (window.location.href.includes("laptopinfo")) {
                if (document.getElementById("emply")) {
                    document.getElementById("emply").style.display = "none"
                    document.getElementById("hrr2").style.display = "none"
                }

            }
        } else {
            if (window.location.href.includes("employeeinfo")) {
                if (document.getElementById("lapt")) {
                    document.getElementById("lapt").style.display = "block"
                    document.getElementById("try").style.display = "block"
                }
            } else if (window.location.href.includes("laptopinfo")) {
                if (document.getElementById("emply")) {
                    document.getElementById("emply").style.display = "block"
                    document.getElementById("hrr2").style.display = "block"
                }

            }
        }
    }, [isMobile,count])





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

          <a href={
            window.location.href.includes("employeeinfo") ? "/" : "/attributes/employeeinfo"
          }>  <img src={back} alt="" className='backarrow' style={{ scale: "2", cursor: "pointer", transform: "translate(600%,300%)" }} /></a>
            <div className='nav'>
                <div id='emply' className='empp mobdispempp'>
                    <div >
                        <Link className='attrtxt' onClick={() => handleClick(1)} style={{ textDecoration: "none", color: "black", cursor: "pointer" }} to='employeeinfo'> <p>???????????????????????????????????? ????????????</p></Link>
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

                        <Link className='attrtxt' onClick={() => handleClick(0)} style={{ textDecoration: "none", color: "black", cursor: "pointer" }} to='laptopinfo'><p  >???????????????????????? ??????????????????????????????????????????</p></Link>
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