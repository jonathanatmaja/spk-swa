const { body, param, query, validationResult } = require("express-validator");

exports.loginValidation = () => {
  return [
    body("email").exists().withMessage("email is required"),
    body("password").exists().withMessage("password is required")
  ];
}

exports.registerValidation = () => {
  return [
    body("email").exists().withMessage("email is required"),
    body("name").exists().withMessage("name is required"),
    body("password").exists().withMessage("password is required"),
    body("role").exists().withMessage("password is required"),
    body("role").isIn(['wl','leader','music','member']).withMessage("Invalid role"),
    body("address").exists().withMessage("address is required")
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
