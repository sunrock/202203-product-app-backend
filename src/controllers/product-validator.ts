import { ProductBody } from "../models/product";
import { NextFunction, Request, RequestHandler, Response } from 'express';
import { validateProductBody } from '../utils/product-body-util'
import productService from "../services/product-service";

const GET = 'GET'

const validateProductFileds: RequestHandler = (req: Request, res: Response, next: NextFunction) => {
  const productFileds: ProductBody = req.body;

  console.log('productFileds', productFileds)

  const isProductValid = validateProductBody(productFileds)

  if (!isProductValid && req.method !== GET) {
    res.status(400)
    next(new Error("Bad Request, product details are invalid."))
  } else {
    next()
  }
}

const checkExistingProduct = (req: Request, res: Response, next: NextFunction) => {
  const pid = req.params.id;
  try {
    productService.getProduct(pid)
    next()
  } catch (e: any) {
    res.status(404);
    next(e)
  }
}

export default { validateProductFileds, checkExistingProduct }