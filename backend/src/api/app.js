const express = require('express');
const app = express();
const catsRouter = require('./cats/cats.router.js');
const drinksRouter = require('./drinks/drinks.router.js');
const roomsRouter = require('./rooms/rooms.router.js');
const reservationsRouter = require('./reservations/reservations.router.js');
const cors = require("cors");
const errorHandler = require("./errors/errorhandler.js");

const corsOptions = { origin: '*', methods: ['GET', 'POST', 'DELETE', 'PUT', 'OPTIONS'], allowedHeaders: ['Content-Type', 'Authorization'] };

app.options('*', cors(corsOptions), (req, res)=>{
    console.log("Preflight request!");
    res.sendStatus(204);
})
app.use(cors(corsOptions));
app.use(express.json());

app.use("/cats", catsRouter);
app.use("/drinks", drinksRouter);
app.use("/rooms", roomsRouter);
app.use("/reservations", reservationsRouter);
app.get("/", (req, res) => res.send("meow"));
app.use(errorHandler);

module.exports = app;