const express = require('express');
const router = express.Router();

// Temporary placeholder until controller is created
router.post('/', (req, res) => {
  res.json({ message: 'Application submitted successfully (placeholder)' });
});

module.exports = router; // ✅ important
