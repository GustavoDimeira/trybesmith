import { Request, Response, NextFunction } from 'express';

class MiddlewareClass {
  public nameValidation = (req: Request, res: Response, next: NextFunction): void => {
    const { name } = req.body;
    if (!name) {
      res.status(400).json({ message: '"name" is required' });
    } else if (typeof name !== 'string') {
      res.status(422).json({ message: '"name" must be a string' });
    } else if (name.length < 3) {
      res.status(422).json({ message: '"name" length must be at least 3 characters long' });
    } else {
      next();
    }
  };

  public amountValidation = (req: Request, res: Response, next: NextFunction): void => {
    const { amount } = req.body;
    if (!amount) {
      res.status(400).json({ message: '"amount" is required' });
    } else if (typeof amount !== 'string') {
      res.status(422).json({ message: '"amount" must be a string' });
    } else if (amount.length < 3) {
      res.status(422).json({ message: '"amount" length must be at least 3 characters long' });
    } else {
      next();
    }
  };
}

export = MiddlewareClass;
