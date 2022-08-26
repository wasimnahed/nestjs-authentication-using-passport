import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/users/user.service';
import { User } from 'src/users/user.entity';


@Injectable()
export class PassportLocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService:UserService){
    super();
  }
  validate(username: string, password: string) :User{
    const user : User = this.userService.getUserByName(username);
    if(user == undefined) throw new UnauthorizedException();

    if(user.password == password) return user;
  }
}