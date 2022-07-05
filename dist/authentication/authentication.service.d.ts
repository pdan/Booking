import { UserService } from 'src/user/user.service';
export declare class AuthenticationService {
    private readonly userService;
    constructor(userService: UserService);
    createToken(email: string, ttl?: number): {
        expires_in: number;
        access_token: string;
    };
    validateUser(payload: {
        email: string;
        password: string;
    }): Promise<boolean>;
}
