import { Product, PROD_TYPES } from "../src/models/product";
import productService from "../src/services/product-service";

let fileIoSpy: any

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
  fileIoSpy = {
    saveProduct: jest.fn(),
    getProducts: jest.fn(),
    getProduct: jest.fn(),
    deleteProduct: jest.fn()
  };
})

it("should add a product", () => {
  // jest.spyOn(fileIoSpy, 'saveProduct').mockReturnValue("OK")
  productService.addProduct(tobeAdded)
  expect(fileIoSpy.saveProduct).toBeCalledTimes(1)
})

/*
it("should get all products", () => {

  productService.getProducts()
  expect(fileIoSpy.getProducts).toBeCalledTimes(1)

})

it("should test get product by id", () => {
  productService.getProduct(demoProduct.pid)
  expect(fileIo.getProducts).toBeCalledTimes(1)
  expect(fileIo.getProducts).toBeCalledWith(demoProduct.pid)
})

it("should throw error when get product by id", () => {

  const pid = 'xxx';

  let error =  new Error('Product Not Found')
  let result = productService.getProduct(pid)

  expect(fileIo.getProduct).toBeCalledTimes(1)
  expect(fileIo.getProduct).toBeCalledWith(pid)
  expect(result).toThrowError(error)

})

*/
