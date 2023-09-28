import express from "express";
import { engine } from "express-handlebars";
import viewsRouter from "./routes/views.router.js";
import { __dirname } from "./utils.js";
import { Server } from "socket.io";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

// handlebars
app.engine("handlebars", engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use("/", viewsRouter);

const PORT = 8080;

const httpServer = app.listen(PORT, () => {
  console.log(`Escuchando al puerto ${PORT}`);
});

// websocket - server
const socketServer = new Server(httpServer);

// connection - disconnect

const newProduct = [];

socketServer.on("connection", (socket) => {
  // console.log(`Cliente conectado ${socket.id}`);
  socket.on("disconnect", () => {
    // console.log(`Cliente desconectado ${socket.id}`);
  });

  socket.on("firstEvent", (info) => {
    newProduct.push(info);
    // socket.emit("secondEvent", newProduct); 
    //emit emitimos directamente al implicado
    // solo se accede a la nuevo info el cliente emite un evento se le muestra la info actualiada cuando el cliente esta hablando con tigo directamente 
    socketServer.emit("secondEvent", newProduct);
    //evento para todos los clientes conectados
    // socket.broadcast.emit("secondEvent", newProduct) 
    //emite a todos a excepcion a quien mando la informacion
  });
});












// const messages = [];

// socketServer.on("connection", (socket) => {
//   socket.on("newUser", (user) => {
//     socket.broadcast.emit("newUserBroadcast", user);
//   });

//   socket.on("message", (info) => {
//     messages.push(info);
//     socketServer.emit("chat", messages);
//   });
// });