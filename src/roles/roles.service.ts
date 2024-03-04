import { Injectable } from "@nestjs/common";
import { Roles } from './roles.entity';
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class RolesService {
  constructor(@InjectRepository(Roles) private rolesRepo: Repository<Roles>) {}

  async findAll(): Promise<Roles[]> {
    return this.rolesRepo.find();
  }
}