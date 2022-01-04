import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { LocalAuthGuard } from 'src/common/guards/local-auth.guard';
import { AuthService } from './auth.service';
import { createUserDto } from './dto/createUser.dto';
import { AuthDocument } from './schemas/auth.schema';

@Controller('api/users')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Post('signup')
  async singup(
    @Body() createUserData: createUserDto,
  ): Promise<void | AuthDocument> {
    return this.authService.signup(createUserData);
  }
}
