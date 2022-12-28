import UserModelClass from '../models/user.model';
import { User } from '../interfaces/interfaces';

class UserServiceClass {
  constructor(private userModel = new UserModelClass()) {}

  public addUser = async (
    username: string,
    vocation: string,
    level: number,
    password: string,
  ): Promise<User> => {
    const newUser: User = await this.userModel.addNewUser(
      username,
      vocation,
      level,
      password,
    );
    return newUser;
  };
}

export = UserServiceClass;
