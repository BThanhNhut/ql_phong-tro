import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountsModule } from './accounts/accounts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from './roles/roles.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RoomsModule } from './rooms/rooms.module';
import { Types } from './types/types.entity';
import { ImagesModule } from './images/images.module';
import { PosttypeModule } from './posttype/posttype.module';
import { PostsModule } from './posts/posts.module';
import { FavoritesModule } from './favorites/favorites.module';
import { ServicesModule } from './services/services.module';
import { AmenitiesModule } from './amenities/amenities.module';
import { FurnitureModule } from './furniture/furniture.module';
import { ServiceDetailsModule } from './servicedetails/servicedetails.module';
import { FacilitydetailsModule } from './amenitiesdetails/amenitiesdetails.module';
import { FurnituredetailsModule } from './furnituredetails/furnituredetails.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: ['dist/**/*.entity{.ts,.js}'],
        autoLoadEntities: true,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    RolesModule,
    AccountsModule,
    Types,
    RoomsModule,
    ImagesModule,
    PosttypeModule,
    PostsModule,
    FavoritesModule,
    ServicesModule,
    AmenitiesModule,

    FurnitureModule,
    FurnituredetailsModule,
    ServiceDetailsModule,
    FacilitydetailsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
