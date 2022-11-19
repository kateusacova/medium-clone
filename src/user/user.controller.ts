import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "@app/user/user.service";
import { CreateUserDto } from "@app/user/dto/createUser.dto";

@Controller()
export class UserContoller {
  constructor(private readonly userService: UserService) {}
  @Post('api/users')
  async createUser(@Body('user') createUserDto: CreateUserDto): Promise<any> {
    console.log('createUser', createUserDto);
    return this.userService.createUser(createUserDto);
  }
}