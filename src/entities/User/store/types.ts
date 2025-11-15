import type { User } from '../model/schema'

export interface IAuthStore {
  user: User | null
  token: string | null
  isAuthenticated: boolean

  setSession: (data: { user: User; token: string }) => void
  setUser: (patch: Partial<User>) => void
  clearUser: () => void
}