const express = require("express");
const router = express.Router();
const {
  getcandidates,
  getcandidate,
  createcandidate,
  deletecandidate,
  updatecandidate,
} = require("../Controller/candidate.controller.js");

router.get("/", getcandidates);
router.get("/:email", getcandidate);
router.post("/", createcandidate);
router.delete("/:id", deletecandidate);
router.put("/:id", updatecandidate);


module.exports = router;
