import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Sử dụng validationpile ở global
  app.useGlobalPipes(new ValidationPipe({transform:true}))
  
  await app.listen(process.env.PORT || 3000, () => {
    console.log('Kết nói api thành công');
  });
}
bootstrap();
