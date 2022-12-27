import { Request, Response } from 'express';
import ProductServiceClass from '../services/product.service';

class ProductControllerClass {
  constructor(private productService = new ProductServiceClass()) {}

  public getProducts = async (_req: Request, res: Response) => {
    const products = await this.productService.getProducts();
    res.status(200).json(products);
  };
}

export = ProductControllerClass;
