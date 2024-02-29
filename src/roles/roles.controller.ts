import { Controller, Get } from "@nestjs/common";
import { get } from "http";

@Controller('/roles')
export class RolesController {
    @Get()
    hienthi() : string{
        return "day la roles";
    }
}