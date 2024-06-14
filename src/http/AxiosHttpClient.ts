import type { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
import axios from 'axios'
import HttpError from '@/http/HttpError'

export default class AxiosHttpClient {
    private readonly client: AxiosInstance = axios.create({
        timeout: 3000,
        timeoutErrorMessage: '오잉..'
    })

    public async request(config: AxiosRequestConfig) {
        return this.client.request(config).catch((e: AxiosError) => {
            return Promise.reject(new HttpError(e))
        })
    }
}
