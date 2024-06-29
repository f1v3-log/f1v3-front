import HttpRepository from '@/repository/HttpRepository'
import { inject, singleton } from 'tsyringe'
import type PostWrite from '@/entity/post/PostWrite'
import type Post from '@/entity/post/Post'
import { plainToInstance } from 'class-transformer'

@singleton()
export default class PostRepository {
    constructor(@inject(HttpRepository) private readonly httpRepository: HttpRepository) {}

    public write(request: PostWrite) {
        return this.httpRepository.post({
            path: '/f1v3-api/posts',
            body: request
        })
    }

    public get(postId: number): Promise<Post> {
        return this.httpRepository
            .get({
                path: `/f1v3-api/posts/${postId}`
            })
            .then((response) => {
                return plainToInstance(Post, response)
            })
    }
}
