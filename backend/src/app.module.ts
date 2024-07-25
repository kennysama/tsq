import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostsModule } from './posts/posts.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [GraphQLModule.forRoot({
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), "src/schema.gql")
  }), TypeOrmModule.forRoot({ type: "sqlite", database: "memory", entities: ["dist/**/*.entity{.ts,.js}"], synchronize: true }), PostsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
