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

const ApplicationModel =
    mongoose.models.ApplicationModel ||
    mongoose.model("ApplicationModel", ApplicationSchema);

export default ApplicationModel;
