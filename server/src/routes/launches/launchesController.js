const { getAllLaunches, addNewLaunch } = require("../../models/launchesModel");

function httpGetAllLaunches(req, res) {
  return res.status(200).json(getAllLaunches());
}

function httpCreateNewLaunch(req, res) {
  const launch = req.body;

  launch.launchDate = new Date(launch.launchDate);

  return res.status(201).json(addNewLaunch(launch));
}

module.exports = {
  httpGetAllLaunches,
  httpCreateNewLaunch,
};
