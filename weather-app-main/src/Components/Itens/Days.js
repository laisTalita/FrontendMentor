import { useEffect, useState } from "react";
import {getWeather,getHourly_day,getParameters} from "../utils/WeatherUtils"
import './Days.css'
import Img_icons from "../Template/Img_icons";

const items= Array.from({length:8})

function Days({daysData}){

  const options = getWeather(daysData?.climate?.daily?.time)
  useEffect(()=>{
      if (!daysData?.climate || !options) return 
      const current= daysData.currentDate?.date ? daysData.currentDate:options[0]
      if (!daysData?.currentDate?.date) daysData.setCurrentDate(current)
        
      const hourlyData  = getHourly_day(
        daysData.climate.hourly.time,
        daysData.climate.hourly.temperature_2m,
        daysData.climate.timezone,
        current.date,
        daysData.climate.hourly.weathercode
      )
      const parameters = getParameters(
       daysData.climate.daily.time,
       daysData.climate.hourly?.time,
       current.date,
       daysData.climate.daily.precipitation_sum,
       daysData.climate.daily.windspeed_10m_max,
       daysData.climate.daily.apparent_temperature_max,
       daysData.climate.hourly.relativehumidity_2m 
      )
      daysData.setParameters(parameters)
      daysData.setWeatherTime(hourlyData)
  },[daysData.climate, daysData.currentDate?.date, options]);

  return (
    <section id="section_hourly" className="px-3 pt-4 pb-1">
      <div className="d-flex justify-content-between align-items-center">
        <h2 className="mt-lg-2">Hourly forecast</h2>
        <select className="p-2 text-center select"
          value={daysData?.currentDate?.date} 
          onChange={(e)=>{
            const selecionado = options.find((opt) => opt?.date === e.target.value);
             daysData?.setCurrentDate(selecionado)}}>
          {
            options?.map((opt) => (
            <option key={opt.date} value={opt.date}>
              {opt.dayName}
            </option>))
          }
        </select>
      </div>
      <div className="lists pb-2">
        {daysData?.weatherTime?.length >0 ?(
          daysData.weatherTime.map(item =>(
          <ul key={item.hora}className="d-flex align-items-center justify-content-between list-unstyled list mx-auto my-3 py-3 px-2">
            <div className="d-flex gap-1 align-items-center">
              <Img_icons className={"image_list"} code={item.codigo}/>  
                <li className="p-0">{item.hora}</li>
            </div>
            <li><span>{item.temp}</span></li>
          </ul>
          ))
        ):(
          items.map((_,index)=>(
          <ul key={index} className="d-flex align-items-center justify-content-between list-unstyled lista mx-auto my-3 py-3 px-2">
          </ul>
        )))}
      </div>
    </section>
  )} export default Days;
