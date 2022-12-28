import { Request, Response } from 'express';
import OrderServiceClass from '../services/order.service';

import { Order } from '../interfaces/interfaces';

class ProductControllerClass {
  constructor(private orderService = new OrderServiceClass()) {}

  public getOrders = async (_req: Request, res: Response): Promise<void> => {
    const orders: Order[] = await this.orderService.getOrders();
    res.status(200).json(orders);
  };
}

export = ProductControllerClass;
