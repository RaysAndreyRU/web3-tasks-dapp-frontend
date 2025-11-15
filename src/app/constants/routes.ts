export type Routes = 'home' | 'tasks'

export type IRoute = {
  /** Translation key for the route title (document title) */
  titleKey: string
  /** URL for the route */
  url: () => string
}

export const routes: Record<Routes, IRoute> = {
  home: {
    titleKey: 'Home',
    url: () => '/',
  },

  tasks: {
    titleKey: 'Tasks',
    url: () => '/tasks',
  },
}
