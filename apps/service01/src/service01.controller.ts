import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class Service01Controller {
  @EventPattern('pattern')
  public async testPattern(data: string): Promise<void> {
    console.log(data);
  }
}
