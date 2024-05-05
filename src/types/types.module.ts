import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { TypesController } from './types.controller';

import { Accounts } from 'src/accounts/accounts.entity';
import { Roles } from 'src/roles/roles.entity';
import { Types } from './types.entity';
import { TypesService } from './types.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Accounts, Roles, Types]),
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [TypesController],
  providers: [TypesService],
})
export class TypesModule {}
