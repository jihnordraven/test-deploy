import { DynamicModule, Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RmqService } from './rmq.service';

interface RmqModuleOptions {
  name: string;
}

@Module({
  providers: [RmqService],
  exports: [RmqService],
})
export class RmqModule {
  static register({ name }: RmqModuleOptions): DynamicModule {
    return {
      module: RmqModule,
      imports: [
        ClientsModule.register([
          {
            name,
            transport: Transport.RMQ,
            options: {
              urls: [
                'amqps://gkxlkdbz:19Bj2b2918YxXR8qq3T93lXIW6e89pg5@sparrow.rmq.cloudamqp.com/gkxlkdbz',
              ],
              queue: name,
            },
          },
        ]),
      ],
      exports: [ClientsModule],
    };
  }
}
