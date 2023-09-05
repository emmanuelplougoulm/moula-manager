import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { Transport } from '@nestjs/microservices';
import { dbConnection } from './db';

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

  await app.listen(5000);
}
bootstrap();
