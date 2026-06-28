import express from "express";
import Enquiry from "../models/Enquiry.js";

const router = express.Router();

// POST /api/payment/checkout - Create a mock checkout session
router.post("/checkout", async (req, res) => {
  try {
    const { enquiryId, feeAmount } = req.body;
    if (!enquiryId) {
      return res.status(400).json({ message: "Enquiry ID is required" });
    }

    const enquiry = await Enquiry.findById(enquiryId);
    if (!enquiry) {
      return res.status(404).json({ message: "Enquiry not found" });
    }

    // Generate a mock payment ID
    const mockPaymentId = "pay_mock_" + Math.random().toString(36).substring(2, 11);

    res.json({
      message: "Checkout session created successfully",
      enquiryId: enquiry._id.toString(),
      paymentId: mockPaymentId,
      checkoutUrl: `http://localhost:8080/payment/checkout?payment_id=${mockPaymentId}&enquiry_id=${enquiry._id.toString()}&amount=${feeAmount || 1000}`,
    });
  } catch (error) {
    console.error("Checkout session error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// POST /api/payment/verify - Verify mock payment ID and update enquiry status
router.post("/verify", async (req, res) => {
  try {
    const { enquiryId, paymentId, status } = req.body;
    if (!enquiryId || !paymentId) {
      return res.status(400).json({ message: "Enquiry ID and Payment ID are required" });
    }

    if (status !== "success") {
      return res.status(400).json({ message: "Payment status is not successful" });
    }

    const enquiry = await Enquiry.findById(enquiryId);
    if (!enquiry) {
      return res.status(404).json({ message: "Enquiry not found" });
    }

    enquiry.paymentStatus = "Paid";
    enquiry.paymentId = paymentId;
    await enquiry.save();

    res.json({
      message: "Payment verified successfully",
      enquiry: {
        id: enquiry._id.toString(),
        name: enquiry.name,
        paymentStatus: enquiry.paymentStatus,
        paymentId: enquiry.paymentId,
      },
    });
  } catch (error) {
    console.error("Payment verification error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
