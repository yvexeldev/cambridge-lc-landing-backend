import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Cambridge Clone Site API')
  .setDescription('API description')
  .setVersion('1.0')
  .build();
