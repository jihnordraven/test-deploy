import { Module } from '@nestjs/common';
import { Service01Controller } from './service01.controller';
import { RmqModule } from '../../../rmq/rmq.module';
import { RmqService } from 'rmq/rmq.service';

@Module({
  imports: [RmqModule],
  controllers: [Service01Controller],
  providers: [RmqService],
})
export class Service01Module {}
