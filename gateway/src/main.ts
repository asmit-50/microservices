import { NextFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { validationPipe } from '@nestjs/common';






async function bootstrap() {

      const app = await NextFacotry.create(AppModule);
      

     app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbid
