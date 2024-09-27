const express = require("express");
const router = express.Router();
const InvoiceDataController = require("../Controller/InvoiceData.controller.js");


router.post("/", InvoiceDataController.createInvoiceData);
router.get("/", InvoiceDataController.getAllInvoiceData);
router.get("/:id", InvoiceDataController.getInvoiceDataById);
router.put("/:id", InvoiceDataController.updateInvoiceData);
router.delete("/:id", InvoiceDataController.deleteInvoiceData);

module.exports = router;
