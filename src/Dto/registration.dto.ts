// export class Registration {}
import { IsOptional } from "class-validator"

export class userRequestDto {

    firstname?: string;
    lastname?: string;
    email?: string;
    password?: string;
    userinfo_id: number;

    @IsOptional()
    UpdatedOn?: Date;

    @IsOptional()
    CreatedOn?: Date;



    // userinfo_id, firstname, lastname, email, password,  CreatedOn, UpdatedOn

}

