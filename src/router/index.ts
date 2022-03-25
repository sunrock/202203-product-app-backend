import express from 'express';
import productController from '../controllers/product-controller';
import productValidator from '../controllers/product-validator';

const router = express.Router();

router.use('product/new', productValidator.validateNewProduct)
router.get('/product/:id', productController.getProduct);

// router.post('/product/new', productController.addBankAccount);

// router.get('/balance/:id', productController.getBalance);
// router.get('/total-balance', productController.getTotalBalance);
// router.post('/accounts', productController.addBankAccount);
// router.post('/transfer', productController.transfer)
// router.post('/deposit', productController.deposit)
// router.post('/withdraw', productController.withdraw)

export = router