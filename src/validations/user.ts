import { body } from "express-validator";

export const login = [
  body("username")
    .notEmpty()
    .withMessage("username is required")
    .isString()
    .withMessage("username must be a string")
    .not()
    .contains("null", { ignoreCase: true })
    .withMessage("username can not be null or undefined")
    .not()
    .contains("undefined", { ignoreCase: true })
    .withMessage("username can not be null or undefined")
    .trim(),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isString()
    .withMessage("password must be a string")
    .not()
    .contains("null", { ignoreCase: true })
    .withMessage("password can not be null or undefined")
    .not()
    .contains("undefined", { ignoreCase: true })
    .withMessage("password can not be null or undefined")
    .trim(),
];

export const create = [
  body("username")
    .notEmpty()
    .withMessage("username is required")
    .isString()
    .withMessage("username must be a string")
    .not()
    .contains("null", { ignoreCase: true })
    .withMessage("username can not be null or undefined")
    .not()
    .contains("undefined", { ignoreCase: true })
    .withMessage("username can not be null or undefined")
    .trim(),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isString()
    .withMessage("password must be a string")
    .not()
    .contains("null", { ignoreCase: true })
    .withMessage("password can not be null or undefined")
    .not()
    .contains("undefined", { ignoreCase: true })
    .withMessage("password can not be null or undefined")
    .trim(),
  body("role")
    .trim()
    .notEmpty()
    .withMessage("role is required")
    .isIn(["seller", "buyer"])
    .withMessage("role can only has values seller or buyer"),
];

export const deposit = [
  body("deposit")
    .notEmpty()
    .withMessage("deposit is required")
    .isIn([5, 10, 20, 50, 100])
    .withMessage("deposit must be coins of 5, 10, 20, 50 or 100 only")
    .trim(),
];

export const changePassword = [
  body("newPassword")
    .notEmpty()
    .withMessage("newPassword is required")
    .isString()
    .withMessage("newPassword must be a string")
    .not()
    .contains("null", { ignoreCase: true })
    .withMessage("newPassword can not be null or undefined")
    .not()
    .contains("undefined", { ignoreCase: true })
    .withMessage("newPassword can not be null or undefined")
    .trim(),
];
