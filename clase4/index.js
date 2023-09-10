// const http = require('http')    
import http from 'http'

const server= http.createServer()
//crear el puerto
server.listen(8080, ()=>console.log('Hola desdeee el puerto 8080'))
//escucharlo