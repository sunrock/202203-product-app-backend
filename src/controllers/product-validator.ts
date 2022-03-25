import { ProductBody } from "../models/product";
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { validateProductBody } from '../utils/product-body-util'


const validateNewProduct: RequestHandler = async (req: Request, res: Response, next: NextFunction) => {
  const productBody: ProductBody = req.body;
  const isProductValid = validateProductBody(productBody)

  if (!isProductValid) {
    return res.status(400).json({
      message: "Bad Request."
    });
  } else {
    next()
  }

}

export default { validateNewProduct }