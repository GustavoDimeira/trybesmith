import ProductModelClass from '../models/product.model';
import { Product } from '../interfaces/interfaces';

class ProductServiceClass {
  constructor(private productModel = new ProductModelClass()) {}

  public getProducts = async (): Promise<Product[]> => {
    const products: Product[] = await this.productModel.getAllProducts();
    return products;
  };

  public addProduct = async (name: string, amount: string): Promise<Product> => {
    const newProduct: Product = await this.productModel.addNewProduct(name, amount);
    return newProduct;
  };
}

export = ProductServiceClass;
