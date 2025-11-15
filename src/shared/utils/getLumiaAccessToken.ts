export const getLumiaAuthData = () => {
    if (typeof window === 'undefined') return null
    const raw = localStorage.getItem('lumia-passport-jwt-tokens')
    if (!raw) return null
    try {
        return JSON.parse(raw)
    } catch {
        return null
    }
}
