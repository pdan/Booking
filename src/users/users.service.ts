import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserStatus } from './user.model';
import { v4 as uuid } from 'uuid';
import { UsersFilterDto } from './dto/filter-users.dto';

@Injectable()
export class UsersService {
  constructor() {}

  private users: User[] = [];

  getUsers(filters: UsersFilterDto): User[] {
    return this.users
  }

  createUser(createUserDto: CreateUserDto): User {
    const { firstName, lastName, email, phone, password } = createUserDto;
    const user: User = {
      id: uuid(),
      firstName,
      lastName,
      email,
      phone,
      password,
      status: UserStatus.INACTIVE,
    };
    this.users.push(user);
    return user;
  }

  updateUser( ) {

  }
}
