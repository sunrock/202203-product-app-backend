import { Product, ProductBody } from '../models/product';
import { NextFunction, Request, Response } from 'express';
import productService from '../services/product-service';
import { validateProductBody } from '../utils/product-body-util';


const addNewProduct = async (req: Request, res: Response, next: NextFunction) => {

  try {
    let product = productService.getProducts()
    const productFileds: ProductBody = req.body;

    const isProductValid = validateProductBody(productFileds)

    if (!isProductValid) {
      return res.status(400).json({
        message: "Bad Request, product details are invalid."
      });
    } else {
      productService.addProduct(productFileds)
      return res.status(200).json({ message: "Product Updated Successfully" });
    }

  } catch (e: any) {
    res.status(404);
    next(e)
  }
}

const getProduct = (req: Request, res: Response) => {
  const pid = req.params.id;
  let product = productService.getProduct(pid)
  return res.status(200).json({ data: product, message: "Product Retrieved Successfully" });
}

const getProducts = (req: Request, res: Response) => {
  let products = productService.getProducts()
  return res.status(200).json({ data: products, message: "Products Retrieved Successfully" });
}

const editProduct = (req: Request, res: Response, next: NextFunction) => {
  const pid = req.params.id;
  const productFileds: ProductBody = req.body;
  productService.patchProduct(pid, productFileds)
}

export default { addNewProduct, getProduct, getProducts, editProduct }



