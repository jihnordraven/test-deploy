import { Controller, Logger } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class Service01Controller {
  private logger: Logger = new Logger(Service01Controller.name);

  @EventPattern('pattern')
  public async testPattern(data: string): Promise<void> {
    console.log(data);
    this.logger.log('ok works fine');
  }
}
