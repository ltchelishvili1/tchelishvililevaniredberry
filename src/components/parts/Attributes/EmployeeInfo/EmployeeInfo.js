import React, { useEffect, useState } from 'react'
import './EmployeeInfo.css'
const EmployeeInfo = (props) => {
  const [EmpInfo, setEmpInfo] = useState( JSON.parse(localStorage.getItem("EmpInfo")) || {
    name: "",
    surname: "",
    team: {
      name: "",
      team_id : 0
    },
    mail: "",
    number: ""

  })

 
  useEffect(() => {
    localStorage.setItem('EmpInfo', JSON.stringify(EmpInfo));
  }, [EmpInfo]);

  return (
    
    <div className='empinfo'>
      {console.log(EmpInfo)}
      <form>
        <div className='namesurname'>
          <div className='name'>
            <p>სახელი</p>
            <input value={EmpInfo.name} type="text" onChange={(e) =>{
               setEmpInfo({
                ...EmpInfo,
                name: e.target.value
              })
            }} />
            <p className='pholder'>მინიმუმ 2 სიმბოლო ქართული ასოებით</p>
          </div>
          <div className='surname'>
            <p>გვარი</p>
            <input value={EmpInfo.surname} type="text"  onChange={(e) =>{
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
            <select value={`{"name":"${EmpInfo.team.name}","id":"${EmpInfo.team.team_id}"}`}  id='mySelect' onChange={(e) =>{
                  setEmpInfo({
                    ...EmpInfo,
                    team:{
                        name: JSON.parse(e.target.value).name,
                        team_id: JSON.parse(e.target.value).id
                    }
                  })
               }}>
              {props.teams.map((team) => (
                <option  value={`{"name":"${team.name}","id":"${team.id}"}`}  key={team.id}>{team.name}</option>
              ))}
            </select>
          </div>
          <div className='position'>
            <select value={EmpInfo.position}  onChange={(e) =>{
               setEmpInfo({
                ...EmpInfo,
                position: e.target.value
              })
            }}>
            <option value="none" selected disabled hidden>პოზიცია</option>
                {props.positions.filter((position)=>
                (  position.team_id==EmpInfo.team.team_id)
                ).map((filteredPosition)=>(
                  <option value={filteredPosition.name} >{filteredPosition.name}</option>
                ))}
            </select>

          </div>
        </div>
        <div className='mail'>
          <p>მეილი</p>
          <input value={EmpInfo.mail} type="mail"  onChange={(e) =>{
               setEmpInfo({
                ...EmpInfo,
                mail: e.target.value
              })
            }}/>
        </div>
        <div className='number'>
          <p>ნომერი</p>
          <input value={EmpInfo.number} type="text" onChange={(e) =>{
               setEmpInfo({
                ...EmpInfo,
                number: e.target.value
              })
            }} />
        </div>

      </form>
    </div>
  )
}

export default EmployeeInfo