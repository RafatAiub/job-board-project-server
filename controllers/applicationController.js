const Application = require('../models/Application');
const Job = require('../models/Job');

// @desc    Submit a job application
exports.applyToJob = async (req, res) => {
  const { jobId, name, email, cv } = req.body;

  if (!jobId || !name || !email || !cv) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const job = await Job.findById(jobId);
    if (!job) return res.status(404).json({ message: 'Job not found' });

    const application = new Application({
      jobId,
      name,
      email,
      cv,
    });

    await application.save();

    res.status(201).json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Apply Error:', error.message);
    res.status(500).json({ message: 'Server error while applying' });
  }
};
