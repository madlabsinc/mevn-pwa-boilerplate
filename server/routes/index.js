// Define your routes
import express from 'express';
import path from 'path';
const router = express.Router();

// Routes go here.
router.get('/', (req, res) => {
  console.log('Root Handler!');
  //res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

// Use localhost:9000/api followed by the required path.

module.exports = router;
