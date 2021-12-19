import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { StatusInterseptor } from '../common/interseptors/status.interseptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new StatusInterseptor());
  await app.listen(3000);
}
bootstrap();
