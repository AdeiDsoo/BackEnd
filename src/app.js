import express from "express"
import"./db/config.js"
import { StudentsManager } from "./studentsManager.js"

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', async (req, res)=>{
    const{idStudent}= req.params
    const student=await StudentsManager.findById(idStudent)
    res.json({message:'Student', student})
})

app.post("/", async (req, res)=>{
    
})
app.listen(8080, ()=>{
    console.log('conectado al puerto 8080');
})