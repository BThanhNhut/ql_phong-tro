import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from 'src/roles/roles.entity';
import { JwtModule } from '@nestjs/jwt';
import { Accounts } from 'src/accounts/accounts.entity';
import { FurnituredetailsController } from './furnituredetails.controller';
import { FurnituredetailsService } from './furnituredetails.service';

@Module({
  imports: [TypeOrmModule.forFeature([Accounts, Roles])],
  controllers: [FurnituredetailsController],
  providers: [FurnituredetailsService],
})
export class FurnituredetailsModule {}
