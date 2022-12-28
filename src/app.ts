import express from 'express';

import ProductControllerClass from './controllers/product.controller';
import OrderControllerClass from './controllers/order.controller';
import UserControllerClass from './controllers/user.controller';

import MiddlewareClass from './middleware/middleware.class';
 
const orderController = new OrderControllerClass();
const productController = new ProductControllerClass();
const middlewares = new MiddlewareClass();
const userController = new UserControllerClass();

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

app.post('/users', userController.addUser);

export default app;
