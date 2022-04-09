import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { JWT_SECRET_KEY } from './common/constants';
import { ImagesModule } from './images/images.module';
import { UsersService } from './users/users.service';

@Module({
  imports: [ImagesModule, AuthModule, JwtModule.register({
    secret: JWT_SECRET_KEY,
    signOptions: { expiresIn: '7d'}
  })],
  controllers: [AppController],
  providers: [AppService, AuthService, UsersService],
})
export class AppModule {}
