import { Module } from '@nestjs/common';
import { RolesController } from './roles.controller';
import { RolesService } from './roles.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from './roles.entity';
import { Accounts } from 'src/accounts/accounts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Accounts,Roles])],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
