const express = require("express");
const mongoose = require("mongoose");
const station = require("./station.model");
const app = express();

app.use(express.json());
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

mongoose
  .connect(
    // "mongodb+srv://devmohamedfathi:dev1234@cluster0.udmunce.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0"
    "mongodb+srv://devmohamedfathi:software123@cluster0.udmunce.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.log();
    ("Error connecting to MongoDB");
  });

app.get("/api/stations", async (req, res) => {
  try {
    const stations = await station.find({});
    res.status(200).json(stations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.get("/api/stations/id", async (req, res) => {
  try {
    const {id} = req.params
    await station.findById(id);
    res.status(200).json(station);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


app.post("/api/stations", async (req, res) => {
  try {
    await station.create(req.body);
    res.status(200).json(station);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
