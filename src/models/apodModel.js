import mongoose from "mongoose";

const apodSchema = new mongoose.Schema({
    date: {
      type: String,
      required: true
    },
    explanation: {
      type: String,
      required: true
    },
    hdurl: {
      type: String,
      required: true
    },
    media_type: {
      type: String,
      required: true
    },
    service_version: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }, {timestamps: true});

  const Apod = mongoose.models.apods || mongoose.model("apods", apodSchema);
  
  export default Apod;