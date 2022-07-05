import { UserStatus } from "../user.model"

export class UsersFilterDto {
    lastName?: string
    phone?: string
    email?: string
    status?: UserStatus

}