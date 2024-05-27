import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from 'src/roles/roles.entity';
import { InvoicesController } from './invoices.controller';
import { InvoicesService } from './invoices.service';
import { Invoices } from './invoices.entity';
import { Accounts } from 'src/accounts/accounts.entity';
import { Rooms } from 'src/rooms/rooms.entity';
import { Contracts } from 'src/contracts/contracts.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Roles, Invoices, Accounts, Rooms, Contracts]),
  ],
  controllers: [InvoicesController],
  providers: [InvoicesService],
})
export class InvoicesModule {}
