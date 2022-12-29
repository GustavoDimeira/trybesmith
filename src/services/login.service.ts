import jwt from 'jsonwebtoken';
import LoginModelClass from '../models/login.model';

import { LoginResponse, DbLoginAnswer } from '../interfaces/interfaces';

const secret = process.env.JWT_SECRET || 'secret';

class LoginServiceClass {
  constructor(private loginModel = new LoginModelClass()) {}

  public login = async (userName: string, password: string): Promise<LoginResponse> => {
    const dbAnswer: DbLoginAnswer[] = await this.loginModel.verifyLogin(userName);
    const passwordDB = dbAnswer[0]?.password;
    if (passwordDB !== password) {
      return { token: null, hasFail: true };
    }
    const { username } = dbAnswer[0];
    const token = jwt.sign(
      { username },
      secret,
      { expiresIn: '24h', algorithm: 'HS256' },
    );
    return { token, hasFail: false };
  };
}

export = LoginServiceClass;
