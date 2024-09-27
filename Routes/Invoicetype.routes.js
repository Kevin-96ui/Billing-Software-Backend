const express = require('express');
const router = express.Router();
const {
    getInvoicetypes,
    getInvoicetype,
    createInvoicetype,
    deleteInvoicetype,
    updateInvoicetype,
    deleteAllInvoicetypes,
  } = require("../Controller/Invoicetype.controller.js"); 

// Get all Invoicetypes
router.get('/', getInvoicetypes);
// Get a single Invoicetype by ID
router.get('/:id', getInvoicetype);
// Create a new Invoicetype
router.post('/', createInvoicetype);
// Update a Invoicetype by ID
router.put('/:id', updateInvoicetype);
// Delete a Invoicetype by ID
router.delete('/:id', deleteInvoicetype);
// Delete all Invoicetype
router.delete('/', deleteAllInvoicetypes);

module.exports = router;


