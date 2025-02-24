const http = require("http");
const app = require("./app");

const { loadPlanetsData } = require("./models/planetsModel");

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

async function startServer() {
  // This gives as data for planets before the server start responding
  await loadPlanetsData();

  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
}
startServer();
