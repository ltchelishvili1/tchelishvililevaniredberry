
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './LaptopInfo.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import lari from '../../../assets/Vector.png'
import error from '../../../assets/error.png'
import Popup from '../../Popup/Popup';
const LaptopInfo = (props) => {
  const [error,setError]= useState(false)
  const [trigger, setTrigger] = useState(false)
  const [result, setResult] = useState(null)
  const [empinfo, setEmpInfo] = useState(JSON.parse(localStorage.getItem("EmpInfo")) || {})
  const [laptopInfo, setlaptopInfo] = useState(JSON.parse(localStorage.getItem("LaptInfo")) || {
    laptopnName: '',
    laptopBrand: {
      name: "",
      id: ""
    },
    CPU: '',
    CPUcore: '',
    CPUgen: '',
    ram: '',
    memoryType: '',
    purchaseDate: '',
    laptopPrice: '',
    laptopCond: '',
    img: '',
    check: true

  })

  let toDay = laptopInfo.purchaseDate;
  if (laptopInfo.purchaseDate == "" || laptopInfo.purchaseDate == null) {
    toDay = new Date().toISOString().substring(0, 10);
  }

  function handleFile(e) {
    setResult(e.target.files[0])
    setlaptopInfo({
      ...laptopInfo,
      img: URL.createObjectURL(e.target.files[0])
    });

  }



  function handleSubmit() {
    let attsCheck = 0;
    if (laptopInfo.img == "" || laptopInfo.img == null || laptopInfo.img == undefined || result==''||result==null||result==undefined) {
      document.getElementById("image").style.border = "2px dashed red"
      document.getElementById("imgname").style.color = "red"
      document.getElementById("imgname1").style.color = "red"
      document.getElementById("errorimg").style.display = "block"
      setlaptopInfo({
        ...laptopInfo,
        check: false
      })
    } else {
      attsCheck++
      document.getElementById("image").style.border = "2px dashed #62A1EB"
      document.getElementById("imgname").style.color = "#62A1EB"
      document.getElementById("imgname1").style.color = "#62A1EB"
      document.getElementById("errorimg").style.display = "none"
    }
    if (laptopInfo.laptopnName == "") {
      document.getElementById("laptopname").style.border = "1px solid red"
    } else {
      attsCheck++
      document.getElementById("laptopname").style.border = "1px solid #62A1EB"
    }
    if (laptopInfo.laptopBrand.name == "ლეპტოპის ბრენდი" || laptopInfo.laptopBrand.name == "") {
      document.getElementById("laptopbrand").style.border = "1px solid red"
    } else {
      attsCheck++
      document.getElementById("laptopbrand").style.border = "1px solid #62A1EB"
    }
    if (laptopInfo.CPU == "CPU" || laptopInfo.CPU == "") {
      document.getElementById("laptopcpu").style.border = "1px solid red"
    } else {
      attsCheck++
      document.getElementById("laptopcpu").style.border = "1px solid #62A1EB"
    }
    if (laptopInfo.CPUcore == "") {
      document.getElementById("cpucore").style.border = "1px solid red"
    } else {
      attsCheck++
      document.getElementById("cpucore").style.border = "1px solid #62A1EB"
    }
    if (laptopInfo.CPUgen == "") {
      document.getElementById("cpugen").style.border = "1px solid red"
    } else {
      attsCheck++
      document.getElementById("cpugen").style.border = "1px solid #62A1EB"
    }
    if (laptopInfo.ram == "") {
      document.getElementById("ram").style.border = "1px solid red"
    } else {
      attsCheck++
      document.getElementById("ram").style.border = "1px solid #62A1EB"
    }
    if (laptopInfo.memoryType == "") {
      document.getElementById("memorytype").style.border = "1px solid red"
    } else {
      attsCheck++
      document.getElementById("memorytype").style.border = "none"
    }
    if (laptopInfo.laptopPrice == "") {
      document.getElementById("laptopprice").style.border = "none"
    } else {
      attsCheck++
      document.getElementById("laptopprice").style.border = "1px solid #62A1EB"
    }
    if (laptopInfo.laptopCond == "") {
      document.getElementById("laptopcond").style.border = "1px solid red"
    } else {
      attsCheck++
      document.getElementById("laptopcond").style.border = "none"
    }
    const properties = Object.getOwnPropertyNames(laptopInfo)
    let count = 0;
    for (let i = 0; i < properties.length; i++) {
      if (!JSON.stringify(laptopInfo).includes(`"${properties[i]}"` + `:""`)) {
        count++
      }
    }


    if (localStorage.getItem("validated") == "true" && count >= properties.length - 1 && attsCheck == properties.length - 2) {
      var body = {

        name: empinfo.name,
        surname: empinfo.surname,
        team_id: JSON.parse(empinfo.team.team_id),
        position_id: JSON.parse(empinfo.position.id),
        phone_number: empinfo.number,
        email: empinfo.mail,
        token: "008eb969a19e7990d2de16d66627150d",
        laptop_name: laptopInfo.laptopnName.toUpperCase(),
        laptop_image: result,
        laptop_brand_id: JSON.parse(laptopInfo.laptopBrand.id),
        laptop_cpu: laptopInfo.CPU,
        laptop_cpu_cores: laptopInfo.CPUcore,
        laptop_cpu_threads: laptopInfo.CPUgen,
        laptop_ram: laptopInfo.ram,
        laptop_hard_drive_type: laptopInfo.memoryType.toUpperCase(),
        laptop_state: laptopInfo.laptopCond,
        laptop_purchase_date: laptopInfo.purchaseDate ? laptopInfo.purchaseDate : "",
        laptop_price: JSON.parse(laptopInfo.laptopPrice)
      }
  /*    
      axios
           .post("https://pcfy.redberryinternship.ge/api/laptop/create", body, {
             headers: {
               "Content-Type": "multipart/form-data",
             },
           })
           .then((res) => {
             console.log(res);
           })
           .catch((err) => {
             console.log(err)
           });
*/
        setTrigger(true)
        setError(false)
    }else{
      setError(true)
    }

  }
  useEffect(() => {
    localStorage.setItem('LaptInfo', JSON.stringify(laptopInfo));
  }, [laptopInfo]);
  return (
    <div className=' laptopinfo'>

      <div className='container'>
        <div className='top'>
          <div id='image' className='uploadimage'>
            {result && <img className='uploadedimage' alt='YOUR SELECTED PHOTO' src={laptopInfo.img} />}
            <div className='contents'>
              <img id='errorimg' src={error} style={{ display: "none" }} alt="" />
              <p id='imgname'>ჩააგდე ან ატვირთე</p>
              <p id='imgname1' style={{ transform: "translateY(-70%)", paddingBottom: "1rem" }}>ლეპტოპის ფოტო</p>



              <input type="file" id='file' style={{ display: "none" }} name="file" onChange={(e) => handleFile(e)} multiple />
              <label className='labelbtn' for="file">ატვირთე</label>


            </div>
          </div>
          <div className='laptopnameandbrand'>
            <div className='laptopname'>
              <p className='lnamep'>ლეპტოპის სახელი</p>
              <input id='laptopname' style={/^[a-zA-z0-9,!@#$%^&*()_+=\s]+$/g.test(laptopInfo.laptopnName) || laptopInfo.laptopnName == "" ? { border: "1px solid #8AC0E2" } : { border: "1px solid red" }} value={laptopInfo.laptopnName} onChange={(e) => {
                setlaptopInfo({
                  ...laptopInfo,
                  laptopnName: e.target.value
                })
              }} type="text" />
              <p className='holder' >
                <span style={/^[a-zA-z0-9,!@#$%^&*()_+=\s]+$/g.test(laptopInfo.laptopnName) || laptopInfo.laptopnName == "" ? null : { color: "red" }}>ლათინური ასოები, ციფრები, !@#$%^&*()_+= </span>
              </p>
            </div>
            <div className='laptopbrand'>
              <select id='laptopbrand' value={`{"name":"${laptopInfo.laptopBrand.name}","id":"${laptopInfo.laptopBrand.id}"}`} style={{ height: "35px", transform: "translateY(30%)", fontWeight: "600" }} onChange={(e) => {
                setlaptopInfo({
                  ...laptopInfo,
                  laptopBrand: {
                    name: JSON.parse(e.target.value).name,
                    id: JSON.parse(e.target.value).id
                  }
                })
              }} className='lbrandselect'>
                <option >ლეპტოპის ბრენდი</option>
                {
                  props.brands.map((brand) => (
                    <option value={`{"name":"${brand.name}","id":"${brand.id}"}`} key={brand.id}>{brand.name}</option>
                  ))
                }
              </select>

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
        <div className='mid-part'>
          <div className='mid-top'>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingRight: "2rem", float: "left" }} className='laptopbrand'>
              <select id='laptopcpu' value={laptopInfo.CPU} style={{ height: "35px", fontWeight: "600", transform: "translateY(40%)" }} className='lbrandselect' onChange={(e) => {
                setlaptopInfo({
                  ...laptopInfo,
                  CPU: e.target.value
                })
              }} >
                <option >CPU</option>
                {
                  props.cpus.map((cpu) => (
                    <option key={cpu.id}>{cpu.name}</option>
                  ))
                }
              </select>
            </div>
            <div className='laptopname'>
              <p className='lnamep'>CPU-ს ბირთვი</p>
              <input id='cpucore' value={laptopInfo.CPUcore} style={{ border: "1px solid #8AC0E2" }} type="number" onChange={(e) => {
                setlaptopInfo({
                  ...laptopInfo,
                  CPUcore: e.target.value
                })
              }} />
              <p className='holder'>
                <span>მხოლოდ ციფრები </span>
              </p>
            </div>

            <div className='laptopname'>
              <p className='lnamep'>CPU-ს ნაკადი</p>
              <input id='cpugen' value={laptopInfo.CPUgen} style={{ border: "1px solid #8AC0E2" }} type="number" onChange={(e) => {
                setlaptopInfo({
                  ...laptopInfo,
                  CPUgen: e.target.value
                })
              }} />
              <p className='holder'>
                <span>მხოლოდ ციფრები </span>
              </p>
            </div>

          </div>
          <div className='mid-mid'>
            <div className='laptopname' style={{ width: "50%" }}>
              <p className='lnamep'>ლეპტოპის RAM(GB)</p>
              <input id='ram' value={laptopInfo.ram} style={{ border: "1px solid #8AC0E2", width: "85%" }} type="number" onChange={(e) => {
                setlaptopInfo({
                  ...laptopInfo,
                  ram: e.target.value
                })
              }} />
              <p className='holder'>
                <span>მხოლოდ ციფრები </span>
              </p>
            </div>
            <div id='memorytype' style={{ paddingLeft: ".5rem" }} className='mid-bot-right'>
              <p className='lnamep'>მეხსიერების ტიპი</p>
              <div style={{ display: "flex" }} className='sddhdd'>
                <div style={{ transform: "translateX(-12%)" }} className='ssd' onChange={(e) => {
                  setlaptopInfo({
                    ...laptopInfo,
                    memoryType: e.target.value
                  })
                }} >
                  <input checked={laptopInfo.memoryType == "ssd" ? "checked" : null} type="radio" id="ssd" name="ssdhdd" value="ssd" />
                  <label for="ssd" style={{ paddingLeft: ".7rem" }} >SSD</label>
                </div>
                <div style={{ paddingLeft: "2rem" }} className='hdd' onChange={(e) => {
                  setlaptopInfo({
                    ...laptopInfo,
                    memoryType: e.target.value
                  })
                }} >
                  <input checked={laptopInfo.memoryType == "hdd" ? "checked" : null} type="radio" id="hdd" name="ssdhdd" value="hdd" />
                  <label for="hdd" style={{ paddingLeft: ".7rem" }} >HDD</label>
                </div>
              </div>
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
        <div className='bot-part'>
          <div className='bot-top'>
            <div className='bot-top-top'>
              <div className='laptopname' style={{ width: "50%" }}>
                <p className='lnamep'>შეძენის რივცხვი(არჩევითი)</p>
                <input id="date" style={{ border: "1px solid #8AC0E2", width: "85%", paddingBottom: ".2rem" }} defaultValue={toDay} type="date" onChange={(e) => {
                  setlaptopInfo({
                    ...laptopInfo,
                    purchaseDate: e.target.value
                  })
                }} />


              </div>
              <div className='laptopname' style={{ width: "50%" }}>
                <p className='lnamep'>ლეპტოპის ფასი</p>
                <input id='laptopprice' value={laptopInfo.laptopPrice} style={{ border: "1px solid #8AC0E2", width: "85%" }} type="number" onChange={(e) => {
                  setlaptopInfo({
                    ...laptopInfo,
                    laptopPrice: e.target.value
                  })
                }} />
                <p className='holder'>
                  <img src={lari} alt="" className='lariicon' />
                  <span>მხოლოდ ციფრები </span>
                </p>
              </div>
            </div>
            <div className='bot-bot-bot'>

            </div>
          </div>
          <div className='bot-bot' style={{ padding: "3rem 0" }}>
            <div id='laptopcond' style={{ paddingLeft: ".4rem" }} className='mid-bot-right'>
              <p className='lnamep'>ლეპტოპის მდგომარეობა</p>
              <div style={{ display: "flex" }} className='sddhdd'>
                <div style={{ transform: "translateX(-12%)" }} className='ssd' onChange={(e) => {
                  setlaptopInfo({
                    ...laptopInfo,
                    laptopCond: e.target.value
                  })
                }} >
                  <input checked={laptopInfo.laptopCond == "new" ? "checked" : null} type="radio" id="new" name="newold" value="new" />
                  <label for="n32" style={{ paddingLeft: ".7rem" }} >ახალი</label>
                </div>
                <div style={{ paddingLeft: "2rem" }} className='hdd' onChange={(e) => {
                  setlaptopInfo({
                    ...laptopInfo,
                    laptopCond: e.target.value
                  })
                }} >
                  <input checked={laptopInfo.laptopCond == "used" ? "checked" : null} type="radio" className='inputradio' id="used" name="newold" value="used" />
                  <label for="used" style={{ paddingLeft: ".7rem" }} >მეორადი</label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='verybottom'>
          <Popup trigger={trigger} error="success" />


          <div>
            <p>უკან</p>
          </div>
          <div className='submitbutton'>
            <input className='submit' type="button" value="შემდეგი" onClick={() => handleSubmit()} />
           {error?  <p style={{fontSize:".8rem",color:"red",padding:"2rem 0 0 .7rem"}}>გადაამოწმე მონაცემები</p>  : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LaptopInfo