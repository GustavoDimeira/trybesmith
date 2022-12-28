import { ResultSetHeader } from 'mysql2/promise';

import connection from './connection';
import { Product } from '../interfaces/product.interface';

class ProductModelClass {
  constructor(private Connection = connection) {}

  public getAllProducts = async (): Promise<Product[]> => {
    const [products] = await this.Connection.execute(
      'SELECT * FROM Trybesmith.products',
    );
    return products as Product[];
  };

  public addNewProduct = async (name: string, amount: string): Promise<Product> => {
    const [dataInserted] = await this.Connection.execute<ResultSetHeader>(
      `
      INSERT INTO Trybesmith.products (name, amount)
      VALUES (?, ?)
      `,
      [name, amount],
    );
    const { insertId } = dataInserted;
    return {
      id: insertId,
      name,
      amount,
    } as Product;
  };
}

export = ProductModelClass;
