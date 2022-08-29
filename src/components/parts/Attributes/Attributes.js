import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Attributes.css'
import logo from '../../assets/LOGO-10 2.png'
const Attributes = () => {
    return (
        <div>
            <div className='nav'>
           <Link  className='attrtxt' style={{textDecoration:"none",color:"black",cursor:"pointer"}} to='employeeinfo'> <p>თანამშრომლის ინფო</p></Link> 
            <Link className='attrtxt' style={{textDecoration:"none",color:"black",cursor:"pointer"}}  to='laptopinfo'><p  >ლეპტოპის მახასიათებლები</p></Link>
            </div>
            <Outlet/>
            <img className='logoimage' src={logo} alt="logo"/>
        </div>
    )
}

export default Attributes