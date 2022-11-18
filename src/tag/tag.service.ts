import { Injectable } from "@nestjs/common";

@Injectable()

export class TagService {
  findAll(): string[] { //every method mush have the type
    return ['dragons', 'coffee', 'hello'];
  }
}