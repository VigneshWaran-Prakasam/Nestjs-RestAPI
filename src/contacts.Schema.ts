import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsEmail, IsLowercase, IsNotEmpty, IsPhoneNumber, IsString, Length } from "class-validator";
import{Document} from 'mongoose';
@Schema()
export class Contact{
    @IsNotEmpty()
    @IsString()
    @Length(5,30)
    @IsLowercase()
    @Prop()
    name:string;

    @IsNotEmpty()
    @IsEmail()
    @Prop({unique:true})
    email:string;

    @IsPhoneNumber("IN")
    @Prop({unique:true})
    phone:string;

    @Prop()
    city:string;
    @Prop()
    state:string;
    @Prop()
    country:string;
}
export const ContactSchema = SchemaFactory.createForClass(Contact)
