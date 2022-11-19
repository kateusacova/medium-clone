import { Module } from "@nestjs/common";
import { UserContoller } from "@app/user/user.controller";
import { UserService } from "@app/user/user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserContoller],
  providers: [UserService]
})
export class UserModule {}