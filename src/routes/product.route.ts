import { Router } from "express";
import * as productController from "../controllers/product";
import { auth, isBuyer, isSeller, logger, validator } from "../middlewares";
import { remove, create, buy, amount, cost } from "../validations/product";

const router = Router();

router.get("/", logger, productController.getAll);

router.delete(
  "/remove",
  logger,
  auth,
  isSeller,
  remove,
  validator,
  productController.remove
);

router.post(
  "/create",
  logger,
  auth,
  isSeller,
  create,
  validator,
  productController.create
);

router.post(
  "/buy",
  logger,
  auth,
  isBuyer,
  buy,
  validator,
  productController.buy
);

router.put(
  "/amount",
  logger,
  auth,
  isSeller,
  amount,
  validator,
  productController.updateAmount
);

router.put(
  "/cost",
  logger,
  auth,
  isSeller,
  cost,
  validator,
  productController.updateCost
);

export default router;
