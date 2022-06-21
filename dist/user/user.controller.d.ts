import { User } from './user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    index(): Promise<User[]>;
    ceate(userData: User): Promise<any>;
}
