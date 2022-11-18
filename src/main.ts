if (!process.env.IS_TS_NODE) { //don't require if in production
  require('module-alias/register');
}

import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // creates new app
  await app.listen(3000);
}
bootstrap();
