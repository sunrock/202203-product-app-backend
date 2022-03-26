import { Product, ProductBody } from '../models/product';
import { NextFunction, Request, Response } from 'express';
import productService from '../services/product-service';
import { validateProductBody } from '../utils/product-body-util';


const addProduct = async (req: Request, res: Response) => {
  const productFileds: ProductBody = req.body;
  productService.addProduct(productFileds)
  return res.status(201).json({ message: "Product Added Successfully" });
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

const editProduct = (req: Request, res: Response) => {
  const pid = req.params.id;
  const productFileds: ProductBody = req.body;
  productService.patchProduct(pid, productFileds)
  return res.status(200).json({ message: "Product Updated Successfully" });
}

const deleteProduct = (req: Request, res: Response) => {
  const pid = req.params.id;
  productService.deleteProduct(pid)
  return res.status(200).json({ message: "Product Deleted Successfully" });
}

export default { addProduct, getProduct, getProducts, editProduct, deleteProduct }



