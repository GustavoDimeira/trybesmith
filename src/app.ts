import express from 'express';

import ProductControllerClass from './controllers/product.controller';
import OrderControllerClass from './controllers/order.controller';
import UserControllerClass from './controllers/user.controller';
import PostControllerClass from './controllers/login.controller';

import MiddlewareClass from './middleware/middleware.class';
 
const orderController = new OrderControllerClass();
const productController = new ProductControllerClass();
const middlewares = new MiddlewareClass();
const userController = new UserControllerClass();
const postController = new PostControllerClass();

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

app.post(
  '/users',
  middlewares.userNameValidation,
  middlewares.vocationValidation,
  middlewares.levelValidation,
  middlewares.passwordValidation,
  userController.addUser,
);

app.post(
  '/login',
  middlewares.userNameValidation,
  middlewares.passwordValidation,
  postController.login,
);

export default app;
