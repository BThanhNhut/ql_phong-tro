import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Roles } from 'src/roles/roles.entity';
import { JwtModule } from '@nestjs/jwt';
import { Accounts } from 'src/accounts/accounts.entity';
import { PosttypeService } from './posttype.service';
import { PosttypeController } from './posttype.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Accounts, Roles]),
    JwtModule.register({
      global: true,
      signOptions: { expiresIn: '1d' },
    }),
  ],
  controllers: [PosttypeController],
  providers: [PosttypeService],
})
export class PosttypeModule {}
