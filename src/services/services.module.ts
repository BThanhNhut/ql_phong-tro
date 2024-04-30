import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from 'src/roles/roles.entity';
import { JwtModule } from '@nestjs/jwt';
import { Accounts } from 'src/accounts/accounts.entity';
import { ServicesController } from './services.controller';
import { ServicesService } from './services.service';
import { Services } from './services.entity';
import { Servicedetails } from 'src/servicedetails/servicedetails.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Accounts, Roles, Services, Servicedetails]),
  ],
  controllers: [ServicesController],
  providers: [ServicesService],
})
export class ServicesModule {}
