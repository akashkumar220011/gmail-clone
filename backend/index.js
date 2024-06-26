import express  from "express";
import Connection from "./database/db.js";
import routes from "./routes/route.js";
import cors from 'cors';
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json())
app.use('/', routes);

const port = 8080;

Connection();

app.listen(port, ()=> console.log(`Server is listen on Port ${port}`));
