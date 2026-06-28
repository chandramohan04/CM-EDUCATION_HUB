import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  enquiries: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Enquiry",
  }],
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Student", studentSchema);
