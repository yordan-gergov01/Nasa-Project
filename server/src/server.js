const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");

const { loadPlanetsData } = require("./models/planetsModel");

const PORT = process.env.PORT || 8000;

const MONGO_URL =
  "mongodb+srv://danigergov:ZXV1FNTLMuTdWaDf@nasacluster.h1hau.mongodb.net/?retryWrites=true&w=majority&appName=NASACluster";

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

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}
startServer();
