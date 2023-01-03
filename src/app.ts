import "dotenv/config";
import  express from "express";
import cors from "cors";

import { router } from "./routes";
import db from "./config/mongo"

const PORT = process.env.PORT;
const app = express();

console.log(process.env.PORT);

// api availability 
app.use(cors());

app.use(express.json());

// routes
app.use(router);

// mongodb conexion
db().then(() => console.log('DB Conexion is ready'))

// port
app.listen(PORT, () => console.log(`Listen on port ${PORT}`));