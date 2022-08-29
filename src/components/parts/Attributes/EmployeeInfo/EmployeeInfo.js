import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import './EmployeeInfo.css'
const EmployeeInfo = (props) => {
  const navigate=useNavigate()
  const [EmpInfo, setEmpInfo] = useState(JSON.parse(localStorage.getItem("EmpInfo")) || {
    name: "",
    surname: "",
    team: {
      name: "",
      team_id: null
    },
    mail: "",
    number: "",
    position: ""

  })
  function numberValidation() {
    const num = EmpInfo.number.replace(/\s/g, '');
    return num.startsWith("+995")&&num.length==13;
  }

  function ValidateName(name) {
  {console.log(numberValidation())}
    if (name == null || name == "") {
      return false;
    }
    else if ((name.length < 2)) {
      return true + 'length'
    }
    else if (!/^[ქაზწსხედცრფვტგბყჰნუჯმიკოლპშჭჩღთჟ]+$/g.test(name)) {
      return true + "language"
    } else {
      return false
    }
  }
  function handleClick(){
    if(EmpInfo.team.name==""){
      document.getElementById("teamSelect").style.border = "1px solid red"
    }
    else{
      
    
    if(!ValidateName(EmpInfo.name)
    &&!ValidateName(EmpInfo.surname)
    &&numberValidation()&&EmpInfo.mail.endsWith("@redberry.ge")
    &&EmpInfo.position!==null){
    navigate("/attributes/laptopinfo")
    } 
  }
  }
  useEffect(() => {
    localStorage.setItem('EmpInfo', JSON.stringify(EmpInfo));
  }, [EmpInfo]);

  return (

    <div className='empinfo'>


      <form>
        <div className='namesurname'>
          <div className='name'>
            <p>სახელი</p>
              {numberValidation()}
            <input style={ValidateName(EmpInfo.name) ? { border: "1px solid red" } : { border: "1px solid #8AC0E2" }} value={EmpInfo.name} type="text" onChange={(e) => {
              setEmpInfo({
                ...EmpInfo,
                name: e.target.value
              });

            }} />

            <p style={ValidateName(EmpInfo.name) ? { color: "red", border: "red" } : null} className='pholder'>
              {
                (ValidateName(EmpInfo.name).toString().includes("length")) ? <span>მინიმუმ 2 სიმბოლო</span>
                  : (ValidateName(EmpInfo.name).toString().includes("language")) ? <span>გამოიყენე  ქართული ასოები</span>
                    : <span>მინიმუმ 2 სიმბოლო ქართული ასოებით</span>
              }

            </p>
          </div>
          <div className='surname'>
            <p>გვარი</p>
            <input value={EmpInfo.surname} type="text" onChange={(e) => {
              setEmpInfo({
                ...EmpInfo,
                surname: e.target.value
              })
            }} />
            <p style={ValidateName(EmpInfo.surname) ? { color: "red", border: "red" } : null} className='pholder'>
              {
                (ValidateName(EmpInfo.surname).toString().includes("length")) ? <span>მინიმუმ 2 სიმბოლო</span>
                  : (ValidateName(EmpInfo.surname).toString().includes("language")) ? <span>გამოიყენე  ქართული ასოები</span>
                    : <span>მინიმუმ 2 სიმბოლო ქართული ასოებით</span>
              }

            </p>
          </div>
        </div>
        <div className='selects'>
          <div className='team'>
            <select  id="teamSelect" value={`{"name":"${EmpInfo.team.name}","id":"${EmpInfo.team.team_id}"}`} onChange={(e) => {
              setEmpInfo({
                ...EmpInfo,
                team: {
                  name: JSON.parse(e.target.value).name,
                  team_id: JSON.parse(e.target.value).id
                }
              })
            }}>
              {console.log(`{"name":"${EmpInfo.team.name}","id":"${EmpInfo.team.team_id}"}`)}
               <option value={`{"name":"","id":"null"}`} selected disabled hidden>თიმი</option>
              {props.teams.map((team) => (
                <option style={{width:"100%"}} value={`{"name":"${team.name}","id":"${team.id}"}`} key={team.id}>{team.name}</option>
              ))}
            </select>
          </div>
          <div className='position'>
            <select value={EmpInfo.position} onChange={(e) => {
              setEmpInfo({
                ...EmpInfo,
                position: e.target.value
              })
            }}>
              <option value="none" selected disabled hidden>პოზიცია</option>
              {props.positions.filter((position) =>
                (position.team_id == EmpInfo.team.team_id)
              ).map((filteredPosition) => (
                <option value={filteredPosition.name} >{filteredPosition.name}</option>
              ))}
            </select>

          </div>
        </div>
        <div className='mail'>
          <p>მეილი</p>
          <input style={
            EmpInfo.mail == { border: "1px solid #8AC0E2"} || EmpInfo.mail == "" ? { border: "1px solid #8AC0E2"} :
              EmpInfo.mail.endsWith("@redberry.ge") ? { border: "1px solid #8AC0E2"} : { border: "1px solid red" }
          } value={EmpInfo.mail} type="mail" onChange={(e) => {
            setEmpInfo({
              ...EmpInfo,
              mail: e.target.value
            })
          }} />
          <p style={
            EmpInfo.mail == null || EmpInfo.mail == "" ? { transform: "translateY(-100%)" } :
              EmpInfo.mail.endsWith("@redberry.ge") ? { transform: "translateY(-100%)" } : { color: "red", transform: "traslateY(-100%)" }
          } className='pholder'>უნდა მთავრდებოდეს @redberry.ge-ით</p>
        </div>
        <div >
          <p className='number'>ნომერი</p>
          <input  style={
            EmpInfo.mail == { border: "1px solid #8AC0E2"} || EmpInfo.mail == "" ? { border: "1px solid #8AC0E2"} :
              numberValidation() ? { border: "1px solid #8AC0E2"} : { border: "1px solid red" }
          } className='ninput' value={EmpInfo.number} type="text" onChange={(e) => {
            setEmpInfo({
              ...EmpInfo,
              number: e.target.value
            })
          }} />
          <p style={
            EmpInfo.number == null || EmpInfo.number == "" ? { transform: "translateY(-100%)" } :
             numberValidation() ? { transform: "translateY(-100%)" } : { color: "red", transform: "traslateY(-100%)" }
          } className='pholder'>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</p>
        </div>
        <div className='nextcont'>
        <input className='next' onClick={()=>handleClick()} type="button" value="შემდეგი"/>
        </div>
      </form>
    </div>
  )
}

export default EmployeeInfo