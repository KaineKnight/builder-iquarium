import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

var cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const cors=require("cors");
  const corsOptions ={
    origin:'*',
    methods: ['GET', 'POST'],
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:228,
  }

  app.use(cors(corsOptions)) // Use this after the variable declaration

  app.enableCors();

  await app.listen(3000);
}
bootstrap();
