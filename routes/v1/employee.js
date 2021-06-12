const response = require("../../components/response");
const { validationResult } = require("express-validator");
const validator = require("../../middlewares/validator");
const express = require("express");
const router = express.Router();

const controller = require("../../controllers/employee");

const index = function (req, res, next) {
  response.res404(res);
};

router
  .route("/")
  .post(validator.addEmployeeValidation(), validator.validate, (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      response.res400(res, errors.array());
    } else {
      controller.addEmployee(req, res);
    }
  });

router.route("/").get((req, res) => {
  controller.getAllEmployee(req, res);
});

router
  .route("/:employee_id")
  .delete(
    validator.deleteEmployeeValidation(),
    validator.validate,
    (req, res) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        response.res400(res, errors.array());
      } else {
        controller.deleteEmployee(req, res);
      }
    }
  );

router.all("*", index);

module.exports = router;
