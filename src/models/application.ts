import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
    recruiterId: String,
    name: String,
    email: String,
    candidateId: String,
    status: Array,
    jobId: String,
    applyDate: String,
});

const Application =
    mongoose.models.Application ||
    mongoose.model("Application", ApplicationSchema);

export default Application;
