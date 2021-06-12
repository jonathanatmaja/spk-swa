const { body, param, query, validationResult } = require("express-validator");

exports.addEmployeeValidation = () => {
  return [
    body("name").exists().withMessage("applicationId is required"),
    body("age").exists().withMessage("age is required"),
    body("age").isNumeric().withMessage("age must be in number format"),
    body("date_of_birth").exists().withMessage("date_of_birth is required"),
    body("date_of_birth").isDate().withMessage("date_of_birth must be in date format"),
    body("salary").exists().withMessage("salary is required"),
    body("salary").isNumeric().withMessage("salary must be in number format"),
    body("employee_id").exists().withMessage("employee_id is required"),
  ];
}

exports.deleteEmployeeValidation = () => {
  return [
    param("employee_id").exists().withMessage("employee_id is required")
  ];
}

exports.validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
      return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(400).json({
      errors: extractedErrors,
  })
}
