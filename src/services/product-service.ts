import { v4 as uuidv4 } from 'uuid';
import { Product, ProductBody } from '../models/product';
import fileIO from '../utils/file-io';





const addProduct = async (productBody: ProductBody) => {
  // add the product
  let products: Product[] = await fileIO.getProducts()

  // new product id
  let pid = uuidv4();

  console.log()

  let newAccount: Product = {
    pid,
    ...productBody
  }

  let newAccounts = products.concat(newAccount)

  fileIO.saveProducts(newAccounts);
}

const getProduct = (pid: string): Product => {

  const targetProduct = fileIO.getProduct(pid)
  if (!targetProduct) {
    throw new Error('Product Not Found');
  }
  else {
    return targetProduct
  }
}

export default { getProduct }