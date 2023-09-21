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
        urls: ['amqp://localhost:5672'],
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
