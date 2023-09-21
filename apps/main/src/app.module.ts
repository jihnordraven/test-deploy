import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RmqModule } from '../../../rmq/rmq.module';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TEST',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://gkxlkdbz:19Bj2b2918YxXR8qq3T93lXIW6e89pg5@sparrow.rmq.cloudamqp.com/gkxlkdbz',
          ],
          queue: 'TEST',
        },
      },
    ]),
  ],
  controllers: [AppController],
})
export class AppModule {}
