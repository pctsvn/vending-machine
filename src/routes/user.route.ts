import { Router } from "express";
import * as userController from "../controllers/user";
import { auth, isBuyer, logger, validator } from "../middlewares";
import { login, create, deposit, changePassword } from "../validations/user";

const router = Router();

router.post("/login", logger, login, validator, userController.login);

router.post("/create", logger, create, validator, userController.signup);

router.post(
  "/deposit",
  logger,
  auth,
  isBuyer,
  deposit,
  validator,
  userController.updateDeposit
);

router.put(
  "/change-password",
  logger,
  auth,
  changePassword,
  validator,
  userController.update
);

router.get("/", logger, auth, userController.getById);

router.post("/reset", logger, auth, isBuyer, userController.resetDeposit);

router.delete("/removeAccount", logger, auth, userController.remove);

export default router;
