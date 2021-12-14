import { Injectable } from '@nestjs/common';
import { App2Service } from './app2.service';

// @Injectable()
export class AppService {
  constructor(app2: App2Service) {
    console.log(typeof app2);
  }
}
