import express from 'express';
import ProductControllerClass from './controller/product.controller';

const productController = new ProductControllerClass();

const app = express();

app.use(express.json());

app.get('/products', productController.getProducts);

export default app;
