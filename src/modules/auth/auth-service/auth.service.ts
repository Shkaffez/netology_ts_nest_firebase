import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Auth, AuthDocument } from '../schemas/auth.schema';
import { createUserDto } from '../dto/createUser.dto';
import { Connection } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { authUserDto } from '../dto/authUser.dto';
import * as bcript from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name) private readonly AuthModel: Model<AuthDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  public async sugnup(
    createUserData: createUserDto,
  ): Promise<void | AuthDocument> {
    const { email, password, firstName, lastName } = createUserData;
    const hash = bcript.hashSync(password, 10);
    const newUser = new this.AuthModel({
      email,
      password: hash,
      firstName,
      lastName,
    });
    try {
      return await newUser.save();
    } catch (e) {
      console.error(e);
    }
  }

  public async validateUser(authUserData: authUserDto): Promise<any> {
    const { email, password } = authUserData;

    try {
      const user = await this.AuthModel.findOne({ email: email }).select(
        '-__v',
      );
      if (user && bcript.compareSync(password, user.password)) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { password, ...result } = user;
        return user;
      }
      return null;
    } catch (e) {
      console.log(e);
    }
  }
}
