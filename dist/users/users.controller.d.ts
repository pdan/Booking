import { CreateUserDto } from './dto/create-user.dto';
import { UsersFilterDto } from './dto/filter-users.dto';
import { User } from './user.model';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    getUsers(filterDto: UsersFilterDto): User[];
    getUser(id: string): User;
    deleteUser(id: string): void;
    createUser(createUserDto: CreateUserDto): User;
}
