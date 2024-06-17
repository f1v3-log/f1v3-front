import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import axios from 'axios'
import HttpError from '@/http/HttpError'

export type HttpRequestConfig = {
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'
    path: string
    params?: any
    body?: any
}

export default class AxiosHttpClient {
    private readonly client: AxiosInstance = axios.create({
        timeout: 3000,
        timeoutErrorMessage: '오잉..'
    })

    public async request(config: HttpRequestConfig) {
        return this.client
            .request({
                method: config.method,
                url: config.path,
                params: config.params,
                data: config.body
            })
            .then((response: AxiosResponse) => {
                return response.data
            })
            .catch((e: AxiosError) => {
                return Promise.reject(new HttpError(e))
            })
    }
}
