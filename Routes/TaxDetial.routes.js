const express = require("express");
const router = express.Router();
const {
    getTaxDetials,
    getTaxDetial,
    createTaxDetial,
    deleteTaxDetial,
    updateTaxDetial,
    deleteAllTaxDetials,
} = require("../Controller/TaxDetial.controller.js");

router.get("/", getTaxDetials);
router.get("/:id", getTaxDetial);
router.post("/", createTaxDetial);
router.delete("/:id", deleteTaxDetial);
router.put("/:id", updateTaxDetial);
router.delete("/", deleteAllTaxDetials);

module.exports = router;
