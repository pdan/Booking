import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { User } from './user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(email: string): Promise<User>;
    create(user: User): Promise<User>;
    update(user: User): Promise<UpdateResult>;
    delete(id: number): Promise<DeleteResult>;
}
