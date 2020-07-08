const express = require("express");

const router = express.Router();
const services = require("../../services");

router.get("/", async (req, res) => {
  var allUsers = await services.userService.findAllUsers();
  res.send(allUsers);
  // try
  // gets all the users
  // await a call a database service
  // send back the result on success
  // catch
  // send back an error
});
router.get("/:id", (req, res) => {
  // try
  // get one user
  // catch
  //send bakc an error
});

module.exports = router;
