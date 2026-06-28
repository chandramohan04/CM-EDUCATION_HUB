import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Student from "../models/Student.js";
import Enquiry from "../models/Enquiry.js";

const router = express.Router();

// Middleware to authenticate Student JWT
const authenticateStudent = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access denied. Token missing." });
  }

  jwt.verify(token, process.env.JWT_SECRET || "fallback_secret", (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token." });
    }
    req.user = user;
    next();
  });
};

// POST /api/student/register
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password || !phone) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingStudent = await Student.findOne({ email });
    if (existingStudent) {
      return res.status(400).json({ message: "Email is already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newStudent = new Student({
      name,
      email,
      password: hashedPassword,
      phone,
    });

    const savedStudent = await newStudent.save();

    // Sign JWT
    const token = jwt.sign(
      { id: savedStudent._id, email: savedStudent.email, role: "student" },
      process.env.JWT_SECRET || "fallback_secret",
      { expiresIn: "1d" }
    );

    res.status(201).json({
      token,
      student: {
        id: savedStudent._id.toString(),
        name: savedStudent.name,
        email: savedStudent.email,
        phone: savedStudent.phone,
      },
    });
  } catch (error) {
    console.error("Student registration error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// POST /api/student/login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const student = await Student.findOne({ email });
    if (!student) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Sign JWT
    const token = jwt.sign(
      { id: student._id, email: student.email, role: "student" },
      process.env.JWT_SECRET || "fallback_secret",
      { expiresIn: "1d" }
    );

    res.json({
      token,
      student: {
        id: student._id.toString(),
        name: student.name,
        email: student.email,
        phone: student.phone,
      },
    });
  } catch (error) {
    console.error("Student login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/student/dashboard (Retrieve student info and enquiries)
router.get("/dashboard", authenticateStudent, async (req, res) => {
  try {
    const student = await Student.findById(req.user.id).select("-password");
    if (!student) {
      return res.status(404).json({ message: "Student profile not found" });
    }

    // Find all enquiries matching either student object ID or student email
    const enquiries = await Enquiry.find({
      $or: [{ student: student._id }, { email: student.email }],
    }).sort({ timestamp: -1 });

    const formattedEnquiries = enquiries.map((e) => ({
      id: e._id.toString(),
      name: e.name,
      email: e.email,
      phone: e.phone,
      course: e.course,
      qualification: e.qualification || "",
      message: e.message || "",
      status: e.status || "Pending",
      timestamp: (e.createdAt || new Date()).toISOString(),
    }));

    res.json({
      student: {
        id: student._id.toString(),
        name: student.name,
        email: student.email,
        phone: student.phone,
      },
      enquiries: formattedEnquiries,
    });
  } catch (error) {
    console.error("Student dashboard error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
