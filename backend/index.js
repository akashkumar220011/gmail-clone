import express  from "express";
import Connection from "./database/db.js";
const app = express();

const port = 8080;

Connection();

app.listen(port, ()=> console.log(`Server is listen on Port ${port}`));
