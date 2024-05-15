import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Sử dụng validationpile ở global
  app.useGlobalPipes();
  const port = process.env.PORT || 3000;
  await app.listen(port);
}
bootstrap();
