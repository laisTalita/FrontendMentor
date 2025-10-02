import './Header.css';
import IconDropdown from '../../assets/images/logo.svg';
import IconFerramenta from '../../assets/images/icon-units.svg';
import IconDrop from '../../assets/images/icon-dropdown.svg';
import {useState,useCallback} from 'react';
import Item_form from './Item_form';

const units ={
  1:{temperature:"celsius",wind:"kmh",precipitation:"mm"},
  2:{temperature:"fahrenheit",wind:"ms",precipitation:"inch"}
}
const temperatureOp = [
  { label: "Temperature" ,value:"header"},
  { label: "Celsius (°C)", value: "celsius" },
  { label: "Fahrenheit (°F)", value: "fahrenheit" }
];
const windSpeed = [
  {label:"Wind Speed",value:"header"},
  { label: "km/h", value: "kmh" },
  { label: "mph", value: "ms" }
];
const precipitationStatus = [
  {label :"Precipitation",value:"header"},
  { label: "Millimeters (mm)", value: "mm" },
  { label: "Inches (in)", value: "inch" }
];

function Header({setSettings,settings}) {
const[mode,setMode] =useState(1)

const changeMode = useCallback(()=>{
  setMode(prev=>{
      const newMode = prev === 1 ? 2: 1
      setSettings(units[newMode])
      return newMode
    })
},[setSettings])

const [menuOpen,setMenuOpen] = useState(false)

  return (
    <header className='px-2 py-1 pt-md-4 mt-md-1' id='header'>
      <nav className="navbar navbar-expand-md">
        <a className="navbar-brand" href="#">
          <img src={IconDropdown} alt="Logo" />
        </a>
        <div className="ms-auto position-relative">
          <button className='tools d-flex align-items-center gap-1 gap-md-2 px-2 py-1' onClick={()=> setMenuOpen(prev => !prev)}>
            <img src={IconFerramenta} alt="Tools" className="me-1 menu_img" />
            Units<img src={IconDrop} alt='Icon Dropdown menu'/>
          </button>

          {menuOpen &&(
            <div id='menu'className='position-absolute'>
              <ul className="d-flex flex-column px-2 pt-3 gap-1">
                <li className='dropdown-item mode' 
                tabIndex={0} onClick={changeMode}>
                  {mode === 1? "Switch to Imperial": "Switch to Metric"}
                </li>
                <Item_form item={temperatureOp} comparison={settings.temperature}/>
                <Item_form item={windSpeed} comparison={settings.wind}/>
                <Item_form item={precipitationStatus} comparison={settings.precipitation}/>                  
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  )} export default Header;
