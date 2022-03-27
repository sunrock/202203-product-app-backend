import { ProductBody, PROD_TYPES } from "../models/product";
import { NAME_MAX_LENGH, PRICE_REGEX, TYPE_REGEX } from "../config";


export const validateProductBody = (productFileds: any): boolean => {

  const name: string = productFileds.name;
  const price: number = productFileds.price;
  const type: string = productFileds.type;
  const isActive: boolean = productFileds.isActive;

  const hasAllFields = !!name && (price > 0) && !!type && (isActive !== undefined);

  if (hasAllFields) {
    const isNameValid = name.length <= NAME_MAX_LENGH;
    const isPriceValid = PRICE_REGEX.test(price.toString());
    const isTypeValid = TYPE_REGEX.test(type)
    // const isTypeValid_v2 = PROD_TYPES.includes(type)

    return isNameValid && isPriceValid && isTypeValid;
  }
  else
    return false
}