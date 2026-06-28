import express from "express";
import jwt from "jsonwebtoken";
import College from "../models/College.js";

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
    // Double check that it's admin (we can check by username since students have email/role student)
    if (user.username !== "admin") {
      return res.status(403).json({ message: "Access forbidden. Admins only." });
    }
    req.user = user;
    next();
  });
};

// GET /api/colleges (Public)
router.get("/", async (req, res) => {
  try {
    const colleges = await College.find();
    res.json(colleges);
  } catch (error) {
    console.error("Fetch colleges error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// POST /api/colleges (Admin only)
router.post("/", authenticateAdmin, async (req, res) => {
  try {
    const { slug, name, location, description, details } = req.body;
    if (!slug || !name || !location || !description || !details) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingCollege = await College.findOne({ slug });
    if (existingCollege) {
      return res.status(400).json({ message: "College slug already exists" });
    }

    const newCollege = new College({
      slug,
      name,
      location,
      description,
      details,
    });

    const saved = await newCollege.save();
    res.status(201).json(saved);
  } catch (error) {
    console.error("Create college error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// PUT /api/colleges/:id (Admin only)
router.put("/:id", authenticateAdmin, async (req, res) => {
  try {
    const updated = await College.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) {
      return res.status(404).json({ message: "College not found" });
    }
    res.json(updated);
  } catch (error) {
    console.error("Update college error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// DELETE /api/colleges/:id (Admin only)
router.delete("/:id", authenticateAdmin, async (req, res) => {
  try {
    const deleted = await College.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "College not found" });
    }
    res.json({ message: "College deleted successfully" });
  } catch (error) {
    console.error("Delete college error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
