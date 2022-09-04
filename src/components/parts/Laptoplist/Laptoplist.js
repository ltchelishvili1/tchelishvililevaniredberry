import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Laptoplist.css'
import back from '../../assets/back.png'
const Laptoplist = (props) => {
    const navigate = useNavigate()
    return (
        <div>
            <img src={back} alt="" style={{ scale: "2", cursor: "pointer", transform: "translate(600%,300%)" }} onClick={() => navigate(-1)} />
            <div className='laptoplist'>
                <p className='notelistname'>ჩანაწერების სია</p>
                <div className='containernotes'>
                    <div className='notelist'>
                        {props.laptops.map((x) => (
                            <div className='laptopcont' key={x.laptop.id}>

                                <img src={"https://pcfy.redberryinternship.ge/" + x.laptop.image} alt="img" />
                                <div className='rightcntent'>
                                    <p className='username'>{x.user.name}{" "} {x.user.surname}</p>
                                    <p className='laptopname'>{x.laptop.name}</p>
                                    <Link style={{ textDecoration: "none" }} to={`laptopid=${x.laptop.id}`}>  <p className='more'>მეტის ნახვა</p></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Laptoplist