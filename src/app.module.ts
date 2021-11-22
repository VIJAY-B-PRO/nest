import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Registration } from './AllModels/registration.model';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { RegistrationHttpModule } from './registration/registration-http.module';
import { RegistrationController } from './registration/registration.controller';
import { RegistrationModule } from './registration/registration.module';
import { RegistrationService } from './registration/registration.service';
// import { UsersService } from './users/users.service';
// import { UsersModule } from './users/users.module';
// import { AuthModule } from './auth/auth.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [

    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'pass',
      database: 'legalog',
      models: [Registration],
      autoLoadModels: true,
      synchronize: true,
    }),
    
    RegistrationModule,
    
    LoginModule,
    
    // UsersModule,
    
    // AuthModule,
    // RegistrationHttpModule
  ],
  controllers: [AppController, RegistrationController],
  providers: [AppService, RegistrationService,  ],
})
export class AppModule {}
