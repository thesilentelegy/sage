const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send({
    message: 'Welcome to SAGE',
  });
});

router.get('/api/v1', (req, res) => {
  res.status(200).send({
    message: 'Welcome to SAGE',
  });
});

module.exports = router;
