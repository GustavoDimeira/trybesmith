import ProductModelClass from '../models/product.model';
// import Product from '../interfaces/product.interface';

class ProductServiceClass {
  constructor(private productModel = new ProductModelClass()) {}

  public getProducts = async (): Promise<[]> => {
    const products = await this.productModel.getAllProducts();
    return products;
  };
}

export = ProductServiceClass;
