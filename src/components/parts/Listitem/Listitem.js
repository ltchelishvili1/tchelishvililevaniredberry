import React, { useEffect, useState } from 'react'
import './Listitem.css'
import Item from './Item'
const Listitem = (props) => {    
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
            <p className='lapinfo' >ლეპტოპის ინფო</p>
            <Item positions={props.positions} brands={props.brands} teams={props.teams} data={data.data}/>
        </div>;
    } else {
        return null;
    }

}

export default Listitem