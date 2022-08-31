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
                        <div key={x.laptop.id}>
                            {
                                console.log(x.laptop.image)
                            }
                            <img src={"https://pcfy.redberryinternship.ge/"+ x.laptop.image} alt="img" />
                            <p>{x.user.name}{" "} {x.user.surname}</p>
                            <p>{x.laptop.name}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Laptoplist