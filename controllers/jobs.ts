import express from "express";
import Job from "../models/jobs";

const jobsRouter = express.Router();

jobsRouter.get("/", async (req, res) => {
  const jobs = await Job.find({});
  res.send(jobs);
});

export { jobsRouter };
