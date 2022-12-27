import connection from './connection';

class ProductModelClass {
  constructor(private Connection = connection) {}

  public getAllProducts = async () => {
    const [rows] = await this.Connection.execute(
      'SELECT * FROM Trybesmith.products',
    );
    return rows as [];
  };
}

export = ProductModelClass;
