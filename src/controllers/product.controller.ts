import { Request, Response } from 'express';
import ProductServiceClass from '../services/product.service';

import { Product } from '../interfaces/interfaces';

class ProductControllerClass {
  constructor(private productService = new ProductServiceClass()) {}

  public getProducts = async (_req: Request, res: Response): Promise<void> => {
    const products: Product[] = await this.productService.getProducts();
    res.status(200).json(products);
  };

  public addProduct = async (req: Request, res: Response): Promise<void> => {
    const { name, amount } = req.body;
    const product: Product = await this.productService.addProduct(name, amount);
    res.status(201).json(product);
  };  
}

export = ProductControllerClass;
