import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';
import { UsersFilterDto } from './dto/filter-users.dto';
export declare class UsersService {
    constructor();
    private users;
    getUser(id: string): User;
    getUsers(filters: UsersFilterDto): User[];
    deleteUser(id: string): void;
    createUser(createUserDto: CreateUserDto): User;
    updateUser(): void;
}
