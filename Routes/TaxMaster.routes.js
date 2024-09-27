// TaxMaster
const express = require("express");
const router = express.Router();
const {
    getTaxMasters,
    getTaxMaster,
    createTaxMaster,
    deleteTaxMaster,
    updateTaxMaster,
    deleteAllTaxMasters,
} = require("../Controller/TaxMaster.controller.js");

router.get("/", getTaxMasters);
router.get("/:id", getTaxMaster);
router.post("/", createTaxMaster);
router.delete("/:id", deleteTaxMaster);
router.put("/:id", updateTaxMaster);
router.delete("/", deleteAllTaxMasters);

module.exports = router;
