import axios, { AxiosHeaders, HttpStatusCode, type AxiosInstance } from 'axios'
import config from './config'

export const createClient = () => {
    const instance: AxiosInstance = axios.create({
        baseURL: config.url,
        withCredentials: false,
    })

    const clearAuthentication = () => {
        localStorage.removeItem('token')
    }

    instance.interceptors.request.use((config) => {
        const token = localStorage.getItem('token')

        if (token) {
            config.headers = AxiosHeaders.from(config.headers || {})
            config.headers.set('Authorization', `Bearer ${token}`)
        }

        return config
    })

    instance.interceptors.response.use(
        (response) => {
            const { model, modelDictionary, flattenDictionary } = response.config

            if (model) {
                const rawData =
                    'data' in response.data ? response.data.data : response.data

                let dataForValidation: unknown = rawData

                if (flattenDictionary && !Array.isArray(rawData)) {
                    dataForValidation = Object.values(rawData).flat()
                }

                if (modelDictionary && !flattenDictionary) {
                    const result: Record<string, unknown> = {}
                    for (const key in rawData) {
                        const value = rawData[key as keyof typeof rawData]
                        result[key] = model.parse(value)
                    }
                    response.data = result
                } else {
                    response.data = model.parse(dataForValidation)
                }
            }

            return response
        },
        (error) => {
            const status = error.response?.status
            const code = error.response?.data?.error

            if (status === HttpStatusCode.Unauthorized && code === 'AUTH_INVALID_TOKEN') {
                clearAuthentication()
            }

            return Promise.reject(error)
        },
    )

    return { instance }
}
