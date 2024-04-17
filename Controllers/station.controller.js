const Station = require("../models/station.model.js");


const getStations = async (req, res) => {
  try {
    const station = await Station.find({});
    res.status(200).json(station);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getStation = async (req, res) => {
  try {
    const { id } = req.params;
    const station = await Station.findById(id);
    res.status(200).json(station);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createStation = async (req, res) => {
  try {
    const station = await Station.create(req.body);
    res.status(200).json(station);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
const updateStation = async (req, res) => {
  try {
    const { id } = req.params;
    const station = await Station.findByIdAndUpdate(id, req.body);
    if (!station) {
      res.status(404).json({ message: "Station not found" });
    }
    const updateStation = await Station.findById(id);
    res.status(200).json(updateStation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const deleteStation = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedStation = await Station.findByIdAndDelete(id); // Delete the station using the Station model
        if (!deletedStation) {
          return res.status(404).json({ message: "Station not found" });
        }
        res.status(200).json({ message: "Station deleted successfully" });
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
};
module.exports = {
  getStations,
  getStation,
  createStation,
  updateStation,
  deleteStation
};
