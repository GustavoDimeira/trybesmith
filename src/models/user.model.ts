import { ResultSetHeader } from 'mysql2/promise';

import connection from './connection';
import { User } from '../interfaces/interfaces';

class UserModelClass {
  constructor(private Connection = connection) {}

  public addNewUser = async (
    username: string,
    vocation: string,
    level: number,
    password: string,
  ): Promise<User> => {
    const [dataInserted] = await this.Connection.execute<ResultSetHeader>(
      `
      INSERT INTO Trybesmith.users (username, vocation, level, password)
      VALUES (?, ?, ?, ?)
      `,
      [username, vocation, level, password],
    );
    const { insertId } = dataInserted;
    return {
      id: insertId, username, vocation, level, password,
    } as User;
  };
}

export = UserModelClass;
