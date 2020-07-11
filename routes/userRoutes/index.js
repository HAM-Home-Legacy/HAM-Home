const express = require("express");

const router = express.Router();
const services = require("../../services");

router.get("/", async (req, res) => {
  try {
    var allUsers = await services.userService.findAllUsers();
    res.send(allUsers);
  } catch (error) {
    res.send(error);
  }
});
router.post("/user", async (req, res) => {
  try {
    var user = await services.userService.findUser(req.body);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});
router.post("/createUser", async (req, res) => {
  try {
    const user = await services.userService.createUser(req.body);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});
router.put("/updateUser", async (req, res) => {
  try {
    const user = await services.userService.updateUser(req.body);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});
router.post("/checkUser", async (req, res) => {
  try {
    const user = await services.userService.checkUser(req.body);
    res.send(user);
  } catch (error) {
    res.send(error);
  }
});
router.post("/savePosts", async (req, res) => {
  try {
    const user = await services.userService.addPost(req.body);
    res.send(user);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
