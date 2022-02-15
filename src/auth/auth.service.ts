import { Injectable } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(profile: any): Promise<any> {
    const user = await this.usersService.findOne(profile.id);
    if (!user) {
      const result: any = {
        id: profile.id,
        username: profile.username,
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value,
        photo: profile.photos[0].value,
      };
      return this.usersService.save(result);
    }
    return user;
    // return null;
  }
}
