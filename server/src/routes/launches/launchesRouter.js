const express = require("express");
const {
  httpGetAllLaunches,
  httpCreateNewLaunch,
  httpAbortLaunch,
} = require("./launchesController");

const launchesRouter = express.Router();

launchesRouter
  .get("/", httpGetAllLaunches)
  .post("/", httpCreateNewLaunch)
  .delete("/:id", httpAbortLaunch);

module.exports = launchesRouter;
