import { Controller, Get, Param, ParseIntPipe } from "@nestjs/common";
import { RolesService } from "./roles.service";
import { Roles } from './roles.entity';

@Controller('/roles')
export class RolesController {
  constructor(private readonly rolesservice: RolesService) {}
  @Get()
  async findAll(): Promise<Roles[]> {
    return this.rolesservice.findAll();
  }

  @Get(':id')
  getAccountById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return 'ket qua la roles' + id;
  }
}