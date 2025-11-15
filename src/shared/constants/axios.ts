import axios from 'axios'
import type {ZodSchema} from 'zod'

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
})


declare module 'axios' {
    export interface AxiosRequestConfig {
        model?: ZodSchema
        modelDictionary?: boolean
        flattenDictionary?: boolean
        hideError?: boolean
        requestSchema?: ZodSchema
        performAuth?: boolean
    }
}
