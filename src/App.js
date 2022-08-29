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

function App() {
  const [teams,setTeams]= useState([])
  const [positions,setPositions] = useState([])
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
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path="attributes" element={<Attributes />}>
          <Route path="employeeinfo" element={<EmployeeInfo teams={teams} positions={positions}/>} />
          <Route path="laptopinfo" element={<LaptopInfo/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
