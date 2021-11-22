import { Body, Controller, Post } from '@nestjs/common';
import { loginDto } from 'src/Dto/login.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {

    constructor(private readonly loginService: LoginService) { }


    @Post('login')
    findOne(@Body() login: loginDto) {
        console.log(login)
        return this.loginService.findOne(login);
    }






}
