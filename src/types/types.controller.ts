import { Controller, Get } from '@nestjs/common';
import { TypesService } from './types.service';

@Controller('types')
export class TypesController {
  constructor(private readonly typesServices: TypesService) {}

  @Get()
  findAllTypes(): Promise<any[]> {
    console.log('co vao');
    return this.typesServices.findAllTypes();
  }
}
