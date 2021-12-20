import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { StatusInterseptor } from '../common/interseptors/status.interseptor';
import { HttpExceptionFilter } from '../common/exception-filters/http.exception-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new StatusInterseptor());
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();