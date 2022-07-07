import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User, UserStatus } from './user.model';
import { v4 as uuid } from 'uuid';
import { UsersFilterDto } from './dto/filter-users.dto';

@Injectable()
export class UsersService {
  constructor() {}

  private users: User[] = [];

  getUser(id: string): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException(`Task with ID ${id} not found`);
    return user;
  }

  getUsers(filters: UsersFilterDto): User[] {
    if (filters.email)
      return this.users.filter((user) => user.email === filters.email);
    if (filters.phone)
      return this.users.filter((user) => user.phone === filters.phone);
    if (filters.lastName)
      return this.users.filter((user) => user.lastName === filters.lastName);
    if (filters.status)
      return this.users.filter((user) => user.status === filters.status);
    return this.users;
  }

  deleteUser(id: string) {
    this.users = this.users.filter( u => u.id !== id)
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

  updateUser() {}
}
