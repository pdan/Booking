import { Module } from '@nestjs/common';
import { AuthService } from './service/authentication.service';
import { AuthenticationController } from './controller/authentication.controller';

@Module({
  providers: [AuthService],
  controllers: [AuthenticationController]
})
export class AuthenticationModule {}
