const express = require("express");
const MobileModel = require("../models/MobileSchema");
const router = express.Router();

router.get("/", (req, res) => {
  MobileModel.find((err, data) => {
    if (!err) {
      res.render("mobile/index", { mobiles: data });
    }
  });
});

router.get("/add", (req, res) => {
  res.render("mobile/add");
});

router.post("/add", (req, res) => {
  var mobile = new MobileModel(req.body);
  mobile.save((err) => {
    if (!err) {
      console.log("Add mobile succeed !");
      res.redirect("/mobile");
    }
  });
});

module.exports = router;
