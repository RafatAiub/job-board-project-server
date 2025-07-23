const Job = require('../models/Job');

// @desc    Get all jobs
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching jobs' });
  }
};

// @desc    Get job by ID
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching job' });
  }
};

// @desc    Create new job (admin only)
exports.createJob = async (req, res) => {
  try {
    const { title, company, location, description } = req.body;
    const job = await Job.create({ title, company, location, description });
    res.status(201).json(job);
  } catch (error) {
    res.status(500).json({ message: 'Error creating job' });
  }
};
