import { ProductBody, PROD_TYPES } from "../models/product";
import { NAME_MAX_LENGH, PRICE_REGEX, TYPE_REGEX } from "../config";


export const validateProductBody = (productFileds: ProductBody): boolean => {

  const name: string = productFileds.name;
  const price: number = productFileds.price;
  const type: string = productFileds.type;
  const isActive: boolean = productFileds.isActive;

  console.log('name', !!name)
  console.log('price', price > 0)
  console.log('type', !!type)
  console.log('isActive', isActive !== undefined)

  const hasAllFields = !!name && (price > 0) && !!type && (isActive !== undefined);

  console.log('hasAllFields', hasAllFields)

  if (hasAllFields) {
    const isNameValid = name.length <= NAME_MAX_LENGH;
    const isPriceValid = PRICE_REGEX.test(price.toString());
    const isTypeValid = TYPE_REGEX.test(type)
    // const isTypeValid_v2 = PROD_TYPES.includes(type)

    console.log('3 checking', isNameValid, isPriceValid, isTypeValid)

    return isNameValid && isPriceValid && isTypeValid;
  }
  else
    return false
}