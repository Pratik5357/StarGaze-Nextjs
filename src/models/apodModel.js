import mongoose from "mongoose";

const apodSchema = new mongoose.Schema(
  {
    date: { type: String, required: true, unique: true },
    explanation: { type: String, required: true },
    hdurl: { type: String, default: "" },
    media_type: { type: String, required: true },
    service_version: { type: String, default: "v1" },
    title: { type: String, required: true },
    url: { type: String, required: true },
    copyright: { type: String },
  },
  { timestamps: true }
);

const Apod = mongoose.models.apods || mongoose.model("apods", apodSchema);

export default Apod;
