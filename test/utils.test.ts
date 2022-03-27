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

it('should valiadate product body', () => {
  expect(validateProductBody(body1)).toBe(true)
  expect(validateProductBody(body2)).toBe(false)
  expect(validateProductBody(body3)).toBe(false)
  expect(validateProductBody(body4)).toBe(true)
  expect(validateProductBody(body5)).toBe(false)
  expect(validateProductBody(body6)).toBe(true)

})