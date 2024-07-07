import HttpRepository from '@/repository/HttpRepository'
import { inject, singleton } from 'tsyringe'
import type PostWrite from '@/entity/post/PostWrite'
import { plainToInstance } from 'class-transformer'
import Post from '@/entity/post/Post'
import Paging from '@/entity/data/Paging'

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
        return this.httpRepository
            .get({
                path: `/f1v3-api/posts/${postId}`
            })
            .then((response) => {
                console.log(response)
                return plainToInstance(Post, response)
            })
    }

    public getList(page: number, size: number) {
        return this.httpRepository
            .get({
                path: `/f1v3-api/posts?page=${page}&size=${size}`
            })
            .then((response) => {
                const paging = plainToInstance<Paging<Post>, any>(Paging, response)
                const items = plainToInstance<Post, any[]>(Post, response.items)

                paging.setItems(items)
                return paging
            })
    }
}
