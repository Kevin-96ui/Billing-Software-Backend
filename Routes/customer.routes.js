const express = require('express');
const router = express.Router();
const customerController = require('../Controller/customer.controller.js');


router.post('/', customerController.createCustomer);
router.get('/', customerController.getAllCustomers);
router.post('/', customerController.addCustomer);
router.get('/:id', customerController.getCustomerById);
router.put('/:id', customerController.updateCustomer);
router.delete('/:id', customerController.deleteCustomer);

module.exports = router;
