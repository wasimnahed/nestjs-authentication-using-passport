import { Controller, Get, UseGuards,Request } from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';




@Controller("app")
export class AppController {
  constructor() {}

  @Get()
  @UseGuards(AuthGuard('local'))
  getHello(@Request() Req): string {
    return Req.user;
  }
}
