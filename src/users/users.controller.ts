import { Body, Controller, Delete, Get, Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersFilterDto } from './dto/filter-users.dto';
import { User } from './user.model';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private usersService:UsersService) {}

    @Get()
    getUsers(@Query() filterDto:UsersFilterDto) {
        return this.usersService.getUsers(filterDto)
    }

    @Get('/:id')
    getUser(@Param('id') id:string) {
        return this.usersService.getUser(id)
    }

    @Delete('/:id')
    deleteUser(@Param('id') id:string) {
        return this.usersService.deleteUser(id)
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto):User {
        return this.usersService.createUser(createUserDto)
    }


}
