import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { StatusInterseptor } from './common/interseptors/status.interseptor';
import { HttpExceptionFilter } from './common/exception-filters/http.exception-filter';
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const adminConfig: ServiceAccount = {
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  };
  admin.initializeApp({
    credential: admin.credential.cert(adminConfig),
  });

  app.useGlobalInterceptors(new StatusInterseptor());
  app.useGlobalFilters(new HttpExceptionFilter());
  await app.listen(3000);
}
bootstrap();
