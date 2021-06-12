const express = require("express");
const response = require("../../components/response");
const router = express.Router();

const company = require("./company");
const employee = require("./employee");

const index = function (req, res, next) {
  response.res404(res);
};

router.use("/company", company);
router.use("/employee", employee);
router.all("/", index);
router.all("*", index);

module.exports = router;
