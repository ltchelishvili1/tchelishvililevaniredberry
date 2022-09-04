import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import './EmployeeInfo.css'
const EmployeeInfo = (props) => {
  const navigate = useNavigate()
  const [EmpInfo, setEmpInfo] = useState(JSON.parse(localStorage.getItem("EmpInfo")) || {
    name: "",
    surname: "",
    team: {
      name: "",
      team_id: null
    },
    mail: "",
    number: "",
    position: {
      name: "",
      id: ""
    }

  })
  function numberValidation() {

    return EmpInfo.number.startsWith("+9955") && EmpInfo.number.length == 13;
  }

  function ValidateName(name) {

    if (name == null || name == "") {
      return false;
    }
    else if ((name.length < 2)) {
      return true + 'length'
    }
    else if (!/^[ქაზწსხედცრფვტგბყჰნუჯმიკოლპშჭჩღთძჟ]+$/g.test(name)) {
      return true + "language"
    } else {
      return false
    }
  }
  function validateAll() {
    if (EmpInfo.name == "") {
      document.getElementById("name").style.border = "1px solid red"
      document.getElementById("empinfoname").style.color = "red"
    } else {
      document.getElementById("name").style.border = "1px solid  #8AC0E2"
      document.getElementById("empinfoname").style.color = "black"
    }
    if (EmpInfo.surname == "") {
      document.getElementById("surname").style.border = "1px solid red"
      document.getElementById("empinfosurname").style.color = "red"
    } else {
      document.getElementById("surname").style.border = "1px solid  #8AC0E2"
      document.getElementById("empinfosurname").style.color = "black"
    }
    if (EmpInfo.mail == "") {
      document.getElementById("mail").style.border = "1px solid red"
      document.getElementById("empinfomail").style.color = "red"
    } else {
      document.getElementById("mail").style.border = "1px solid  #8AC0E2"
      document.getElementById("empinfomail").style.color = "black"
    }
    if (EmpInfo.number == "") {
      document.getElementById("number").style.border = "1px solid red"
      document.getElementById("empinfonumber").style.color = "red"
    } else {
      document.getElementById("number").style.border = "1px solid  #8AC0E2"
      document.getElementById("empinfonumber").style.color = "black"
    }
    if (EmpInfo.team.name == "") {
      document.getElementById("teamSelect").style.border = "1px solid red"
    } else {
      document.getElementById("teamSelect").style.border = "1px solid  #8AC0E2"
    }
  }
  function handleClick() {
    if (!EmpInfo.team.name == "") {
      document.getElementById("teamSelect").style.border = "1px solid  #8AC0E2"
      if (!ValidateName(EmpInfo.name)
        && !ValidateName(EmpInfo.surname)
        && numberValidation() && EmpInfo.mail.endsWith("@redberry.ge") &&
        EmpInfo.mail.replace(/\s/g, '').length > 14
        && EmpInfo.position.name !== null && EmpInfo.name !== "" && EmpInfo.surname !== "") {
        return true

      }
    }
  }
  useEffect(() => {
    localStorage.setItem('EmpInfo', JSON.stringify(EmpInfo));
    localStorage.setItem("validated", JSON.stringify(handleClick()))
  }, [EmpInfo]);

  return (

    <div className='empinfo'>


      <form className='container'>
        <div className='namesurname'>
          <div className='name'>
            <p id='empinfoname' style={ValidateName(EmpInfo.name) ? { color: "red", border: "red" } : null} >სახელი</p>
            {numberValidation()}
            <input id='name' style={ValidateName(EmpInfo.name) ? { border: "1px solid red" } : { border: "1px solid #8AC0E2" }} value={EmpInfo.name} type="text" onChange={(e) => {
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
            <p id='empinfosurname' style={ValidateName(EmpInfo.surname) ? { color: "red", border: "red" } : null}>გვარი</p>
            <input id='surname' style={ValidateName(EmpInfo.surname) ? { border: "1px solid red" } : { border: "1px solid #8AC0E2" }} value={EmpInfo.surname} type="text" onChange={(e) => {
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
            <select id="teamSelect" value={`{"name":"${EmpInfo.team.name}","id":"${EmpInfo.team.team_id}","posName":"sd"}`} onChange={(e) => {

              setEmpInfo({
                ...EmpInfo,
                team: {
                  name: JSON.parse(e.target.value).name,
                  team_id: JSON.parse(e.target.value).id
                },
                position: {
                  id: `${props.positions.filter((pos) => (
                    pos.team_id == JSON.parse(e.target.value).id
                  ))[0].id}`,
                  name: props.positions.filter((pos) => (
                    pos.team_id == JSON.parse(e.target.value).id
                  ))[0].name
                }
              })
            }}>

              <option value={`{"name":"","id":"null","posName":"sd"}`} selected disabled hidden>თიმი</option>
              {props.teams.map((team) => (
                <option style={{ width: "100%" }} value={`{"name":"${team.name}","id":"${team.id}","posName":"sd"}`} key={team.id}>{team.name}</option>
              ))}
            </select>
          </div>

          {

          }
          <div className='position'>
            <select id='slct' value={`{"name":"${EmpInfo.position.name}","id":"${EmpInfo.position.id}"}`} onChange={(e) => {
              setEmpInfo({
                ...EmpInfo,
                position: {
                  name: JSON.parse(e.target.value).name,
                  id: JSON.parse(e.target.value).id
                }
              })
            }}>

              <option value={`{"name":"","id":"null"}`} selected disabled hidden>პოზიცია</option>
              {props.positions.filter((position) =>
                (position.team_id == EmpInfo.team.team_id)
              ).map((filteredPosition) => (
                <option style={{ width: "100%" }} value={`{"name":"${filteredPosition.name}","id":"${filteredPosition.id}"}`} key={filteredPosition.id}>{filteredPosition.name}</option>
              ))}
            </select>

          </div>
        </div>
        <div className='mail'>
          <p id='empinfomail' style={
            EmpInfo.mail.endsWith("@redberry.ge") || EmpInfo.mail === "" ? { transform: "translateY(-100%)" } : { color: "red", transform: "traslateY(-100%)" }
          }>მეილი</p>
          <input id='mail'
            style={!EmpInfo.mail.endsWith("@redberry.com") && EmpInfo.mail.replace(/\s/g, '').length < 15 && EmpInfo.mail !== "" ? { border: "1px solid red" } : { border: "1px solid #8AC0E2" }} value={EmpInfo.mail} type="mail" onChange={(e) => {
              setEmpInfo({
                ...EmpInfo,
                mail: e.target.value
              })
            }} />
          <p style={
            EmpInfo.mail.endsWith("@redberry.ge") || EmpInfo.mail === "" ? { transform: "translateY(-100%)" } : { color: "red", transform: "traslateY(-100%)" }
          } className='pholder ph1'>{EmpInfo.mail.replace(/\s/g, '').length < 15 && EmpInfo.mail.endsWith("@redberry.ge") ? <span style={{ color: "red" }}>არასწორი იმეილის ზომა</span> : <span>უნდა მთავრდებოდეს @redberry.ge-ით</span>}</p>
        </div>
        <div className="transform" >
          <p id='empinfonumber' style={
            EmpInfo.number == null || EmpInfo.number == "" ? { transform: "translateY(-100%)" } :
              numberValidation() ? { transform: "translateY(-100%)" } : { color: "red", transform: "traslateY(-100%)" }
          } className='number'>ნომერი</p>
          <input id='number' style={
            EmpInfo.mail == { border: "1px solid #8AC0E2" } || EmpInfo.mail == "" ? { border: "1px solid #8AC0E2" } :
              numberValidation() ? { border: "1px solid #8AC0E2" } : { border: "1px solid red" }
          } className='ninput' value={EmpInfo.number} type="text" onChange={(e) => {
            setEmpInfo({
              ...EmpInfo,
              number: e.target.value
            })
          }} />
          <p style={
            EmpInfo.number == null || EmpInfo.number == "" ? { transform: "translateY(-100%)" } :
              numberValidation() ? { transform: "translateY(-100%)" } : { color: "red", transform: "traslateY(-100%)" }
          } className='pholder ph1'>უნდა აკმაყოფილებდეს ქართული მობ-ნომრის ფორმატს</p>
        </div>
        <div className='nextcont'>
          <input className='next' onClick={() => handleClick() ? navigate("/attributes/laptopinfo") : validateAll()} type="button" value="შემდეგი" />
        </div>
      </form>
    </div>
  )
}

export default EmployeeInfo