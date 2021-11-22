import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Registration } from 'src/AllModels/registration.model';
import { loginDto } from 'src/Dto/login.dto';

@Injectable()
export class LoginService {

    constructor(@InjectModel(Registration) private itemModel: typeof Registration) { }





    public async findOne(data: loginDto) {

        console.log("@@@@@@@@@@@@@@@@@@@@@@@", data);
        if (data) {

            const user = await this.itemModel.findOne({ where: { email: data.email } });

            if (user) {
                if (user.password === data.password) {
                    return { value: "success" }
                }
                return { value: "Password mismatch" }
            }
            else {
                return { value: "Email is not Found" }
            }


        }


       
    }
}
