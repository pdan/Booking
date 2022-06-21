import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  index(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post()
  ceate(@Body() userData: User): Promise<any> {
    return this.userService.create(userData);
  }
}
