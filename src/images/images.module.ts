import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthModule } from "src/auth/auth.module";
import { AuthService } from "src/auth/auth.service";
import { JWT_SECRET_KEY } from "src/common/constants";
import { UsersService } from "src/users/users.service";
import { ImagesController } from "./images.controller";
import { ImagesService } from "./images.service";

@Module({
    imports: [HttpModule, AuthModule, JwtModule.register({
        secret: JWT_SECRET_KEY,
        signOptions: { expiresIn: '7d'}
      })],
    controllers: [ImagesController],
    providers: [ImagesService, AuthService, UsersService]
})
export class ImagesModule {}