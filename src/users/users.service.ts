import { Injectable } from '@nestjs/common';
import { User } from './user.model';


@Injectable()
export class UsersService {
  private readonly users = [
    {
      username: 'admin1',
      password: 'password',
    },
    {
      username: 'admin2',
      password: 'password',
    },
  ];

  //In a real case scenario, we would use a database and a microservice API that connects to the user database
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username);
  }
}