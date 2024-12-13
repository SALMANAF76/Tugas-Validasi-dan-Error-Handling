const check = require("express-validator").check;

const userRegisterValidation = [
  check("username")
    .notEmpty()
    .withMessage("username harus diisi")
    .isLength({ min: 5 })
    .withMessage("username minimal 5 karakter"),
  check("email")
    .notEmpty()
    .withMessage("email harus diisi")
    .isEmail()
    .withMessage("email harus valid"),
  check("password")
    .notEmpty()
    .withMessage("password harus diisi")
    .isLength({ min: 8 })
    .withMessage("password minimal 8 karakter"),
  check("confirmPassword")
    .notEmpty()
    .withMessage("confirm password harus diisi")
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("password dan confirm password harus sama");
      }
      return true;
    }),
];

module.exports = userRegisterValidation;