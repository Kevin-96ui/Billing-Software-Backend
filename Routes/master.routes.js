const express = require("express");
const router = express.Router();
const {
  getmasterdetials,
  getmasterdetial,
  createmasterdetail,
  deletemasterdetial,
  updatemasterdetial,
  getGenderOptions,
} = require("../Controller/master.controller.js");

router.post("/", createmasterdetail);
router.get("/", getmasterdetials);
router.get("/:id", getmasterdetial);
router.put("/:id", updatemasterdetial);
router.delete("/:id", deletemasterdetial);
router.get("/gender-options", getGenderOptions);

module.exports = router;
