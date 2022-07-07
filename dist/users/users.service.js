"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const user_model_1 = require("./user.model");
const uuid_1 = require("uuid");
let UsersService = class UsersService {
    constructor() {
        this.users = [];
    }
    getUser(id) {
        const user = this.users.find((user) => user.id === id);
        if (!user)
            throw new common_1.NotFoundException(`Task with ID ${id} not found`);
        return user;
    }
    getUsers(filters) {
        if (filters.email)
            return this.users.filter((user) => user.email === filters.email);
        if (filters.phone)
            return this.users.filter((user) => user.phone === filters.phone);
        if (filters.lastName)
            return this.users.filter((user) => user.lastName === filters.lastName);
        if (filters.status)
            return this.users.filter((user) => user.status === filters.status);
        return this.users;
    }
    deleteUser(id) {
        this.users = this.users.filter(u => u.id !== id);
    }
    createUser(createUserDto) {
        const { firstName, lastName, email, phone, password } = createUserDto;
        const user = {
            id: (0, uuid_1.v4)(),
            firstName,
            lastName,
            email,
            phone,
            password,
            status: user_model_1.UserStatus.INACTIVE,
        };
        this.users.push(user);
        return user;
    }
    updateUser() { }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map