// import { ResultSetHeader } from 'mysql2/promise';

import connection from './connection';
import { Order } from '../interfaces/interfaces';

class OrderModelClass {
  constructor(private Connection = connection) {}

  public getAllOrders = async (): Promise<Order[]> => {
    const [products] = await this.Connection.execute(
      `
      SELECT o.id as id, o.user_id as userId, JSON_ARRAYAGG(p.id) as productsIds
      FROM Trybesmith.orders as o
      INNER JOIN Trybesmith.products as p
      WHERE p.order_id = o.id
      GROUP BY o.id
      `
      ,
    );
    return products as Order[];
  };
}

export = OrderModelClass;
