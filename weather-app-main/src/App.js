import { useEffect, useState } from "react";
import {getDay,current_time} from "./Components/utils/WeatherUtils"
import './App.css'

import Footer from "./Components/Template/Fotter";
import Header from "./Components/Template/Header";
import Form from "./Components/Itens/Form";
import Days from "./Components/Itens/Days";
import Weather_list from "./Components/Itens/Weather_list";
import Climate_Parameters from "./Components/Itens/Climate_Parameters.js";
import Img_icons from "./Components/Template/Img_icons";
import gif from "./assets/images/load.gif";
import ApiError from "./Components/Itens/ApiError";

function App() {
  const {todayStr, nextWeekStr} = getDay()

  const [error,setError] = useState(false)
  const [place, setPlace] = useState()
  const [data_search,setData_search] = useState(null)
  const [loading,setLoading] = useState(false)
  const [climate,setClimate] = useState(null)
  const [currentDate, setCurrentDate] = useState('')
  const [parameters_weather,setParameters_weather]=useState({})
  const [weather_time, setWeather_time] = useState([])
  const [horaAtual, setHoraAtual] = useState(null)
  const [settings, setSettings] = useState({temperature: "celsius",wind: "kmh",precipitation: "mm",
  });

  useEffect(() => {
    setHoraAtual(current_time(weather_time))

    const interval = setInterval(() => {
      setHoraAtual(current_time(weather_time));
    },5000);
  return () => clearInterval(interval);
  },[weather_time]);

  useEffect(()=>{
    if (!place) return;
    setLoading(false); 

    fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${place}&count=1`)
    .then(res => res.json()) 
    .then(dados=>{
      if (!dados || !dados.results || dados.length ===0) {
        setData_search({results:[]})
        setLoading(false)
        return
      }
     
      setData_search(dados)
      const latitude = dados.results[0].latitude;
      const longitude = dados.results[0].longitude;

        fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,windspeed_10m_max,apparent_temperature_max,weathercode&hourly=weathercode,temperature_2m,relativehumidity_2m,windspeed_10m,precipitation&windspeed_unit=${settings.wind}&precipitation_unit=${settings.precipitation}&temperature_unit=${settings.temperature}&start_date=${todayStr}&end_date=${nextWeekStr}&timezone=auto`)
        .then(res => res.json())
        .then(clima =>{
          setClimate(clima)
          setLoading(false)
        })
      }).catch(erro => { 
        setLoading(false)
        setError(true)
      })
  },[place,settings])

  return (
    <div className="App">
      <Header setSettings={setSettings} settings={settings}/>
      {!error?(
      <>
        <h1 className='text-center mt-5 mt-md-4 mt-xxl-5'>How's the sky looking today?</h1>
        <Form onSearch={setPlace} Sloading={setLoading} loading={loading}/>
        <main className="mt-3">
          {!loading && data_search?.results.length !== 0 ?
            (<section id="main_section" className="mt-4">
            <div className={`grid_item ${data_search?.results.length >0 ? ' item_1':'item_color'} item_fixo text-center py-5 d-flex flex-column flex-md-row align-items-md-center justify-content-md-between gap-3 gap-lg-4 px-md-4 mx-auto w-100`}>
              {
                data_search?.results?.length > 0 && (
                <div className="text-md-start">
                  <h2>{data_search.results[0].name}, {data_search.results[0].country}</h2>
                  {currentDate?.day}
                </div>
              )}{
              horaAtual ?(
                <div className="d-flex align-items-center justify-content-center gap-4 gap-xxl-5">
                  <Img_icons code={horaAtual.codigo} className={'img_mainsec'}/>
                  <h3>{horaAtual.temp}</h3>
                </div>
              ):
              <div className="w-100 text-center carregando">
                <img src={gif} alt="loading"/>
                <p className="pt-0 ps-2 mt-0">Loading...</p>
              </div>
              }
            </div>
            <div className="grid_item item_2 mt-xxl-3">
              <Climate_Parameters OnParameters={parameters_weather} settings={settings} />
            </div>
            <div className="grid_item item_3 mt-xxl-1 ">
              <Weather_list climate={climate}/>
            </div>
            <div className="grid_item item_4">
              <Days daysData={{
                setParameters: setParameters_weather,
                climate: climate,
                currentDate: currentDate,
                setCurrentDate: setCurrentDate,
                weatherTime: weather_time,
                setWeatherTime: setWeather_time
              }}/>
            </div>
          </section>
          ):data_search?.results?.length === 0 &&
          (<h2 className="text-center mt-5">No search result found!</h2>)
          }
        </main>
        <Footer/>
      </>
      ):(<ApiError setError={setError} error ={error}/>)}
    </div>
  )} export default App;
