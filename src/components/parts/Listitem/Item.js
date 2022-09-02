import React from 'react'
import './Item.css'
const Item = (props) => {
    return (
        <div className='item'>
            {console.log(props)}
            <div className='itemtop'>
                <div className='contt'>
                    <div className='itemtopleft'>
                        <img src={"https://pcfy.redberryinternship.ge/" + props.data.laptop.image} alt="img" />
                    </div>
                    <div className='itemtopright'>
                        <p>სახელი: <span>{props.data.user.name}{" "} {props.data.user.surname}</span></p>
                        <p>თიმი: <span>{
                            props.teams.filter((team) => (
                                team.id === props.data.user.team_id
                            ))[0].name
                        }</span></p>
                        <p>პოზიცია: <span>{
                            props.positions.filter((team) => (
                                team.team_id === props.data.user.team_id
                            ))[0].name
                        }</span></p>
                        <p>მეილი: <span>{props.data.user.email}</span></p>
                        <p>ტელ. ნომერი: <span>{props.data.user.phone_number}</span></p>
                    </div>
                </div>
                <hr
                    style={{
                        color: "#C7C7C7",
                        backgroundColor: "#C7C7C7",
                        height: .5,
                        border: "none"
                    }}
                />
            </div>
            <div className='contt'>
                <div className='itemtopleft'>
                    <p>ლეპტოპის სახელი: <span>{props.data.laptop.name}</span> </p>
                    <p>ლეპტოპის ბრენდი: <span>{
                        props.brands.filter((brand) => (
                            brand.id === props.data.laptop.brand_id
                        ))[0].name
                    }</span></p>
                    <p>RAM: <span>{props.data.laptop.ram}</span></p>
                    <p>მეხსიერების ტიპი: {props.data.laptop.hard_drive_type}</p>
                </div>
                <div className='itemtopright'>
                    <p>CPU: <span> {props.data.laptop.cpu.name}</span></p>
                    <p>CPU-ს ბირთვი: <span>{props.data.laptop.cpu.cores}</span></p>
                    <p>CPU-ს ნაკადი: <span>{props.data.laptop.cpu.threads}</span></p>
                </div>
                
            </div>
            
            <div className='itemmid'>

            </div>
            <div className='itembottom'>

            </div>
        </div>
    )
}

export default Item