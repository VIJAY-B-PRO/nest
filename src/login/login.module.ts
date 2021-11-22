import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Registration } from 'src/AllModels/registration.model';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  imports: [SequelizeModule.forFeature([Registration])],
  controllers: [LoginController],
  providers: [LoginService],
  exports: [SequelizeModule]

})
export class LoginModule {}
