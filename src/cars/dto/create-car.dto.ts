import { IsString, MinLength } from "class-validator";

export class CreateCarDto{

    @IsString({message:`adasdasd`})
    readonly brand:string;
    
    @IsString()
    @MinLength(3)
    readonly model:string;

}