import { Module } from "@nestjs/common";
import { UserContoller } from "@app/user/user.controller";
import { UserService } from "@app/user/user.service";

@Module({
  controllers: [UserContoller],
  providers: [UserService]
})
export class UserModule {}