const express = require('express')
const fs = require('fs').promises
const app = express()

app.get('/get-all-users',async (req,res) => {
    res.send(await readUsers('/get-all-users'))
})

app.get('/admins', async (req,res) => {
    res.send(await readUsers('/admins'))
})

app.use('*',(req,res) => {
    res.send('not Found')
})

app.listen(5000)

async function readUsers(url) {
    let jsonFile = await fs.readFile('./user-data.json','utf-8',(err,data) => {
        return data
    })

    if (url == '/get-all-users') {
        return JSON.parse(jsonFile)
    } else if (url == '/admins') {
        return JSON.parse(jsonFile).filter(item => item.role == 'admin')
    }
}