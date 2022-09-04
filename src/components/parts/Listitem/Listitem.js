import React, { useEffect, useState } from 'react'
import './Listitem.css'
import Item from './Item'
import back from '../../assets/back.png'
import { useNavigate } from 'react-router-dom'
const Listitem = (props) => {    
    const navigate =useNavigate()
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://pcfy.redberryinternship.ge/api/laptop/${props.id}?token=008eb969a19e7990d2de16d66627150d`);
            const newData = await response.json();
            setData(newData);
        };
        fetchData();
    }, [props.id]);

    if (data) {
        return <div className='item123'>
            <img src={back} alt="" style={{scale:"2",cursor:"pointer",transform:"translate(600%,300%)"}} onClick={()=> navigate(-1)} />
        
            <p className='lapinfo' >ლეპტოპის ინფო</p>
            <Item positions={props.positions} brands={props.brands} teams={props.teams} data={data.data}/>
        </div>;
    } else {
        return null;
    }

}

export default Listitem