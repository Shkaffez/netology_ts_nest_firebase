import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Auth, AuthDocument } from '../schemas/auth.schema';
import { createUserDto } from '../dto/createUser.dto';
import { Connection } from 'mongoose';
import { InjectConnection } from '@nestjs/mongoose';
import { authUserDto } from '../dto/authUser.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Auth.name) private readonly AuthModel: Model<AuthDocument>,
    @InjectConnection() private connection: Connection,
  ) {}

  public async sugnup(
    createUserData: createUserDto,
  ): Promise<void | AuthDocument> {
    const newUser = new this.AuthModel(createUserData);
    try {
      return await newUser.save();
    } catch (e) {
      console.error(e);
    }
  }

  public async signin(authUserData: authUserDto): string {}
}
