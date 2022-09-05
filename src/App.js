import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  Link,
} from "react-router-dom";
import Header from './components/parts/Header/Header';
import { useEffect, useState } from 'react';
import Attributes from './components/parts/Attributes/Attributes';
import EmployeeInfo from './components/parts/Attributes/EmployeeInfo/EmployeeInfo'
import LaptopInfo from './components/parts/Attributes/LaptopInfo/LaptopInfo';
import Laptoplist from './components/parts/Laptoplist/Laptoplist';
import Listitem from './components/parts/Listitem/Listitem';
import axios from 'axios';
const TOKEN = "008eb969a19e7990d2de16d66627150d"




       
   

function App() {
  const [isMobile, setIsMobile] = useState(false)
  const [teams, setTeams] = useState([])
  const [positions, setPositions] = useState([])
  const [brands, setBrands] = useState([])
  const [cpus, setCpus] = useState([])
  const [laptops, setLaptops] = useState([])
  useEffect(() => {
    window.screen.width <= 830 ? setIsMobile(true) : setIsMobile(false);
  }, [window.screen.width]);

  function detectWindowSize() {
    window.innerWidth <= 760 ? setIsMobile(true) : setIsMobile(false);
  }

  window.onresize = detectWindowSize;

  if (isMobile) {


    if (window.location.href.includes("employeeinfo")) {
      if (document.getElementById("lapt")) {
        document.getElementById("lapt").style.display = "none"
        document.getElementById("try").style.display = "none"
      }
    } else if (window.location.href.includes("laptopinfo")) {
      if (document.getElementById("emply")) {
        document.getElementById("emply").style.display = "none"
        document.getElementById("hrr2").style.display = "none"
      }

    }
  } else {
    if (window.location.href.includes("employeeinfo")) {
      if (document.getElementById("lapt")) {
        document.getElementById("lapt").style.display = "block"
        document.getElementById("try").style.display = "block"
      }
    } else if (window.location.href.includes("laptopinfo")) {
      if (document.getElementById("emply")) {
        document.getElementById("emply").style.display = "block"
        document.getElementById("hrr2").style.display = "block"
      }

    }
  }

  useEffect(() => {
    fetch("https://pcfy.redberryinternship.ge/api/teams")
      .then((response) => response.json())
      .then((data) => setTeams(data.data));

  }, [])
  useEffect(() => {
    fetch("https://pcfy.redberryinternship.ge/api/positions")
      .then((response) => response.json())
      .then((data) => setPositions(data.data));

  }, [])
  useEffect(() => {
    fetch("https://pcfy.redberryinternship.ge/api/brands")
      .then((response) => response.json())
      .then((data) => setBrands(data.data));

  }, [])
  useEffect(() => {
    fetch("https://pcfy.redberryinternship.ge/api/cpus")
      .then((response) => response.json())
      .then((data) => setCpus(data.data));

  }, [])
  useEffect(() => {
    fetch(`https://pcfy.redberryinternship.ge/api/laptops?token=${TOKEN}`)
      .then((response) => response.json())
      .then((data) => setLaptops(data.data));


  }, [])



  return (
    <BrowserRouter>
           
      <Routes>
        <Route path='/tchelishvililevaniredberry' element={<Header />} />
        <Route path="/tchelishvililevaniredberry/attributes" element={<Attributes />}>
          <Route path="employeeinfo" element={<EmployeeInfo teams={teams} positions={positions} />} />
          <Route path="laptopinfo" element={<LaptopInfo brands={brands} cpus={cpus} />} />
        </Route>
        <Route path='/laptoplist' element={<Laptoplist laptops={laptops} />} />
        {laptops.map((laptop) => (
          <Route path={`/laptoplist/laptopid=${laptop.laptop.id}`} element={<Listitem positions={positions} brands={brands} teams={teams} TOKEN={TOKEN} id={laptop.laptop.id}
          />} />
        ))}

      </Routes>
    </BrowserRouter>
  );
}

export default App;
