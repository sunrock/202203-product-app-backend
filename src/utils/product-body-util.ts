import { ProductBody, PROD_TYPE } from "../models/product";
import { NAME_MAX_LENGH, PRICE_REGEX, TYPE_REGEX } from "../config";


export const validateProductBody = (productBody: ProductBody): boolean => {
  const name: string = productBody.name;
  const price: number = productBody.price;
  const type: string = productBody.type;
  const isActive: boolean = productBody.isActive;

  const hasAllFields = !!name && !!price && !!type && (isActive !== undefined);

  const isNameValid = name.length <= NAME_MAX_LENGH;
  const isPriceValid = PRICE_REGEX.test(price.toString());
  const isTypeValid = TYPE_REGEX.test(type)
  // const isTypeValid_v2 = PROD_TYPE.includes(type)

  const isProductValid = hasAllFields && isNameValid && isPriceValid && isTypeValid;

  return isProductValid
}