import React, { useEffect, useState } from 'react'

const Listitem = (props) => {
    const [laptop,setLaptop] = useState([])
    useEffect(() => {
        fetch(`https://pcfy.redberryinternship.ge/api/laptop/${props.id}?token=${props.TOKEN}`)
          .then((response) => response.json())
          .then((data) => console.log(data.data));
    
    
      }, [])
  return (
    <div>{props.id}</div>
  )
}

export default Listitem