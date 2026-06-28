import express from "express";
import jwt from "jsonwebtoken";
import Student from "../models/Student.js";
import Enquiry from "../models/Enquiry.js";

const router = express.Router();

// Middleware — admin only
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
    if (user.role !== "admin") {
      return res.status(403).json({ message: "Admins only." });
    }
    req.user = user;
    next();
  });
};

// GET /api/admin/students — list all students with their enquiries
router.get("/students", authenticateAdmin, async (req, res) => {
  try {
    const students = await Student.find().select("-password").sort({ timestamp: -1 });

    const result = await Promise.all(
      students.map(async (s) => {
        const enquiries = await Enquiry.find({ email: s.email }).sort({ createdAt: -1 });
        return {
          id: s._id.toString(),
          name: s.name,
          email: s.email,
          phone: s.phone,
          registeredAt: (s.timestamp || new Date()).toISOString(),
          enquiries: enquiries.map((e) => ({
            id: e._id.toString(),
            course: e.course,
            qualification: e.qualification || "",
            status: e.status || "Pending",
            timestamp: (e.createdAt || new Date()).toISOString(),
          })),
        };
      })
    );

    res.json(result);
  } catch (error) {
    console.error("Admin students error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
