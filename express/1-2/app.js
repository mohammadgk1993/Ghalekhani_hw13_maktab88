const express = require('express')
const app = express()

app.get('/home',(req,res) => {
    res.send('Home Route')
})

app.get('/about',(req,res) => {
    res.send('About Route')
})

app.get('/contact',(req,res) => {
    res.send('Contact Route')
})

app.get('/',(req,res) => {
    res.send('Root Route')
})

app.use('*',(req,res) => {
    res.send('not Found')
})

app.listen(5000)