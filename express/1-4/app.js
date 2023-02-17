const express = require('express')
const app = express()

app.get('/home', (req,res) => {
    res.sendFile('index.html',{root:__dirname})
})

app.get('/picture', (req,res) => {
    res.sendFile('paris.jpg',{root:__dirname})
})

app.use('*',(req,res) => {
    res.send('not Found')
})

app.listen(5000)