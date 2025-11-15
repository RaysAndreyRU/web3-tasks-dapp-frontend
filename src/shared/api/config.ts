import { normalizeBackendUrl } from './utils.ts'

const backendUrl = import.meta.env.VITE_APP_BACKEND_URL || 'http://localhost:8000'

if (!backendUrl) {
    console.warn(
        '[config] Missing VITE_APP_BACKEND_URL'
    )
}

export default {
    url: normalizeBackendUrl(backendUrl),

    developmentMode:
        String(import.meta.env.VITE_APP_DEVELOPMENT_MODE || '').toLowerCase() === 'true',
}
