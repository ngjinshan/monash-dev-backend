import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET_KEY } from 'src/common/constants';
import { UsersService } from 'src/users/users.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: JWT_SECRET_KEY,
    signOptions: {expiresIn: '1d'}
  })],
  providers: [AuthService, LocalStrategy, UsersService, JwtStrategy],
})

export class AuthModule {}
