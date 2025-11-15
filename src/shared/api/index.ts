import type { AxiosRequestConfig } from 'axios'
import { createClient } from './client'

const { instance } = createClient()

const request =
    (method: string) =>
        async (endpoint: string, data: unknown, options: AxiosRequestConfig = {}) => {
            let response

            try {
                if (options.requestSchema) {
                    data = options.requestSchema.parse(data)
                }

                const config: AxiosRequestConfig = {
                    method,
                    url: endpoint,
                    ...(method.toUpperCase() === 'GET'
                        ? { params: data }
                        : { data }),
                }

                if (options.headers) {
                    config.headers = {
                        ...(config.headers || {}),
                        ...options.headers,
                    }
                }

                if (options.model) config.model = options.model
                if (options.modelDictionary) config.modelDictionary = options.modelDictionary
                if (options.flattenDictionary) config.flattenDictionary = options.flattenDictionary

                response = await instance.request(config)
            } catch (error) {
                throw error
            }

            return response.data
        }

export const apiClient = {
    get: request('GET'),
    post: request('POST'),
    patch: request('PATCH'),
    put: request('PUT'),
    delete: request('DELETE'),
    head: request('HEAD'),
    options: request('OPTIONS'),
}
