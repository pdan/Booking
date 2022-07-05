import { UserStatus } from "../user.model";
export declare class UpdateUserDto {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    status: UserStatus;
}
