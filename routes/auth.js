// backend/routes/auth.js
const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@shomvob.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin369";

// POST /api/auth
router.post("/auth", (req, res) => {
  const { email, password } = req.body;

  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "2h",
    });
    return res.json({ token });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
});

module.exports = router;
