import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'esta es una app hecha con los genios de programacion III!';
  }
}
