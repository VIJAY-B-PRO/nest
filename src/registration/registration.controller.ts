import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { create } from 'domain';
import { Sequelize } from 'sequelize-typescript';
import { Registration } from 'src/AllModels/registration.model';
import { loginDto } from 'src/Dto/login.dto';
import { userRequestDto } from 'src/Dto/registration.dto';
import { RegistrationService } from './registration.service';

@Controller('registration')
export class RegistrationController {

  constructor(private readonly RegistrationService: RegistrationService) { }




  @Get("pp")
  get(): any {
    return this.RegistrationService.getHello();
  }

  //   @Post("adduser")
  //   public async createUsers(@Body() data: any) {
  //   return await this.RegistrationService.create(data);
  //   // return user;
  // }

  @Post("adduser")
  create(@Body() createUserDto: userRequestDto) {
    console.log("######################################", createUserDto)
    return this.RegistrationService.create(createUserDto);
  }



  // @Post('login')
  // findOne(@Body() login:loginDto) {
  //   console.log(login)
  //   return this.RegistrationService.findOne(login);
  // }







}
