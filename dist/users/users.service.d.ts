import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';
import { UsersFilterDto } from './dto/filter-users.dto';
export declare class UsersService {
    constructor();
    private users;
    getUsers(filters: UsersFilterDto): User[];
    createUser(createUserDto: CreateUserDto): User;
    updateUser(): void;
}
