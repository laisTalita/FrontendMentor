const express = require("express")
var app = express()
app.use(express.json())

const fs = require('fs');
const file = './public/data.json';
const PORT = process.env.PORT || 5000;

app.use(express.static('public'))

app.post('/atualiza',(req,res)=>{
    const {name, remove, isActive} = req.body
    let data = JSON.parse(fs.readFileSync(file,'utf-8'))

    data= data.map(item=>{
        if (item.name === name) {
            item.isActive = isActive
            item.remove= remove
        }
        return item
    })
     fs.writeFileSync(file, JSON.stringify(data, null, 2));
  res.json({ status: 'ok' });
})

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});