const express = require("express")
require('dotenv').config()  

const api_key = process.env.api_key
const app = express();
app.use(express.json())

const port = 3000;
app.use(express.static('public'))

app.post('/api/dados', async(req,res) => {
  try{
    const location = await handleSearch(req.body.ip)
    res.json(location)
  }
  catch(erro){console.log(erro)}
});

async function handleSearch(ip) {
  const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${api_key}&ipAddress=${ip}`)
  const dados = await response.json()
  return({ 
     location: dados.location, 
     isp : dados.isp
  })
}

app.listen(port,()=>{
    console.log(`servidor ativo em http://localhost:${port}`)
})

