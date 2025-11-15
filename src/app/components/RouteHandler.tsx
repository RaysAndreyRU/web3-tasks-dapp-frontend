import { useEffect, type PropsWithChildren } from 'react'
import { useTranslation } from 'react-i18next'
import { useMatches } from 'react-router-dom'

import type { IRoute } from '../constants/routes'

export const RouteHandler = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation()
  const matches = useMatches()

  // Sets page title based on the route payload
  useEffect(() => {
    let route: IRoute | undefined

    for (let i = matches.length - 1; i >= 0; i--) {
      const { handle } = matches[i]
      if (typeof handle === 'object' && handle !== null && 'route' in handle) {
        route = handle.route as IRoute
      }
    }

    const appTitle = t('App Title')
    if (route) {
      document.title = `${t(route.titleKey)} | ${appTitle}`
    } else {
      document.title = appTitle
    }
  }, [matches, t])

  return children
}
