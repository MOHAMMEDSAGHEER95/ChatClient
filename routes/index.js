// routes/index.js

const express = require('express');
const router = express.Router();

// Define your route
router.get('/', (req, res) => {
  res.send('Welcome to the index route!');
});

// Export the router
module.exports = router;
