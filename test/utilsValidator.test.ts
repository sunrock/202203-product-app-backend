import { ProductBody, PROD_TYPES } from '../src/models/product'
import { validateProductBody } from '../src/utils/product-body-util'

// true
const body1: ProductBody = {
  name: 'abc',
  price: 12.34,
  type: PROD_TYPES[0],
  isActive: true
}

const body2 = {
  ...body1,
  name: 'qwertyuiop_qwertyuiop_qwertyuiop_qwertyuiop_qwertyuiop_qwertyuiop_qwertyuiop_qwertyuiop_qwertyuiop_qwertyuiop'
}

const body3 = {
  ...body1,
  price: 12.345
}

// true
const body4 = {
  ...body1,
  price: 12.3
}

const body5 = {
  ...body1,
  price: 12.
}

// true
const body6 = {
  ...body1,
  price: 12
}

const body7 = {
  ...body1,
  type: 'Toy'
}

const body8 = {
  ...body1,
  type: PROD_TYPES[1],
}

const body9 = {
  ...body1,
  type: PROD_TYPES[2],
}

const body10 = {
  ...body1,
  type: PROD_TYPES[3],
}

const body11 = {
  ...body1,
  type: PROD_TYPES[4],
}

const body12 = {
  ...body1,
  isActive: false
}

const body13 = {
  price: 12.34,
  type: PROD_TYPES[0],
  isActive: true
}

const body14 = {
  name: 'abc',
  type: PROD_TYPES[0],
  isActive: true
}

const body15 = {
  name: 'abc',
  price: 12.34,
  isActive: true
}

const body16 = {
  name: 'abc',
  price: 12.34,
  type: PROD_TYPES[0]
}

it('should valiadate product body', () => {
  expect(validateProductBody(body1)).toBe(true)
  expect(validateProductBody(body2)).toBe(false)
  expect(validateProductBody(body3)).toBe(false)
  expect(validateProductBody(body4)).toBe(true)
  // false?
  expect(validateProductBody(body5)).toBe(true)
  expect(validateProductBody(body6)).toBe(true)

  expect(validateProductBody(body7)).toBe(false)
  expect(validateProductBody(body8)).toBe(true)
  expect(validateProductBody(body9)).toBe(true)
  expect(validateProductBody(body10)).toBe(true)
  expect(validateProductBody(body11)).toBe(true)
  expect(validateProductBody(body12)).toBe(true)
  expect(validateProductBody(body13)).toBe(false)
  expect(validateProductBody(body14)).toBe(false)
  expect(validateProductBody(body15)).toBe(false)
  expect(validateProductBody(body16)).toBe(false)

})