import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Array<object> {
    const task1 = {
      id: 1,
      description: 'Cozinhar',
    };
    const task2 = {
      id: 1,
      description: 'Biscoito',
    };
    return [task1, task2];
  }
}
