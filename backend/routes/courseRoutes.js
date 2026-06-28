import express from "express";
import jwt from "jsonwebtoken";
import Course from "../models/Course.js";

const router = express.Router();

// Middleware to authenticate Admin JWT
const authenticateAdmin = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Access denied. Token missing." });
  }

  jwt.verify(token, process.env.JWT_SECRET || "fallback_secret", (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid or expired token." });
    }
    if (user.username !== "admin") {
      return res.status(403).json({ message: "Access forbidden. Admins only." });
    }
    req.user = user;
    next();
  });
};

// GET /api/courses (Public)
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error("Fetch courses error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// GET /api/courses/:id (Public, fetch by courseId numeric ID)
router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findOne({ courseId: Number(req.params.id) });
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(course);
  } catch (error) {
    console.error("Fetch course detail error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// POST /api/courses (Admin only)
router.post("/", authenticateAdmin, async (req, res) => {
  try {
    const { courseId, name, fullName, duration, students, details, overview, specializations, eligibility, career, colleges } = req.body;
    if (!courseId || !name || !fullName || !duration || !students || !details || !overview || !eligibility || !career || !colleges) {
      return res.status(400).json({ message: "Required fields are missing" });
    }

    const existingCourse = await Course.findOne({ courseId });
    if (existingCourse) {
      return res.status(400).json({ message: "Course ID already exists" });
    }

    const newCourse = new Course({
      courseId,
      name,
      fullName,
      duration,
      students,
      details,
      overview,
      specializations: specializations || [],
      eligibility,
      career,
      colleges,
    });

    const saved = await newCourse.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error("Create course error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// PUT /api/courses/:id (Admin only, edit by Mongo _id)
router.put("/:id", authenticateAdmin, async (req, res) => {
  try {
    const updated = await Course.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json(updated);
  } catch (error) {
    console.error("Update course error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE /api/courses/:id (Admin only, delete by Mongo _id)
router.delete("/:id", authenticateAdmin, async (req, res) => {
  try {
    const deleted = await Course.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.json({ message: "Course deleted successfully" });
  } catch (error) {
    console.error("Delete course error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
