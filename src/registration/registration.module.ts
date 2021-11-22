import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Registration } from 'src/AllModels/registration.model';
import { RegistrationController } from './registration.controller';
import { RegistrationService } from './registration.service';

@Module({
  imports: [SequelizeModule.forFeature([Registration])],
  providers: [RegistrationService],
  controllers: [RegistrationController],
  exports:[SequelizeModule]
})
export class RegistrationModule {}
