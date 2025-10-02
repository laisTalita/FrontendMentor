import {weatherUtils} from "../utils/WeatherUtils"
import Img_icons from "../Template/Img_icons"
import './Weather_list.css'
  
const items= Array.from({length :7})

function Weather_list({climate}){
    
    const options = weatherUtils(climate?.daily?.time , climate?.daily?.temperature_2m_max, climate?.daily?.temperature_2m_min , climate?.daily?.weathercode)
    
    return (
    <div className="mt-2">
        <h2 className="climate_title pt-2">Daily forecast</h2>
        <div className="d-flex flex-wrap gap-2 mt-4  pt-1 justify-content-start justify-content-sm-center justify-content-lg-start justify-content-xxl-between">
            {options.length >0 ?(
             options.map((item) =>(
            <div className="weather_items d-flex flex-column px-2 pt-3 align-items-center gap-2" key={item.dayName}>
                <p className="mb-0">{item.dayName}</p>    
                <Img_icons className={'item_img'} code={item.codigo}/>
                
                <div className="d-flex justify-content-between max_min w-100">
                    <p>{item.max}</p>
                    <p>{item.min}</p>
                </div>
            </div>
            ))):
            items.map((_,index) =>(
            <div className="weather_items d-flex flex-column px-2 pt-3 align-items-center gap-2" key={index}>
             </div>
            ))}
        </div>
    </div>
    )} export default Weather_list