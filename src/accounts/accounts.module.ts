import { Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Accounts } from './accounts.entity';
import { AuthService } from './auth.service';
import { Roles } from 'src/roles/roles.entity';
import { JwtModule } from '@nestjs/jwt';
import { Contracts } from 'src/contracts/contracts.entity';
import { Rooms } from 'src/rooms/rooms.entity';
import { Invoices } from 'src/invoices/invoices.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Accounts,
      Roles,
      Contracts,
      Rooms,
      Contracts,
      Invoices,
    ]),
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [AccountsController],
  providers: [AccountsService, AuthService],
})
export class AccountsModule {}
