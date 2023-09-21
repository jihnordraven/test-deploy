import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { RmqModule } from '../../../rmq/rmq.module';

@Module({
  imports: [RmqModule.register({ name: 'TEST' })],
  controllers: [AppController],
})
export class AppModule {}
