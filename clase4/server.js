// const express = require('express')
import express from "express";
import { userManager } from "..clase3/userManager.js";

const users = [
    {
        id: 1,
        name: "zngie",
        last_name: "Espinoza",
        age: 18,
        curse: "NodeJS",
    },
    {
        id: 2,
        name: "Juan",
        last_name: "Alvarez",
        age: 75,
        curse: "NodeJS",
    },
    {
        id: 3,
        name: "Adei",
        last_name: "Soto",
        age: 75,
        curse: "NodeJS",
    },
    {
        id: 4,
        name: "Laura",
        last_name: "Luz",
        age: 75,
        curse: "NodeJS",
    },
];

//params

const app = express();
app.use(exoress.json())
app.udr(express.urlencoded({extended:true}))

app.get('/users', (req, res)=>{
    console.log(req);
    res.json({message:'all userssss', users})
})

app.get('/users/:idUser', (req, res)=>{
    const {idUser}=req.params
// const user=users.find(u=>u.id=== +idUser)
const user=users.find(u=>u.id=== ~~idUser)
    console.log(req.params);
    // res.json({message:'all users', users})
    res.json({message:'users', user})
})

//query

app.get("/user", (req, res) => {
    // res.send('Bienvenidos a raiz')
    //?sort=ASC  sprt el nombre de la propiedad despues de = el valor
    //http://localhost:8080/users/?sort=ASC&name=luis&las_name=Cardoso&hobby=hulaHoop
    console.log(req.query);
    // const {sort, name}= req.query
    const { name, sort } = req.query;


    const usersArray =
        sort === "ASC"
            ? users.sort((a, b) => a.name.localeCompare(b.name))
            : users.sort((a, b) => b.name.localeCompare(a.name));
    res.json({ message: "PROBANDO Sort HOLA", users: usersArray });

    //     if(name){
    // const user= users.find(u=>u.name=== name)
    // return res.json({message:'User  UnUSUario', user})
    //     }
    // si mellega tal cosa has sto
    // res.json({message:'All users', users})
});
app.get("/ultima", (req, res) => {
    res.send("Bienvenidos a ultima");
});

app.listen(8080, () => {
    console.log("escuchando el puerto 8080");
});

// body


//asymc y await en nuestro endpoint revisar los proyectos de labo


app.get('user')