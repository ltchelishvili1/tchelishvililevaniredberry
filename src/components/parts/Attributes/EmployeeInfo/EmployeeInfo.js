import React, { useState } from 'react'
import './EmployeeInfo.css'
const EmployeeInfo = (props) => {
  const [EmpInfo, setEmpInfo] = useState({
    name: "",
    surname: "",
    team: "",
    position: {
      name: "",
      id : 0
    },
    mail: "",
    number: ""

  })

  return (
    <div className='empinfo'>
      {console.log(EmpInfo)}
      <form>
        <div className='namesurname'>
          <div className='name'>
            <p>სახელი</p>
            <input type="text" onChange={(e) =>{
               setEmpInfo({
                ...EmpInfo,
                name: e.target.value
              })
            }} />
            <p className='pholder'>მინიმუმ 2 სიმბოლო ქართული ასოებით</p>
          </div>
          <div className='surname'>
            <p>გვარი</p>
            <input type="text"  onChange={(e) =>{
               setEmpInfo({
                ...EmpInfo,
                surname: e.target.value
              })
            }} />
            <p className='pholder'>მინიმუმ 2 სიმბოლო ქართული ასოებით</p>
          </div>
        </div>
        <div className='selects'>
          <div className='team'>
            <select  onChange={(e) =>{
                  setEmpInfo({
                    ...EmpInfo,
                    position:{
                        name: JSON.parse(e.target.value).name,
                        id: JSON.parse(e.target.value).id
                    }
                  })
               }}>
               <option value="none" selected disabled hidden>თიმი</option>
              {props.teams.map((team) => (
                <option value={`{"name":"${team.name}","id":"${team.id}"}`} key={team.id}>{team.name}</option>
              ))}
            </select>
          </div>
          <div className='position'>
            <select>
            <option value="none" selected disabled hidden>პოზიცია</option>
                {props.positions.filter((position)=>
                (  position.team_id==EmpInfo.position.id)
                ).map((filteredPosition)=>(
                  <option>{filteredPosition.name}</option>
                ))}
                

            </select>
          </div>
        </div>
        <div className='mail'>
          <p>მეილი</p>
          <input type="mail" value="" />
        </div>
        <div className='number'>
          <p>ნომერი</p>
          <input type="text" value="" />
        </div>

      </form>
    </div>
  )
}

export default EmployeeInfo