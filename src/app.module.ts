import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { App2Service } from './app2.service';

@Module({
  providers: [AppService, App2Service],
})
export class AppModule {}
