import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Attributes.css'
const Attributes = () => {
    return (
        <div>
            <div className='nav'>
           <Link  className='attrtxt' style={{textDecoration:"none",color:"black",cursor:"pointer"}} to='employeeinfo'> <p>თანამშრომლის ინფო</p></Link> 
            <Link className='attrtxt' style={{textDecoration:"none",color:"black",cursor:"pointer"}}  to='laptopinfo'><p  >ლეპტოპის მახასიათებლები</p></Link>
            </div>
            <Outlet/>

        </div>
    )
}

export default Attributes