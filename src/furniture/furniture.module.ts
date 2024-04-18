import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from 'src/roles/roles.entity';
import { Accounts } from 'src/accounts/accounts.entity';
import { FurnitureController } from './furniture.controller';
import { FurnitureService } from './furniture.service';

@Module({
  imports: [TypeOrmModule.forFeature([Accounts, Roles])],
  controllers: [FurnitureController],
  providers: [FurnitureService],
})
export class FurnitureModule {}
