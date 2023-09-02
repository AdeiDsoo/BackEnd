// tema de la clase 2 sept -Persistencia de memoria
// ya no guardar la informacion en mememoria sino en archivos



//ejercicio de hoy

const fs = require('fs');
//escribir/crear archivo

// fs.writeFileSync('clase3/archvio.txt', 'primer archivo creado')
//lo ideal es trabajar con rutas absolutas
// fs.writeFileSync('clase3/archvio.txt', 'paso dos archivo creado')
//enconding type es el segundo parametro
// const infoArchivo= fs.readFileSync('clase3/archvio.txt', 'utf-8')
// console.log(infoArchivo)

// fs.unlinkSync('clase3/archvio.txt')

// const existeArchivo= fs.existsSync('clase3/archvio.txt')
// console.log(existeArchivo)

// fs.appendFileSync('clase3/archvio.txt', 'agregando texto')
// console.log(addText)

// fs.writeFile('clase3/archvio.txt', 'primer archivo', (error)=>{
//     if(error){
//         console.log(error)
//     }
//     console.log('archivo crado con exito')
// })

// fs.readFile('clase3/archvio.txt', 'utf-8', (error, info)=>{
//     if(error){
//         console.log(error)
//     }
//     console.log(info)
// })

// fs.promises.writeFile('clase3/archvio.txt', 'primer archivo')
// .then(()=> console.log('archivo creado con exito'))
// .catch(error => console.log(error))

// con asyn y await se atrapan los errores con try y catch

