import HttpRepository from '@/repository/HttpRepository'
import type Login from '@/entity/user/Login'
import { inject, singleton } from 'tsyringe'
import UserProfile from '@/entity/user/UserProfile'

@singleton()
export default class UserRepository {
    constructor(@inject(HttpRepository) private readonly httpRepository: HttpRepository) {
    }

    public login(request: Login) {
        return this.httpRepository.post({
            path: '/f1v3-api/auth/login',
            body: request
        })
    }

    public getProfile() {
        return this.httpRepository.get<UserProfile>({
            path: '/f1v3-api/users/me'
        }, UserProfile)

    }
}
