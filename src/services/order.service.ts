import OrderModelClass from '../models/order.model';
import { Order } from '../interfaces/interfaces';

class ProductServiceClass {
  constructor(private productModel = new OrderModelClass()) {}

  public getOrders = async (): Promise<Order[]> => {
    const orders: Order[] = await this.productModel.getAllOrders();
    return orders;
  };
}

export = ProductServiceClass;
