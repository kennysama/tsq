import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './post.entity';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Resolver(of => Post)
export class PostsResolver {
    constructor(private postService : PostsService){}
    @Query( () => [Post])
    posts():Promise<Post[]>{
        return this.postService.findAll();
    }
    @Query( () => Post)
    getPost(@Args("id",{type:()=>Int}) id:number):Promise<Post>{
        return this.postService.findOne(id)
    }

    @Mutation(()=>Post)
    createPost (@Args("createPostInput") createPostInput:CreatePostInput):Promise<Post>{
        return this.postService.createPost(createPostInput);
    }

    @Mutation(() => Post)
    updatePost(@Args('updatePostInput') updatePostInput: UpdatePostInput) {
      return this.postService.update(updatePostInput);
    }
}
