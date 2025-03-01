const http = require("http");
require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

const { loadPlanetsData } = require("./models/planetsModel");
const { loadLaunchData } = require("./models/launchesModel");

const PORT = process.env.PORT || 8000;

const MONGO_URL = process.env.MONGO_URL;

const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL);

  // This gives as data for planets before the server start responding
  await loadPlanetsData();

  await loadLaunchData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}
startServer();
