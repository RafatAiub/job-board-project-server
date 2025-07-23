const express = require('express');
const router = express.Router();

const {
  getAllJobs,
  getJobById,
  createJob,
} = require('../controllers/jobController');

const authMiddleware = require('../middleware/authMiddleware');

router.get('/', getAllJobs);
router.get('/:id', getJobById);
router.post('/', authMiddleware, createJob);

module.exports = router; // ✅ important
