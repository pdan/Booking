export interface User {
    id: string
    firstName: string
    lastName: string
    email: string
    phone: string
    password: string
    status: UserStatus
}

export enum UserStatus {
    ACTIVE = 'ACTIVE',
    INACTIVE = 'INACTIVE'
}