import { Field, InputType } from "@nestjs/graphql";
import { IsString } from "class-validator";

@InputType()
export class CreatePostInput {
    @IsString()
    @Field()
    title: string;

    @Field()
    order:number
}