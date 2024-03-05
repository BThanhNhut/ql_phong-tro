import { Module } from "@nestjs/common";
import { AccountsController } from "./accounts.controller";
import { AccountsService } from "./accounts.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Accounts } from "./accounts.entity";
import { AuthService } from "./auth.service";
import { Roles } from "src/roles/roles.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Accounts,Roles])],
  controllers: [AccountsController],
  providers: [AccountsService],
})
export class AccountsModule {}