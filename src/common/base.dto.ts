import { Expose, plainToClass } from "class-transformer";
import { PrimaryGeneratedColumn } from "typeorm";


export abstract class BaseDto {
  @Expose()
  @PrimaryGeneratedColumn()
  id: number;

  // @Expose()
  // createat: Date;

  // @Expose()
  // editat: Date;

  // @Expose()
  // Deleat: Date;

  // static plainToClass<T>(this: new (...args: any[]) => T, obj: T): T {
  //   return plainToClass(this, obj, { excludeExtraneousValues: true });
  // }
}