import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Registration } from './AllModels/registration.model';

@Injectable()
export class AppService {



  getHello(): string {
    return 'Hello World!';
  }
}
