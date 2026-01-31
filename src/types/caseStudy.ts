/* ===================== BASIC TYPES ===================== */

export interface ICategory {
  id: number
  name: string
  slug: string
}

export interface IProcessItem {
  title: string
  description: string[]
}

export interface IChallengeItem {
  title: string
  description: string
}

export interface IListItem {
  title: string
  description: string
}

export interface ICounterItem {
  prefix: string
  number: string
  suffix: string
  description: string
}

export interface IClientInfo {
  feedback: string
  name: string
  position: string
  image: string
}

export interface IInfoListItem {
  label: string
  content: string
}

/* ===================== ACF STRUCTURE ===================== */

export interface IAcf {
  aboutProject: string
  bannerDescription: string
  case_study_tag_list: string
  case_study_title: string
  case_study_logo: string
  case_study_profile_image: string
  listing_order: number

  process: IProcessItem[]

  challenges: {
    title: string
    description: string
    image: string
    list: IChallengeItem[]
  }

  solution: {
    title: string
    description: string
    image: string
    list: IListItem[]
  }

  moodboard: {
    title: string
    description: string
    images: string[]
  }

  results: ICounterItem[]

  services_used: string[]

  product_images: string[]

  client: IClientInfo
}

/* ===================== MAIN CASE STUDY ===================== */

export interface ICaseStudyData {
  data: any
  code: string
  id: number
  slug: string
  title: string
  content: string
  excerpt: string
  background: string

  categories: ICategory[]

  acf: IAcf | null

  casestudy_info_list: IInfoListItem[]

  casestudy_number_counter: number
}

export interface CaseStudyItem {
  id: number
  slug: string
  title: string
  excerpt: string
  permalink: string

  background?: string
  profile_img?: string
  logo?: string
  text_color?: string

  links?: {
    web?: string
    mobile?: string
  }

  subTitlePoint?: {
    subtitle?: string | null
    points?: {
      point: string
    }[]
  }

  tags_html?: string
}
