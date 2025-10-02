
export function getDay(){
  const today = new Date();
  const nextWeek = new Date(today);

  nextWeek.setDate(today.getDate()+6);
  const todayStr = today.toISOString().split("T")[0];       
  const nextWeekStr = nextWeek.toISOString().split("T")[0];
 return {todayStr, nextWeekStr}
}
export function getWeather(clima){
  if (!clima) return [];

  return clima.map((date) => {
    const d = new Date(date + "T00:00:00Z")
    return {
      date:date,
      day: d.toLocaleDateString("en-US", { weekday:"long", month:"short", day:"2-digit", year:"numeric", timeZone:"UTC" }),
      dayName:d.toLocaleDateString("en-US",{ weekday: "long",
      timeZone: "UTC"})
    };
  });
}
export function getHourly_day(hourlyTimes, hourlyTemps, timezone, selectedDate,cod){

  if (!hourlyTimes || !hourlyTemps || !timezone ||!selectedDate || !cod) return [];

  return hourlyTimes.map((hora, index) => {

    const dia = hora.split("T")[0];
    const time = new Date(hora)
    const h24 = time.getHours()

    const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
    const ampm = h24 >= 12 ? "PM" : "AM";

    if (h24 && dia === selectedDate) 
      {return{
         codigo : imagens(cod[index]), 
         hora:`${h12} ${ampm}`, 
         temp: `${hourlyTemps[index].toFixed(0)}º` }} 
  }).filter(Boolean)
}
export function weatherUtils(clima,maxima,minima,cod){
  const dias = getWeather(clima)
  const diasCompleto = dias.map((item,index)=>{
  const date = new Date(item.date)

 return{  
  ...item,
    dayName: date.toLocaleDateString("en-US",{weekday :"short"}),
    max:`${maxima[index].toFixed(0)}º`,
    min:`${minima[index].toFixed(0)}º`,
    codigo :`${imagens(cod[index])}`
 }})
  return diasCompleto
}
export function getParameters(clima,horas,dataAtual,prec_temp, wind, feels,humidity){

  if (prec_temp === undefined || wind === undefined || feels === undefined || humidity=== undefined ) return null;
      
      const index = getWeather(clima)
      const index_dia = index.findIndex(d => d.date === dataAtual)
      const humidity_day = horas.map((hora, id) => ({hora, id}))
      .filter(item => item.hora.startsWith(dataAtual))
      const umidadeDoDia = humidity_day.map(item => humidity[item.id]);

      const media = umidadeDoDia.reduce((acc, val) => acc + val,0)/ umidadeDoDia.length;
      if (index_dia !==-1) {
       return{
        precipitation: prec_temp[index_dia].toFixed(0),
        wind :wind[index_dia].toFixed(0),
        feelsLike:`${feels[index_dia].toFixed(0)}º`,
        humidity_day:`${media.toFixed(0)}%`
        }    
      } 
}

export function current_time(obj){

  const dataAtual = new Date()
  const h24 = dataAtual.getHours()
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  const ampm = h24 >= 12 ? "PM" : "AM";

  const horaAtualStr = `${h12} ${ampm}`;
  return obj.find(item => item.hora === horaAtualStr);
}

function imagens(weatherCode){
  if ([0,1].includes(weatherCode)) return 0;
  if (weatherCode ===2) return 1;
  if (weatherCode >= 3 && weatherCode <= 44) return 2;
  if ([45,48].includes(weatherCode)) return 3;
  if ([51, 53, 55, 56, 57].includes(weatherCode)) return 4;
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(weatherCode)) return 5; 
  if ([71,73,75,77,85,86].includes(weatherCode)) return 6;
  if ([95,96,99].includes(weatherCode))return 7;

  return 0;
}