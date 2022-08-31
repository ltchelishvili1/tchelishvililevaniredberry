import React from 'react'
import './Laptoplist.css'
const Laptoplist = (props) => {
    return (
        <div className='laptoplist'>
            <p className='notelistname'>ჩანაწერების სია</p>
            {console.log(props.laptops)}
            <div className='containernotes'>
                <div className='notelist'>
                    {props.laptops.map((x) => (
                        <div className='laptopcont' key={x.laptop.id}>
                            {
                                console.log(x.laptop.image)
                            }
                            <img src={"https://pcfy.redberryinternship.ge/" + x.laptop.image} alt="img" />
                            <div className='rightcntent'>
                                <p className='username'>{x.user.name}{" "} {x.user.surname}</p>
                                <p className='laptopname'>{x.laptop.name}</p>
                                <p className='more'>მეტის ნახვა</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Laptoplist