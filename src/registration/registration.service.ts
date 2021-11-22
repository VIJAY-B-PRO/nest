import { Injectable, UseGuards } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { IsNull } from 'sequelize-typescript';
import { Registration } from 'src/AllModels/registration.model';
import { loginDto } from 'src/Dto/login.dto';
// import { userRequestDto } from 'src/Dto/registration.dto';

@Injectable()
export class RegistrationService {

  constructor(@InjectModel(Registration) private itemModel: typeof Registration) { }
   
 
   getHello():string {
    return "i am from  RegistrationService";
  }
    

  public async create(data: any) {
    const user = await this.itemModel.create(data);
    // await this.itemModel.create(data);
    return user;
  }


  // public async findOne(data:loginDto ){

  //   console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@",data);
    

  //   const user = await this.itemModel.findOne({

  //     where: { email: data.email}

  //   });

  //   const valid = { value: "success" }

  //   let a = { value: "error" }

  //   if(user!=null){

  //     return valid ; 

  //   }
  //   return a;
   

  // }
  




}
