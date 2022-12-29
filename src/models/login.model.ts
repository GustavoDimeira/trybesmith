import connection from './connection';
import { DbLoginAnswer } from '../interfaces/interfaces';

class LoginModelClass {
  constructor(private Connection = connection) {}

  public verifyLogin = async (userName: string): Promise<DbLoginAnswer[]> => {
    const [response] = await this.Connection.execute(
      `
      SELECT username, password FROM Trybesmith.users as u
      WHERE u.username = ?
      `,
      [userName],
    );
    return response as DbLoginAnswer[];
  };
}

export = LoginModelClass; 
