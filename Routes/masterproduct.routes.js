const express = require("express");
const router = express.Router();
const {
  getallmasterproduct,
  getmasterproduct,
  createmasterproduct,
  updatemasterproduct,
  deletemasterproduct,
} = require("../Controller/masterproduct.controller.js");

// Route to get all master products
router.get("/", getallmasterproduct);

// Route to get a single master product by ID
router.get("/:id", getmasterproduct);

// Route to create a new master product
router.post("/", createmasterproduct);

// Route to update a master product by ID
router.put("/:id", updatemasterproduct);

// Route to delete a master product by ID
router.delete("/:id", deletemasterproduct);

module.exports = router;
