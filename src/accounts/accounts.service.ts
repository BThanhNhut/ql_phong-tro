import { accountDTO } from "src/accounts/dto/account.dto";
import { accountsRepository } from "./accounts.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AccountsService {
    
    createuser(a: accountDTO){
         a.id = 1;
         a.createat = new Date();
         a.editat = new Date();
         a.Deleat = new Date();
         return accountDTO.plainToClass(a);
    }
}