import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { FortyTwoStrategyStrategy } from './42.strategy';
import { AuthService } from './auth.service';


@Module({
  imports: [PassportModule, UsersModule],
  providers: [AuthService, FortyTwoStrategyStrategy]
})
export class AuthModule {}
