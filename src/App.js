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
const TOKEN ="008eb969a19e7990d2de16d66627150d"
function App() {
  const [teams, setTeams] = useState([])
  const [positions, setPositions] = useState([])
  const [brands, setBrands] = useState([])
  const [cpus, setCpus] = useState([])
  const [laptops, setLaptops] = useState([])
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
        <Route path='/' element={<Header />} />
        <Route path="attributes" element={<Attributes />}>
          <Route path="employeeinfo" element={<EmployeeInfo teams={teams} positions={positions} />} />
          <Route path="laptopinfo" element={<LaptopInfo brands={brands} cpus={cpus} />} />
        </Route>
        <Route path='/laptoplist' element={<Laptoplist laptops={laptops} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
