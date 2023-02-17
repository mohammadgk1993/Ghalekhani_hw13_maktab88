const express = require('express')
const app = express()

app.get('/page-1', (req,res) => {
    res.sendFile('index-1.html',{root:__dirname})
})

app.get('/page-2', (req,res) => {
    res.sendFile('index-2.html',{root:__dirname})
})

app.get('/page-3', (req,res) => {
    res.sendFile('index-3.html',{root:__dirname})
})

app.get('/page-4', (req,res) => {
    res.sendFile('index-4.html',{root:__dirname})
})

app.get('/page-5', (req,res) => {
    res.sendFile('index-5.html',{root:__dirname})
})

app.use('*',(req,res) => {
    res.send('not Found')
})

app.listen(5000)