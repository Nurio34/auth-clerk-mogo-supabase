import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
    companyName: String,
    title: String,
    type: String,
    location: String,
    experience: String,
    description: String,
    skills: String,
    recruiterId: String,
    applicants: [
        {
            name: String,
            email: String,
            userId: String,
            status: String,
        },
    ],
});

const JobModel =
    mongoose.models.JobModel || mongoose.model("JobModel", jobSchema);

export default JobModel;
