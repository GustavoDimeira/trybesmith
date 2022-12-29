import { Request, Response } from 'express';
import LoginServiceClass from '../services/login.service';

import { LoginResponse } from '../interfaces/interfaces';

class PostControllerClass {
  constructor(private loginService = new LoginServiceClass()) {}

  public login = async (req: Request, res: Response): Promise<void> => {
    const { username, password } = req.body;

    const response: LoginResponse = await this.loginService.login(username, password);
    if (response.hasFail) {
      res.status(401).json({ message: 'Username or password invalid' });
    } else {
      res.status(200).json({ token: response.token });
    }
  };
}

export = PostControllerClass;
