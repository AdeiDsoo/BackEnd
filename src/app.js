import express from "express";
import { engine } from "express-handlebars";
import viewsRouter from "./routes/views.router.js";
import { __dirname } from "./utils.js";
import { Server } from "socket.io";
import { productsManager } from "./productManager.js";
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

socketServer.on("connection", (socket) => {
  console.log(`Cliente conectado: ${socket.id}`);

  socket.on("createProduct", async (product) => {
    const newProduct = await productsManager.createProduct(product);
    socket.emit("productCreated", newProduct);
  });

  socket.on("deleteProduct", async (id) => {
    const deleteProduct = await productsManager.deleteProduct(id);
    socket.emit("productDeleted", deleteProduct);
  });
});
