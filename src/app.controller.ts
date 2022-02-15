import { Controller, Request, Req, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { FortyTwoStrategyAuthGuard } from './auth/42-auth.guard';

@Controller()
export class AppController {
  constructor() {}

  @UseGuards(FortyTwoStrategyAuthGuard)
  @Get('register')
  getHello(): string {
    return 'Hello World!';
    // return this.appService.getHello();
  }
  @UseGuards(FortyTwoStrategyAuthGuard)
  @Get('/auth/intra-42/redirect')
  redirect(@Req() req): any {
    
    return req.user;
  }
  
  // @Post('login')

}
