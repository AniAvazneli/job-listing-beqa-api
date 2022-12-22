import mongoose from "mongoose";
import * as config from "../utils/config";

mongoose.connect(config.url).then(() => {
  console.log("Connected to Mongodb");
  
});

const jobSchema = new mongoose.Schema({
  id: String,
  company: String,
  logo: String,
  new: Boolean,
  featured: Boolean,
  position: String,
  role: String,
  level: String,
  postedAt: String,
  contract: String,
  location: String,
  languages: Array,
  tools: Array,
});

jobSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
  },
});

export default mongoose.model("Job", jobSchema);
