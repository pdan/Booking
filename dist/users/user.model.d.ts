export interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
    status: UserStatus;
}
export declare enum UserStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}
