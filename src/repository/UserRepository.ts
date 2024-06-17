import HttpRepository from '@/repository/HttpRepository'
import type Login from '@/entity/user/Login'

export default class UserRepository extends HttpRepository {
    public login(request: Login) {
        return this.post({
            path: '/f1v3-api/auth/login',
            body: request
        })
    }
}
