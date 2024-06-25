import HttpRepository from '@/repository/HttpRepository'
import { inject, singleton } from 'tsyringe'
import type PostWrite from '@/entity/post/PostWrite'

@singleton()
export default class PostRepository {
    constructor(@inject(HttpRepository) private readonly httpRepository: HttpRepository) {}

    public write(request: PostWrite) {
        return this.httpRepository.post({
            path: '/f1v3-api/posts',
            body: request
        })
    }

    public get(postId: number) {
        return this.httpRepository.get({
            path: `/f1v3-api/posts/${postId}`
        })
    }
}
