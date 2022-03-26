import express from 'express';
import productController from '../controllers/product-controller';
import productValidator from '../controllers/product-validator';

const router = express.Router();

router.use('/product', productValidator.validateProductFileds)
router.post('/product', productController.addProduct)

router.get('/products', productController.getProducts)

router.use('/product/:id', productValidator.checkExistingProduct)
router.use('/product/:id', productValidator.validateProductFileds)

router.get('/product/:id', productController.getProduct);
router.put('/product/:id', productController.editProduct);
router.patch('/product/:id', productController.editProduct);
router.delete('/product/:id', productController.deleteProduct);

export = router