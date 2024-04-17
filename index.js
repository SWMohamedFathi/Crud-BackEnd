const express = require("express");
const mongoose = require("mongoose");
const stationRoute = require("./Routes/station.route")
const app = express();

//Middleware
app.use(express.json());
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// routes
app.use("/api/stations",stationRoute)

mongoose
  .connect(
    "mongodb+srv://devmohamedfathi:software123@cluster0.udmunce.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(() => {
    console.log();
    ("Error connecting to MongoDB");
  });









