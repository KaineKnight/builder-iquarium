import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('json')
  getJson() {
    console.log('johnsons');
    return {
      id: 1,
      title: "Johnsons",
      algorithm: "Baby",
      isTrue: true,
    }
  }
}
