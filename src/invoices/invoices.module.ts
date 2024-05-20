import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from 'src/roles/roles.entity';
import { InvoicesController } from './invoices.controller';
import { InvoicesService } from './invoices.service';
import { Invoices } from './invoices.entity';
import { Accounts } from 'src/accounts/accounts.entity';
import { Rooms } from 'src/rooms/rooms.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Roles, Invoices, Accounts, Rooms])],
  controllers: [InvoicesController],
  providers: [InvoicesService],
})
export class InvoicesModule {}
