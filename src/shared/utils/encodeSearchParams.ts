export const encodeSearchParams = (data?: Record<string, unknown>): URLSearchParams => {
  const searchParams = new URLSearchParams()
  if (!data) {
    return searchParams
  }

  const buildKey = (key: string, parent?: string) => (parent ? `${parent}[${key}]` : key)

  const appendEntry = (key: string, value: unknown, parentKey?: string) => {
    const fullKey = buildKey(key, parentKey)

    if (Array.isArray(value)) {
      value.forEach((item) => {
        searchParams.append(fullKey + '[]', String(item))
      })
    } else if (typeof value === 'object' && value !== null) {
      Object.entries(value).forEach(([childKey, childValue]) =>
        appendEntry(childKey, childValue, fullKey),
      )
    } else if (value !== undefined && value !== null) {
      searchParams.append(fullKey, String(value))
    }
  }

  Object.entries(data).forEach(([key, value]) => {
    appendEntry(key, value)
  })

  return searchParams
}
