import { Controller, Get } from "@nestjs/common";
import { TagService } from "./tag.service";

@Controller('api/tags') // path is specified here
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get() //GET request - decorator - must be there for every function
  findAll(): string[] {
    return this.tagService.findAll();
  }
}