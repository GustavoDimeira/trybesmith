import express from 'express';
import ProductControllerClass from './controllers/product.controller';
import MiddlewareClass from './middleware/middleware.class';

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

export default app;
