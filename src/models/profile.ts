import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
    userId: String,
    role: String,
    email: String,
    isPremiumUser: Boolean,
    membershipType: String,
    membershipStartDate: String,
    membershipEndDate: String,
    recruiterInfo: {
        name: String,
        currentCompany: String,
        position: String,
    },
    candidateInfo: {
        name: String,
        currentCompany: String,
        currentJobLocation: String,
        preferedJobLocation: String,
        currentSalary: Number,
        noticePeriod: Number,
        skils: String,
        previousCompanies: String,
        totalExperience: Number,
        collage: String,
        collageLocation: String,
        graduatedYear: Number,
        linkedinProfile: String,
        githubProfile: String,
        resume: String,
    },
});

const ProfileModel =
    mongoose.models.Profile || mongoose.model("Profile", ProfileSchema);

export default ProfileModel;
