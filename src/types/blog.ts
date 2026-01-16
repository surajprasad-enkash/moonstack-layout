import { ReactNode } from "react"

export interface ICategory {
  id: number
  slug: string
  name: string
}

export interface IPostData {
  updated_date: ReactNode
  publish_date: ReactNode
  author: any
  read_time: any
  id: number
  slug: string
  title: string
  image: string
  date: string
  content: string
  excerpt: string
  category: ICategory | null // ✅ ADDED
}

export interface IBlogAuthor {
  name: string
  avatar: string
}

export interface IBlogCategory {
  id: number
  name: string
  slug: string
}

export interface IBlogPost {
  id: number
  slug: string
  title: string
  image: string
  date: string
  excerpt: string
  author: IBlogAuthor
  category: IBlogCategory
}

export interface IPagination {
  total_pages: number
  current_page: number
}

export interface IPostsByCategoryResponse {
  id: number
  slug: string
  title: string
  image: string
  date: string
  excerpt: string
  author: string
  status: boolean
  data: IBlogPost[]
  pagination: IPagination
  category: {
    name: string
    slug: string
  }
}
