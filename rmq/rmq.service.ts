import { Injectable } from '@nestjs/common';
import { RmqContext, RmqOptions, Transport } from '@nestjs/microservices';
import { Channel } from 'amqp-connection-manager';

type GetOptionsType = {
  readonly queue: string;
  readonly noAck?: boolean;
};

type AckType = {
  readonly context: RmqContext;
};

@Injectable()
export class RmqService {
  public getOptions(data: GetOptionsType): RmqOptions {
    return {
      transport: Transport.RMQ,
      options: {
        urls: [
          'amqps://gkxlkdbz:19Bj2b2918YxXR8qq3T93lXIW6e89pg5@sparrow.rmq.cloudamqp.com/gkxlkdbz',
        ],
        queue: data.queue,
        noAck: data.noAck,
        persistent: true,
      },
    };
  }

  public ack(data: AckType): void {
    const channel: Channel = data.context.getChannelRef();
    const originalMessage: any = data.context.getMessage();
    channel.ack(originalMessage);
  }
}
