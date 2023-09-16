import express from 'express'

const app=express()
const server= app.listen(8080, ()=>console.log("listening on 8080");)
app.use('/static', express.static('public'))
//especificar un path de acceso de montaje

app.use('/static', express.static(__dirname + '/public'))
//path absoluto
