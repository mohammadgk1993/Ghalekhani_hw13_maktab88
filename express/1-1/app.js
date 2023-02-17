const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send('Hello World') 
})

app.use('*',(req,res) => {
    res.send('not Found')
})

app.listen(5000)