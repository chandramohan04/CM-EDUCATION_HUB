import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
  courseId: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  students: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  specializations: [{
    type: String,
  }],
  eligibility: {
    type: String,
    required: true,
  },
  career: {
    type: String,
    required: true,
  },
  colleges: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Course", courseSchema);
