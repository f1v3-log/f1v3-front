import HttpRepository from '@/repository/HttpRepository'
import { inject, singleton } from 'tsyringe'
import type PostWrite from '@/entity/post/PostWrite'
import Post from '@/entity/post/Post'

@singleton()
export default class PostRepository {
    constructor(@inject(HttpRepository) private readonly httpRepository: HttpRepository) {
    }

    public write(request: PostWrite) {
        return this.httpRepository.post({
            path: '/f1v3-api/posts',
            body: request
        })
    }

    public get(postId: number) {
        return this.httpRepository.get<Post>({ path: `/f1v3-api/posts/${postId}` }, Post)
    }

    public getList(page: number, size: number) {
        return this.httpRepository
            .getList<Post>({
                path: `/f1v3-api/posts?page=${page}&size=${size}`
            }, Post)
    }
}
