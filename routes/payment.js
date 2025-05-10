const express = require('express');
const router = express.Router();
const { PaymentController } = require('../controllers/PaymentController');  
// POST route for payment
router.post('/payment', PaymentController.create_payment);  

module.exports = router;
