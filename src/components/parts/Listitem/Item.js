import React from 'react'
import './Item.css'
const Item = (props) => {
    let date = ''
    if (props.data.laptop.purchase_date) {
        let temp = props.data.laptop.purchase_date
        let findex = temp.indexOf("-")
        let sindex = temp.indexOf('-', findex + 1)
        date = `${temp.slice(sindex + 1, temp.length)} / ${temp.slice(findex + 1, sindex)} / ${temp.slice(0, temp.indexOf("-"))}`

    }

    return (
        <div className='item'>
            <div className='itemtop'>
                <div className='contt contt2'>
                    <div className='itemtopleft'>
                        <img src={"https://pcfy.redberryinternship.ge/" + props.data.laptop.image} alt="img" />
                    </div>
                    <div className='itemtopright' style={{ display: "flex" }}>
                        <div  >
                            <p>სახელი:</p>
                            <p>თიმი: </p>
                            <p>პოზიცია: </p>
                            <p>მეილი:</p>
                            <p>ტელ. ნომერი:</p>
                        </div>
                        <div className='fcontent' style={{ paddingLeft: "4rem" }}>
                            <p> <span>{props.data.user.name}{" "} {props.data.user.surname}</span></p>
                            <p><span>{
                                props.teams.filter((team) => (
                                    team.id === props.data.user.team_id
                                ))[0].name
                            }</span></p>
                            <p><span>{
                                props.positions.filter((team) => (
                                    team.team_id === props.data.user.team_id
                                ))[0].name
                            }</span></p>
                            <p> <span>{props.data.user.email}</span></p>
                            <p><span>{props.data.user.phone_number}</span></p>
                        </div>
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

            <div className='itemtop'>
                <div className='contt contt2'>
                    <div className='itemtopleft' style={{ display: "flex" }}>
                        <div >
                            <p>ლეპტოპის სახელი:  </p>
                            <p>ლეპტოპის ბრენდი:</p>
                            <p>RAM: </p>
                            <p>მეხსიერების ტიპი:</p>
                        </div>
                        <div className='lptpadd' style={{ paddingLeft: "4rem" }}>
                            <p><span>{props.data.laptop.name}</span> </p>
                            <p><span>{
                                props.brands.filter((brand) => (
                                    brand.id === props.data.laptop.brand_id
                                ))[0].name
                            }</span></p>
                            <p> <span>{props.data.laptop.ram}</span></p>
                            <p><span>{props.data.laptop.hard_drive_type}</span></p>
                        </div>
                    </div>
                    <div className='itemtopright' style={{ display: "flex" }}>
                        <div>
                            <p>CPU:</p>
                            <p>CPU-ს ბირთვი:</p>
                            <p>CPU-ს ნაკადი: </p>

                        </div>
                        <div className='cpustf' style={{ paddingLeft: "4rem" }}>
                            <p><span> {props.data.laptop.cpu.name}</span></p>
                            <p><span>{props.data.laptop.cpu.cores}</span></p>
                            <p><span>{props.data.laptop.cpu.threads}</span></p>

                        </div>
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
            <div className='itemtop'>
                <div className='contt contt2'>
                    <div className='itemtopleft' style={{ display: "flex" }}>
                        <div>
                            <p><span className='lapc'>ლეპტოპის</span> მდგომარეობა:</p>
                            <p>ლეპტოპის ფასი:</p>
                        </div>
                        <div className='contstf' style={{paddingLeft:"1rem"}}>
                            <p>{props.data.laptop.state == "used" ? <span> მეორადი </span> : <span> ახალი</span>} </p>
                            <p style={{opacity:"0.5"}}> {props.data.laptop.price}</p>
                        </div>
                        
                    </div>
                    <div className='itemtopright' style={{display:"flex"}}>
                        {props.data.laptop.purchase_date ? <p>შეძენის რიცხვი: </p> : null}
                        {props.data.laptop.purchase_date ? <p style={{paddingLeft:"3.1rem"}}><span>{date}</span> </p> : null}
                    </div>
                   
                </div>
            </div>


        </div>
    )
}

export default Item