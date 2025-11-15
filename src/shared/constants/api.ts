export const API_ROUTES = {
  tasks: {
    list: '/api/tasks',
    verify: (id: number | string) => `/api/tasks/${id}/verify`,
  },

  user: {
    score: '/api/user/score',
    linkTelegram: '/api/user/telegram',
  },

  auth: {
    verifySession: '/api/auth/verify-session',
    linkTelegram: 'POST:/api/user/telegram',
  },
}


export const QUERY_KEYS = {
  tasks: {
    list: 'GET:/api/tasks',
    verify: 'POST:/api/tasks/:id/verify',
    create: 'POST:/api/tasks',
  },

  user: {
    score: 'GET:/api/user/score',
  },
}
