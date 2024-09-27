const express = require("express");
const router = express.Router();
const {
  getGSTs,
  getGST,
  createGST,
  deleteGST,
  updateGST,
  deleteAllGSTs,
} = require("../Controller/gst.controller.js");

router.get("/", getGSTs);
router.get("/:id", getGST);
router.post("/", createGST);
router.delete("/:id", deleteGST);
router.put("/:id", updateGST);
router.delete("/", deleteAllGSTs);

module.exports = router;
