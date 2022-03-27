import { Product, PROD_TYPES } from "../src/models/product";
import fileIo from "../src/utils/file-io";
import productService from "../src/services/product-service";


let fileIoSpy = {
  saveProduct: jest.fn(),
  getProducts: jest.fn(),
  getProduct: jest.fn(),
  deleteProduct: jest.fn()
};

const demoProduct: Product = {
  pid: 'abc',
  name: 'abc',
  price: 12.34,
  type: PROD_TYPES[3],
  isActive: true
}

const tobeAdded = {
  name: 'def',
  price: 98.76,
  type: PROD_TYPES[2],
  isActive: true
}

beforeEach(() => {
  fileIo.saveProducts([demoProduct])
})

it("should add a product", () => {
  productService.addProduct(tobeAdded)

  expect(fileIo.getProducts().length).toBe(2)
  expect(!!fileIo.getProducts().find(
    p => p.name === tobeAdded.name
  )).toBe(true)
})

it("should get all products", () => {

  const products = productService.getProducts()
  
  expect(products.length).toBe(1)
  expect(!!products.find(
    p => p.pid === demoProduct.pid
  )).toBe(true)
})

it("should test get a product by id", () => {

  const product = productService.getProduct(demoProduct.pid)
  expect(product).toEqual(demoProduct)
})

/*
it("should throw error when get product by id", () => {

  const pid = 'xxx';

  let error =  new Error('Product Not Found')
  let result = productService.getProduct(pid)

  expect(fileIo.getProduct).toBeCalledTimes(1)
  expect(fileIo.getProduct).toBeCalledWith(pid)
  expect(result).toThrowError()
})
*/

it("should test edit a product by id", () => {
  productService.patchProduct(demoProduct.pid, tobeAdded)
  expect(!!fileIo.getProducts().find(
    p => p.pid === demoProduct.pid && p.name === tobeAdded.name
  ))
})

it("should test delete a product by id", () => {
  productService.deleteProduct(demoProduct.pid)
  expect(fileIo.getProducts().length).toBe(0)
})





