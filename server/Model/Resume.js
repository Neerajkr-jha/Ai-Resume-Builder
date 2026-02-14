import mongoose from 'mongoose';

const ResumeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title: {
        type: String,
        default: "untitled Resume"
    },
    public: {
        type: Boolean,
        default: false
    },
    template: {
        type: String,
        default: "classic"
    },
    accent_color: {
        type: String,
        default: "3B82F6"
    },
    professional_summary: {
        type: String,
        default: ""
    },
    skills: [{
        type: String
    }],
    personal_info: {
        image: {
            type: String,
            default: ''
        },
        full_name: {
            type: String,
            default: ''
        },
        profession: {
            type: String,
            default: ''
        },
        email: {
            type: String,
            default: ''
        },
        phone: {
            type: String,
            default: ''
        },
        location: {
            type: String,
            default: ''
        },
        linkedin: {
            type: String,
            default: ''
        },
        website:{
            type:String,
            default:''
        },
    },
    experience:{
        company:{
            type:String
        },
        position:{
            type:String
        },
        start_date:{
            type:String
        },
        end_date:{
            type:String
        },
        description:{
            type:String
        },
        isCurrent:{
            type:Boolean
        },
    },
    project:{
        name:{
            type:String
        },
        type:{
            type:String
        },
        description:{
            type:String
        },
        live_link:{
            type:String
        },
        github_link:{
            type:String
        },
    },
    education:{
        institution:{
            type:String
        },
        degree:{
            type:String
        },
        feild:{
            type:String
        },
        graduation_date:{
            type:String
        },
        gpa:{
            type:String
        }
    },
},{timestamps:true,minimize:false})

export default mongoose.models.Resume ||
  mongoose.model("Resume", ResumeSchema);