import { Injectable, CanActivate, ExecutionContext, ForbiddenException, BadRequestException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';
import { AccountsService } from 'src/accounts/accounts.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtservice: JwtService, private accountservice : AccountsService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    try {
      // get token from header
      const token = request.headers.authorization.split(' ')[1];
      console.log(token);
      if (!token) {
        throw new ForbiddenException('Please provide acess token');
      }
      // jwtverify validate token

      const payload = await this.jwtservice.verifyAsync(token, {
        secret: process.env.JWT_SECRET,
      });
      // find user in db based on jwtVerify
      const account = this.accountservice.findByUsername(payload.username);
      console.log(account);
      if (!account) {
        throw new BadRequestException(
          'User not belong to token, please tty again',
        );
      }
      //Assign user to request obj
      request.currentAccount = account;
      return true;
    } catch (error) {
        throw new ForbiddenException('Invalid token expired');
    }
    return true;
  }
}
