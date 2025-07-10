import config from './config'

const API_URL = config.strapi.apiUrl

export interface StrapiImage {
  id: number
  url: string
  alternativeText?: string
  caption?: string
  width?: number
  height?: number
  formats?: {
    thumbnail?: { url: string }
    small?: { url: string }
    medium?: { url: string }
    large?: { url: string }
  }
}

export interface StrapiComponent {
  __component: string
  id?: number
}

export interface RichTextComponent extends StrapiComponent {
  __component: 'shared.rich-text'
  body: string
}

export interface MediaComponent extends StrapiComponent {
  __component: 'shared.media'
  file: {
    data: StrapiImage
  }
}

export interface QuoteComponent extends StrapiComponent {
  __component: 'shared.quote'
  body: string
  author?: string
}

export type DynamicZoneComponent = RichTextComponent | MediaComponent | QuoteComponent

export interface StrapiAuthor {
  id: number
  name: string
  email?: string
  avatar?: {
    data?: StrapiImage
  }
  bio?: string
}

export interface StrapiCategory {
  id: number
  name: string
  slug: string
  description?: string
}

export interface StrapiArticle {
  id: number
  title: string
  description: string
  slug: string
  publishedAt: string
  updatedAt: string
  cover?: {
    data?: StrapiImage
  }
  author?: {
    data: StrapiAuthor
  }
  category?: {
    data: StrapiCategory
  }
  blocks?: DynamicZoneComponent[] // Dynamic zone content
}

export interface StrapiResponse<T> {
  data: T
  meta: {
    pagination?: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

export class StrapiAPI {
  private baseURL: string

  constructor(baseURL: string = API_URL) {
    this.baseURL = baseURL
  }

  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseURL}${endpoint}`

    try {
      const response = await fetch(url, {
        headers: {
          'Content-Type': 'application/json',
          ...options?.headers,
        },
        ...options,
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error(`API request failed for ${url}:`, error)
      throw error
    }
  }

  // Get all articles with pagination
  async getArticles(params?: {
    page?: number
    pageSize?: number
    populate?: string[]
    filters?: Record<string, string | number | boolean>
    sort?: string[]
  }): Promise<StrapiResponse<StrapiArticle[]>> {
    const searchParams = new URLSearchParams()

    if (params?.page) searchParams.append('pagination[page]', params.page.toString())
    if (params?.pageSize) searchParams.append('pagination[pageSize]', params.pageSize.toString())

    // Default populate for articles list
    const populate = params?.populate || ['cover', 'author', 'category']
    populate.forEach((field) => {
      searchParams.append('populate', field)
    })

    if (params?.sort) {
      params.sort.forEach((sortField) => {
        searchParams.append('sort', sortField)
      })
    }

    if (params?.filters) {
      Object.entries(params.filters).forEach(([key, value]) => {
        searchParams.append(`filters[${key}]`, String(value))
      })
    }

    const queryString = searchParams.toString()
    return this.request<StrapiResponse<StrapiArticle[]>>(`/articles${queryString ? `?${queryString}` : ''}`)
  }

  // Get single article by slug
  async getArticleBySlug(slug: string): Promise<StrapiResponse<StrapiArticle[]>> {
    const searchParams = new URLSearchParams()
    searchParams.append('filters[slug][$eq]', slug)
    searchParams.append('populate', 'cover')
    searchParams.append('populate', 'author')
    searchParams.append('populate', 'author.avatar')
    searchParams.append('populate', 'category')
    searchParams.append('populate', 'blocks')

    return this.request<StrapiResponse<StrapiArticle[]>>(`/articles?${searchParams.toString()}`)
  }

  // Get featured articles (you can add a featured field to your schema)
  async getFeaturedArticles(limit: number = 1): Promise<StrapiResponse<StrapiArticle[]>> {
    const searchParams = new URLSearchParams()
    searchParams.append('pagination[pageSize]', limit.toString())
    searchParams.append('sort', 'publishedAt:desc')
    searchParams.append('populate', 'cover')
    searchParams.append('populate', 'author')
    searchParams.append('populate', 'category')

    return this.request<StrapiResponse<StrapiArticle[]>>(`/articles?${searchParams.toString()}`)
  }

  // Get categories
  async getCategories(): Promise<StrapiResponse<StrapiCategory[]>> {
    return this.request<StrapiResponse<StrapiCategory[]>>('/categories')
  }

  // Get authors
  async getAuthors(): Promise<StrapiResponse<StrapiAuthor[]>> {
    const searchParams = new URLSearchParams()
    searchParams.append('populate', 'avatar')

    return this.request<StrapiResponse<StrapiAuthor[]>>(`/authors?${searchParams.toString()}`)
  }
}

// Helper function to get image URL
export function getStrapiImageUrl(
  image?: StrapiImage | null,
  format?: 'thumbnail' | 'small' | 'medium' | 'large',
): string {
  if (!image) return ''

  const baseUrl = config.strapi.url

  if (format && image.formats?.[format]) {
    return `${baseUrl}${image.formats[format].url}`
  }

  return `${baseUrl}${image.url}`
}

// Helper function to format date
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

// Helper function to calculate read time
export function calculateReadTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

// Create API instance
export const api = new StrapiAPI()
