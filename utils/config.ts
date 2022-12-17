import dotenv from "dotenv";
dotenv.config();

const PORT =  process.env.PORT;
const url: any = process.env.MONGODB_URI;

export {PORT, url};