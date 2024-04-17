const express = require("express");
const Station = require("../models/station.model.js");
const router = express.Router();

const {
  getStations,
  getStation,
  createStation,
  updateStation,
  deleteStation
} = require("../Controllers/station.controller.js");

router.get("/", getStations);

router.get("/:id", getStation);

router.post("/", createStation);

router.put("/:id", updateStation);

router.delete("/:id", deleteStation);

module.exports = router;