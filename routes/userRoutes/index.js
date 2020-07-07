const express = require("express");

const router = express.Router();

router.get("/users", async (req, res) => {
  // try
  // gets all the users
  // await a call a database service
  // send back the result on success
  // catch
  // send back an error
});
router.get("/users/:id", (req, res) => {
  // try
  // get one user
  // catch
  //send bakc an error
});

module.exports = router;
