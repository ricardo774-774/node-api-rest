import "dotenv/config";
import  express from "express";
import cors from "cors";

const PORT = process.env.PORT;
console.log(process.env.PORT);
const app = express();
app.use(cors());


app.listen(PORT, () => console.log(`Listen on port ${PORT}`));