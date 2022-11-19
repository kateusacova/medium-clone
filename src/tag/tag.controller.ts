import { Controller, Get } from "@nestjs/common";
import { TagService } from "@app/tag/tag.service";

@Controller('api/tags') // path is specified here
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get() //GET request - decorator - must be there for every function
  async findAll(): Promise<{ tags: string[] }> {
    const tags = await this.tagService.findAll();
    return {
      tags: tags.map((tag) => tag.name)
    };
  }
}