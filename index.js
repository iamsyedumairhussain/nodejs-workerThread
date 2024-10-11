const express = require('express');
const app = express()
const {Worker} = require('worker_threads')



app.get('/blocking', (req, res) => {
    const worker = new Worker('./worker.js');
    worker.on('message',(data)=>{
        res.send(`Blocking called ${data}`)

    })


})

app.get('/non-blocking', (req, res) => {

    res.send('Non Blocking called')
})

app.listen(3000, () => {
    console.log('listening at 3000')
})
