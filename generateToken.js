const dotenv = require('dotenv');
dotenv.config();

const jwt = require('jsonwebtoken');

const token = jwt.sign(
  { email: process.env.ADMIN_EMAIL },
  process.env.JWT_SECRET,
  { expiresIn: '10h' }
);

console.log('Your admin token is:\n');
console.log(token);
