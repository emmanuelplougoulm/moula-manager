import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { Transport } from '@nestjs/microservices';
import { dbConnection } from './db';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cors from 'cors';


async function bootstrap() {
  // const { hostname, port }: any = config.get('api');

  // const appConfig = {
  //   port,
  //   host: hostname,
  //   transport: Transport.RMQ,
  //   options: { ...options, urls: brokerUrls },
  // };

  // const { npm_package_name: name, npm_package_version: version } = process.env;

  await dbConnection();

  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.use(cors());

  const config = new DocumentBuilder()
    .setTitle('Moula Manager')
    .setDescription('Managing my moula')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(9000);
}
bootstrap();
