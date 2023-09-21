import { Controller, Get, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(@Inject('TEST') private readonly testClient: ClientProxy) {}

  @Get()
  public async sendMessage(): Promise<string> {
    this.testClient.emit('pattern', 'hello from main service');
    return 'ok';
  }
}
