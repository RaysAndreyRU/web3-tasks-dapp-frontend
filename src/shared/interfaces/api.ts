export type PaginationRequest = {
  page: number
  size: number
}

export type BaseResponse<D = unknown> = {
  success: boolean
  data: D
  timestamp: string
  source: string
}

export type Pagination = {
  page: number
  size: number
  total: number
  pages: number
  hasNext: boolean
  hasPrev: boolean
}

export type PaginatedResponse<D = unknown> = BaseResponse<D> & {
  pagination: Pagination
  count: number
}
