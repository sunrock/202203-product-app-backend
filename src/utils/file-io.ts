import fs from 'fs'
import { Product } from '../models/product';

const dataPath = './src/data/products.json';
const ENCODING = 'utf8'

// util functions
const saveProducts = (products: Product[], path = dataPath) => {
  const stringifyData = JSON.stringify(products)
  fs.writeFileSync(path, stringifyData)
}

const saveProduct = (item: Product, path = dataPath) => {
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, JSON.stringify([item]));
  } else {
    let list: Product[] = getProducts(path)
    list.push(item)
    fs.writeFileSync(path, JSON.stringify(list));
  }
}

const getProducts = (path = dataPath): Product[] => {
  const existingData = fs.readFileSync(path, ENCODING)
  const list: Product[] = (existingData.length) ? JSON.parse(existingData) : [];
  if (list instanceof Array)
    return list
  else
    return []
}

const getProduct = (pid: string, path = dataPath): Product => {
  const list: Product[] = getProducts(path)
  const targetProduct = list.find(product => product.pid === pid) as Product
  return targetProduct
}

const deleteProducts = (path = dataPath) => {
  const stringifyData = JSON.stringify([])
  fs.writeFileSync(path, stringifyData)
}

const deleteProduct = (pid: string, path = dataPath) => {
  const list: Product[] = getProducts(path).filter(product => product.pid !== pid)
  const stringifyData = JSON.stringify(list)
  fs.writeFileSync(path, stringifyData)
}

export default { saveProducts, saveProduct, getProducts, getProduct, deleteProducts, deleteProduct };