import { Controller, Get } from "@nestjs/common";

@Controller('api/tags') // path is specified here
export class TagController {
  @Get() //GET request - decorator - must be there for every function
  findAll() {
    return ['dragons', 'coffee'];
  }
}