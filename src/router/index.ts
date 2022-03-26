import express from 'express';
import productController from '../controllers/product-controller';
import productValidator from '../controllers/product-validator';

const router = express.Router();

router.use('/product/new', productValidator.validateProductFileds)
router.get('/products', productController.getProducts)

router.use('/product/:id', productValidator.checkExistingProduct)
router.use('/product/:id', productValidator.validateProductFileds)

router.get('/product/:id', productController.getProduct);
router.put('/product/:id', productController.editProduct);
router.patch('/product/:id', productController.editProduct);

export = router