import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import UserServiceClass from '../services/user.service';
import { User } from '../interfaces/interfaces';

const secret = process.env.JWT_SECRET || 'secret';

class ProductControllerClass {
  constructor(private userService = new UserServiceClass()) {}

  public addUser = async (req: Request, res: Response): Promise<void> => {
    const { username, vocation, level, password } = req.body;
    const user: User = await this.userService.addUser(username, vocation, level, password);
    const token = jwt.sign(
      user,
      secret,
      { expiresIn: '24h', algorithm: 'HS256' },
    );
    res.status(201).json({ token });
  };  
}

export = ProductControllerClass;
