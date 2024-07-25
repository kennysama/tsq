import { Injectable } from '@nestjs/common';
import { Post } from './post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';

@Injectable()
export class PostsService {
    constructor(@InjectRepository(Post) private postRepository:Repository<Post>){}

    createPost(createPostInput:CreatePostInput): Promise<Post>{
        const newPost = this.postRepository.create(createPostInput)
        return this.postRepository.save(newPost);
    }

   async findAll():Promise<Post[]>{
     
    return this.postRepository.find();
    }

    findOne(id:number):Promise<Post>{

        return this.postRepository.findOneOrFail({where:{id}});

    }

   async update(updatePostInput: UpdatePostInput):Promise<Post>{
        const post = await this.postRepository.findOneBy({id:updatePostInput.id})
   
        post.order = updatePostInput.order
        post.title = updatePostInput.title

        return this.postRepository.save(post);
        

    }

  
}
