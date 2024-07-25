import { Field, InputType } from "@nestjs/graphql";
import { IsString } from "class-validator";

@InputType()
export class UpdatePostInput {
    @Field()
    id:number
    
    @IsString()
    @Field()
    title: string;

    @Field()
    order:number
}