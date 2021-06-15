const express = require("express");
const response = require("../../components/response");
const router = express.Router();

const user = require("./user");
const role = require("./role");

const index = function (req, res, next) {
  response.res404(res);
};

router.use("/user", user);
router.use("/role", role);
router.all("/", index);
router.all("*", index);

module.exports = router;
