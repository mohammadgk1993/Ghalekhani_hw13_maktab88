const express = require('express')
const app = express()

app.param('name',function(req,res,next,name) {
    const response = name.toLowerCase()
    req.name = response
    next()
})

app.get('/:name',function(req,res) {
    if (req.name == 'page-1') {
        res.sendFile('index-1.html',{root:__dirname})
    } else if (req.name == 'page-2') {
        res.sendFile('index-2.html',{root:__dirname})
    } else if (req.name == 'page-3') {
        res.sendFile('index-3.html',{root:__dirname})
    } else if (req.name == 'page-4') {
        res.sendFile('index-4.html',{root:__dirname})
    } else if (req.name == 'page-5') {
        res.sendFile('index-5.html',{root:__dirname})
    } else {
        res.send('not found')
    }
})

// app.get('/:name',function(req,res) {
//     console.log(req.params)
//     res.sendFile(`${req.params.name}.html`,{root:__dirname})
// })

app.listen(5000)