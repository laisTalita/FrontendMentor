const form = document.querySelector('form')
const LOCATION = document.getElementById('location')
const timezone = document.getElementById('time')
const ISP = document.getElementById('isp')

const icon_point = L.icon({
     iconUrl: '/images/icon-location.svg',    
    iconSize:[40, 45],
    shadowSize:   [50, 64], 
    iconAnchor:   [22, 94], 
    shadowAnchor: [4, 62], 
    popupAnchor:  [-3, -76]
})
let ip= document.getElementById('address')
let valor = document.getElementById('id_address')
let map = L.map('map').setView([0,0],2);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19, 
    attribution: '&copy; OpenStreetMap contributors'}
).addTo(map);

let marker = L.marker([0,0],{icon:icon_point}).addTo(map);

form.addEventListener('submit',enviaValor)

valor.addEventListener('input',()=>{
    resp = valor.value.replace(/[^0-9.]/g, '');
    
    ip.textContent =resp;
    
    const ipv4Regex = /^((1?\d{1,2}|2([0-4]\d|5[0-5]))\.){3}(1?\d{1,2}|2([0-4]\d|5[0-5]))$/;

    if (ipv4Regex.test(resp)) {
        valor.style.color ='green'
    }else{
        valor.style.color='red'
    }
})
async function enviaValor(e) {
   e.preventDefault()

    try{
        const response = await fetch('http://localhost:3000/api/dados',{
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body:JSON.stringify({ ip : valor.value })
        })  
        const dados = await response.json()

        LOCATION.textContent= `${dados.location.city}, ${dados.location.region} ${dados.location.postalCode}`
        timezone.textContent = `UTC ${dados.location.timezone}` 
        ISP.textContent = dados.isp

        map.setView([dados.location.lat, dados.location.lng],13)
        marker.setLatLng([dados.location.lat, dados.location.lng]);
    }catch(erro){
        console.log(`erro ${erro}`)
    }
    
}


