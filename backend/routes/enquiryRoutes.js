import express from "express";
import jwt from "jsonwebtoken";
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

// POST /api/enquiry — submit enquiry (public)
router.post("/", async (req, res) => {
  try {
    const enquiry = await Enquiry.create(req.body);
    res.status(201).json({ success: true, enquiry });
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET /api/enquiry — list all enquiries (admin only)
router.get("/", authenticateAdmin, async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    const formatted = enquiries.map((e) => ({
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
    res.json(formatted);
  } catch (error) {
    res.status(500).json(error);
  }
});

// GET /api/enquiry/:id — get single enquiry (admin only)
router.get("/:id", authenticateAdmin, async (req, res) => {
  try {
    const enquiry = await Enquiry.findById(req.params.id);
    if (!enquiry) {
      return res.status(404).json({ message: "Enquiry not found" });
    }
    res.json({
      id: enquiry._id.toString(),
      name: enquiry.name,
      email: enquiry.email,
      phone: enquiry.phone,
      course: enquiry.course,
      qualification: enquiry.qualification || "",
      message: enquiry.message || "",
      status: enquiry.status || "Pending",
      timestamp: (enquiry.createdAt || new Date()).toISOString(),
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// PATCH /api/enquiry/:id/status — verify or reject (admin only)
router.patch("/:id/status", authenticateAdmin, async (req, res) => {
  try {
    const { status } = req.body;
    if (!["Pending", "Verified", "Rejected"].includes(status)) {
      return res.status(400).json({ message: "Invalid status value" });
    }

    const enquiry = await Enquiry.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!enquiry) {
      return res.status(404).json({ message: "Enquiry not found" });
    }

    res.json({
      id: enquiry._id.toString(),
      status: enquiry.status,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

// DELETE /api/enquiry/:id — delete (admin only)
router.delete("/:id", authenticateAdmin, async (req, res) => {
  try {
    const deleted = await Enquiry.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Enquiry not found" });
    }
    res.json({ message: "Enquiry deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
});

export default router;
