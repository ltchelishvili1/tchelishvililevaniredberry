import React, { useEffect, useState } from 'react'
import './LaptopInfo.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import lari from '../../../assets/Vector.png'
const LaptopInfo = (props) => {
 

  const [laptopInfo, setlaptopInfo] = useState(JSON.parse(localStorage.getItem("LaptInfo")) ||{
    image: {
      url: null,
      preview: null,
    },
    laptopnName: "",
    laptopBrand: "",
    CPU: "",
    CPUcore: "",
    CPUgen: "",
    ram: "",
    memoryType: "",
    purchaseDate: "",
    laptopPrice: "",
    laptopCond: ""

  })
  
  let toDay = laptopInfo.purchaseDate;
  if(laptopInfo.purchaseDate==""||laptopInfo.purchaseDate==null){
     toDay = new Date().toISOString().substring(0, 10);
  }
  function handleFile(e) {
    if (!e.target.files || e.target.files.length === 0) {
      setlaptopInfo({
        ...laptopInfo,
        image: {
          ...laptopInfo.image,
          url: undefined
        }
      })
      return
    }
    localStorage.setItem("file",JSON.stringify(e.target.files[0]))
    setlaptopInfo({
      ...laptopInfo,
      image: {
        ...laptopInfo.image,
        url: e.target.files[0]
      }
    })
  }

  useEffect(() => {
    if (!laptopInfo.image.url) {
      setlaptopInfo({
        ...laptopInfo,
        image: {
          ...laptopInfo.image,
          preview: undefined
        }
      })
      return
    }

    const objectUrl = URL.createObjectURL(laptopInfo.image.url)
    setlaptopInfo({
      ...laptopInfo,
      image: {
        ...laptopInfo.image,
        preview: objectUrl
      }
    })
    return () => URL.revokeObjectURL(objectUrl)
  }, [laptopInfo.image.url])
  useEffect(() => {
   
  
    localStorage.setItem('LaptInfo', JSON.stringify(laptopInfo));
  }, [laptopInfo]);
  return (
    <div className=' laptopinfo'>

      <div className='container'>
        <div className='top'>
          <div className='uploadimage'>
            {laptopInfo.image.url && <img className='uploadedimage' src={laptopInfo.image.preview} />}
            <div className='contents'>
              <p>ჩააგდე ან ატვირთე</p>
              <p style={{ transform: "translateY(-70%)", paddingBottom: "1rem" }}>ლეპტოპის ფოტო</p>



              <input type="file" id='file' style={{ display: "none" }} name="file" onChange={(e) => handleFile(e)} multiple />
              <label className='labelbtn' for="file">ატვირთე</label>


            </div>
          </div>
          <div className='laptopnameandbrand'>
            <div className='laptopname'>
              <p className='lnamep'>ლეპტოპის სახელი</p>
              <input value={laptopInfo.laptopnName} style={{ border: "1px solid #8AC0E2" }} onChange={(e) => {
                setlaptopInfo({
                  ...laptopInfo,
                  laptopnName: e.target.value
                })
              }} type="text" />
              <p className='holder'>
                <span>ლათინური ასოები, ციფრები, !@#$%^&*()_+= </span>
              </p>
            </div>
            <div className='laptopbrand'>
              <select value={laptopInfo.laptopBrand} style={{ height: "35px", transform: "translateY(30%)", fontWeight: "600" }} onChange={(e) => {
                setlaptopInfo({
                  ...laptopInfo,
                  laptopBrand: e.target.value
                })
              }} className='lbrandselect'>
                <option >ლეპტოპის ბრენდი</option>
                {
                  props.brands.map((brand) => (
                    <option key={brand.id}>{brand.name}</option>
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
              <select  value={laptopInfo.CPU} style={{ height: "35px", fontWeight: "600", transform: "translateY(40%)" }} className='lbrandselect' onChange={(e) => {
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
              <input  value={laptopInfo.CPUcore} style={{ border: "1px solid #8AC0E2" }} type="number" onChange={(e) => {
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
              <input  value={laptopInfo.CPUgen} style={{ border: "1px solid #8AC0E2" }} type="number" onChange={(e) => {
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
              <input  value={laptopInfo.ram} style={{ border: "1px solid #8AC0E2", width: "85%" }} type="number" onChange={(e) => {
                setlaptopInfo({
                  ...laptopInfo,
                  ram: e.target.value
                })
              }} />
              <p className='holder'>
                <span>მხოლოდ ციფრები </span>
              </p>
            </div>
            <div className='mid-bot-right'>
              <p className='lnamep'>მეხსიერების ტიპი</p>
              <div  style={{ display: "flex" }} className='sddhdd'>
                <div style={{ transform: "translateX(-12%)" }} className='ssd' onChange={(e) => {
                  setlaptopInfo({
                    ...laptopInfo,
                    memoryType: e.target.value
                  })
                }} >
                  <input checked={laptopInfo.memoryType=="ssd"? "checked" : null} type="radio" id="ssd" name="ssdhdd" value="ssd" />
                  <label for="ssd" style={{ paddingLeft: ".7rem" }} >SSD</label>
                </div>
                <div style={{ paddingLeft: "2rem" }} className='hdd' onChange={(e) => {
                  setlaptopInfo({
                    ...laptopInfo,
                    memoryType: e.target.value
                  })
                }} >
                  <input checked={laptopInfo.memoryType=="hdd"? "checked" : null} type="radio" id="hdd" name="ssdhdd" value="hdd" />
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
                <input  value={laptopInfo.laptopPrice} style={{ border: "1px solid #8AC0E2", width: "85%" }} type="number" onChange={(e) => {
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
            <div className='mid-bot-right'>
              <p className='lnamep'>ლეპტოპის მდგომარეობა</p>
              <div style={{ display: "flex" }} className='sddhdd'>
                <div style={{ transform: "translateX(-12%)" }} className='ssd' onChange={(e) => {
                  setlaptopInfo({
                    ...laptopInfo,
                    laptopCond: e.target.value
                  })
                }} >
                  <input checked={laptopInfo.laptopCond=="new"? "checked" : null} type="radio" id="new" name="newold" value="new" />
                  <label  for="n32" style={{ paddingLeft: ".7rem" }} >ახალი</label>
                </div>
                <div style={{ paddingLeft: "2rem" }} className='hdd' onChange={(e) => {
                  setlaptopInfo({
                    ...laptopInfo,
                    laptopCond: e.target.value
                  })
                }} >
                  <input checked={laptopInfo.laptopCond=="old"? "checked" : null} type="radio" className='inputradio' id="old" name="newold" value="old" />
                  <label for="old" style={{ paddingLeft: ".7rem" }} >მეორადი</label>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LaptopInfo