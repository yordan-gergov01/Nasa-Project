const express = require("express");
const {
  httpGetAllLaunches,
  httpCreateNewLaunch,
} = require("./launchesController");

const launchesRouter = express.Router();

launchesRouter.get("/", httpGetAllLaunches).post("/", httpCreateNewLaunch);

module.exports = launchesRouter;
