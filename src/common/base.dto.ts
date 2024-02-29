import { Expose, plainToClass } from "class-transformer";


export abstract class BaseDto {
  @Expose()
  id: number;

  @Expose()
  createat: Date;

  @Expose()
  editat: Date;

  @Expose()
  Deleat: Date;

  static plainToClass <T>(this: new (...args: any[])=> T,obj : T ): T{
    return plainToClass(this, obj, {excludeExtraneousValues: true})
  }
}