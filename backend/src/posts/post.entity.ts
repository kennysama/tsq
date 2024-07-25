import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class Post{
    @PrimaryGeneratedColumn()
    @Field(type=> Int)
    id:number;

    @Column()
    @Field()
    title:string;

    @Column()
    @Field()
    order:number;
}