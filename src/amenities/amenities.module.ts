import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from 'src/roles/roles.entity';
import { JwtModule } from '@nestjs/jwt';
import { Accounts } from 'src/accounts/accounts.entity';
import { AmenitiesController } from './amenities.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Accounts, Roles])],
  controllers: [AmenitiesController],
  providers: [AmenitiesController],
})
export class AmenitiesModule {}
