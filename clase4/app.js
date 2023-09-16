// import express from 'express'
const express= require('express')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const app=express()
app.get('/saludo', (req, res)=>{
    res.send('Hola a todos desde exxpresss')
})

app.listen(8080, ()=>console.log('servodor arriba en el puerto 8080'))