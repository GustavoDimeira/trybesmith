import express from 'express';
import ProductControllerClass from './controllers/product.controller';
import OrderControllerClass from './controllers/order.controller';

import MiddlewareClass from './middleware/middleware.class';
 
const orderController = new OrderControllerClass();
const productController = new ProductControllerClass();
const middlewares = new MiddlewareClass();

const app = express();

app.use(express.json());

app.get('/products', productController.getProducts);

app.post(
  '/products',
  middlewares.nameValidation,
  middlewares.amountValidation,
  productController.addProduct,
);

app.get('/orders', orderController.getOrders);

export default app;
