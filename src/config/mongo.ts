import "dotenv/config";
import { connect, set } from "mongoose";

async function dbConnect(): Promise<void> {
    await set('strictQuery', true);
    const DB_URI = <string>process.env.DB_URI;
    await connect(DB_URI);
}

export default dbConnect;