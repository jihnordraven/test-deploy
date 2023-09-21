import { NestFactory } from '@nestjs/core';
import { INestApplication } from '@nestjs/common';
import { RmqService } from '../../../rmq/rmq.service';
import { Service01Module } from './service01.module';

const bootstrap = async () => {
  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   FilesModule,
  //   {
  //     transport: Transport.RMQ,
  //     options: {
  //       urls: ['amqp://localhost:5672'],
  //       queue: 'MAIN',
  //       noAck: true,
  //       persistent: true,
  //     },
  //   },
  // );

  // await app.listen();

  // Exactly the same ---

  const app: INestApplication =
    await NestFactory.create<INestApplication>(Service01Module);

  const rmqService: RmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(
    rmqService.getOptions({ queue: 'TEST', noAck: true }),
  );

  await app.startAllMicroservices();
};

bootstrap();
