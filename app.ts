import express  from "express";
import { jobsRouter } from "./controllers/jobs";
const app = express();



app.use(express.json());

app.use("/api/jobs", jobsRouter);

export default app;