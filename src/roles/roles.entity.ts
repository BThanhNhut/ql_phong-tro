import { Expose } from 'class-transformer';
import { IsEmpty } from 'class-validator';
import { BaseDto } from 'src/common/base.dto';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Roles extends BaseDto {
  @Expose()
  @IsEmpty()
  @Column()
  codes: string;
  @Expose()
  @IsEmpty()
  @Column()
  roles_name: string;
}
