import { Module } from '@nestjs/common';
import { Service01Controller } from './service01.controller';
import { RmqModule } from '../../../rmq/rmq.module';

@Module({
  imports: [RmqModule],
  controllers: [Service01Controller],
})
export class Service01Module {}
