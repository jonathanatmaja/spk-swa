const response = require("../../components/response");
const { validationResult } = require("express-validator");
const validator = require("../../middlewares/validator");
const express = require("express");
const router = express.Router();

const controller = require("../../controllers/company");

const index = function (req, res, next) {
  response.res404(res);
};

router.route("/").get((req, res) => {
  controller.getAllCompany(req, res);
});

router.all("*", index);

module.exports = router;
