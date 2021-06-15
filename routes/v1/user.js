const response = require("../../components/response");
const { validationResult } = require("express-validator");
const validator = require("../../middlewares/validator");
const express = require("express");
const router = express.Router();

const controller = require("../../controllers/user");

const index = function (req, res, next) {
  response.res404(res);
};

router
  .route("/login")
  .post(validator.loginValidation(), validator.validate, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      response.res400(res, errors.array());
    } else {
      controller.login(req, res);
    }
  });

router
  .route("/register")
  .post(validator.registerValidation(), validator.validate, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      response.res400(res, errors.array());
    } else {
      controller.register(req, res);
    }
  });

router.route("/").get((req, res) => {
  controller.getUserList(req, res);
});

router.all("*", index);

module.exports = router;
