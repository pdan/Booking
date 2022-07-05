import { IsEnum, IsMobilePhone, IsEmail } from "class-validator";
import { UserStatus } from "../user.model"

export class UpdateUserDto {
    firstName: string
    lastName: string

    @IsEmail()
    email: string

    @IsMobilePhone()
    phone: string
    password: string

    @IsEnum(UserStatus)
    status: UserStatus
}