import "dotenv/config";
import  express from "express";
import cors from "cors";

import { router } from "./routes";

const PORT = process.env.PORT;
const app = express();

console.log(process.env.PORT);

// api availability 
app.use(cors());

// routes
app.use(router);

// port
app.listen(PORT, () => console.log(`Listen on port ${PORT}`));