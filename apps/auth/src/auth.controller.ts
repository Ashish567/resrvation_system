import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { localAuthGuard } from './guards/localAuth.guard';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @UseGuards(localAuthGuard)
  @Post('login')
  @Get()
  getHello(): string {
    return this.authService.getHello();
  }
}
