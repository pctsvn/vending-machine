import { NextFunction, Request, Response } from "express";
import { Product } from "../../database";
import { CustomError, ErrorTypes } from "../../services";

export const updateAmount = async (
  req: Request & { payload: any },
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.payload;
    const { productId, amount } = req.body;
    const product = new Product();

    const productData = await product.getById(productId);
    if (productData.sellerId !== userId)
      throw new CustomError(ErrorTypes.USER_NOT_AUTHORIZED);

    await product.updateAmount(productId, amount);
    return res.status(200).json({
      success: true,
      message: `Sucessfully change the amount of product ${productData.productName}`,
    });
  } catch (error) {
    next(error);
  }
};
