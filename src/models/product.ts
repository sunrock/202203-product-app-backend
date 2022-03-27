export interface Product {
  pid: string;
  name: string;
  price: number;
  type: string;
  isActive: boolean;
}

export interface ProductBody {
  name: string;
  price: number;
  type: string;
  isActive: boolean;
}

export const PROD_TYPES = [
  'Books', 'Electronics', 'Food', 'Furniture', 'Toys'
]