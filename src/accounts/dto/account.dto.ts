// import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// import { IsNotEmpty } from 'class-validator';
// import { Expose } from 'class-transformer';
// import { BaseDto } from '../../common/base.dto';
// import { Roles } from '../../roles/roles.entity';

// @Entity({ name: 'accounts' })
// export class Accounts extends BaseDto {

//   @Column({ unique: true, length: 20 })
//   @IsNotEmpty()
//   @Expose()
//   username: string;

//   @Column({ length: 20 })
//   @IsNotEmpty()
//   @Expose()
//   password: string;

//   @Column({ length: 20 })
//   @IsNotEmpty()
//   @Expose()
//   customer_name: string;

//   @Column({ length: 20 })
//   @Expose()
//   phone_number: string;

//   @Column({ length: 50 })
//   @Expose()
//   address: string;

//   @ManyToOne(() => Roles, (role) => role.id)
//   @IsNotEmpty()
//   @Expose()
//   role: Roles;
// }
