import { Product, ProductBody } from '../models/product';
import { NextFunction, Request, Response } from 'express';
import productService from '../services/product-service';


const addNewProduct = async (req: Request, res: Response) => {

  let productBody: ProductBody = req.body;

  let name: string = productBody.name;
  let price: number = productBody.price;
  let type: string = productBody.type;
  let isActive: boolean = productBody.isActive;

  // fileIO.saveBankAccounts(newAccounts).then(
  //   () => {
  //     return res.status(201).json({
  //       message: "Accounts are saved successfully."
  //     });
  //   }
  // ).catch(
  //   () => {
  //     return res.status(404).json({
  //       message: "Accounts are not saved."
  //     });
  //   }
  // )

  // return res.status(201).json({
  //   message: "Accounts are saved successfully.",
  //   id: newId
  // });
}

const getProduct = (req: Request, res: Response, next: NextFunction) => {

  let pid = req.params.id;

  try {
    let product = productService.getProduct(pid)
    return res.status(200).json({ data: product, message: "Product Retrieved Successfully" });
  } catch (e: any) {
    res.status(404);
    next(e)
  }

}

export default { getProduct }



