declare module '*.svg' {
  import * as React from 'react'

  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

declare module '*.svg?react' {
  import * as React from 'react'

  // Make the default export the React component
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  export default content

  // (Optionally remove the named export if you don't need it)
}
