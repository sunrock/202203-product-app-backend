import { v4 as uuidv4 } from 'uuid';
import { Product, ProductBody } from '../models/product';
import fileIO from '../utils/file-io';

const addProduct = (productFileds: ProductBody) => {
  // add the product
  let productIds: string[] = fileIO.getProducts().map(pd => pd.pid)

  // new product id
  let pid = uuidv4();

  let newPid = uuidv4();
  while (productIds.includes(newPid)) {
    newPid = uuidv4();
  }

  let newProduct: Product = {
    pid, ...productFileds
  }

  fileIO.saveProduct(newProduct);
}

const getProduct = (pid: string): Product | Error => {

  const targetProduct = fileIO.getProduct(pid)
  if (!targetProduct) {
    throw new Error('Product Not Found');
  }
  else {
    return targetProduct
  }
}

const getProducts = () => {
  return fileIO.getProducts()
}

const patchProduct = (pid: string, productFileds: ProductBody) => {

  const patched: Product = {
    pid, ...productFileds
  }

  const list: Product[] = fileIO.getProducts()

  const newList = list.map(product => {
    if (product.pid !== pid)
      return product
    else {
      return patched
    }
  })

  fileIO.saveProducts(newList)
}

const deleteProduct = (pid: string) => {
  fileIO.deleteProduct(pid)
}

export default { addProduct, getProduct, getProducts, patchProduct, deleteProduct }