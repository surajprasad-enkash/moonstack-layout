import { StaticImageData } from "next/image"

/* ================= Accordion ================= */
export interface IAccordionItem {
  question: string
  answer: string
}

/* ================= Breadcrumb ================= */
export interface BreadcrumbItem {
  label: string
  href: string
}

/* ================= Left Card ================= */
/* 🔧 FIX: export interface (was unexported) */
export interface leftCardData {
  title?: string
  description?: string
  stats?: string[]
  description2?: string
  icon?: string
  image?: string
}

/* ================= Impact Section ================= */
export interface ImpactHeadingItem {
  text: string
  color?: string
  className?: string
}

export interface ImpactCardProps {
  id?: string
  label?: string
  description?: string
  variant?: "dark" | "light" | "accent"
}

export interface ImpactSectionProps {
  /* 🔧 FIX: heading must be optional (you already use empty arrays / undefined) */
  heading?: ImpactHeadingItem[]
  description?: string
  cards: ImpactCardProps[]
}

/* ================= Quality Section ================= */
export interface qualitySectionProps {
  id: number
  title: string
  icon: string | StaticImageData
  description?: string
}

/* ================= Cloud Timeline ================= */
export interface CloudTimelineDataSteps {
  number: string | number
  title: string
  description: string
  position: "left" | "right"
}

export interface CloudTimelineDataProps {
  title: string
  highlight: string
  subtitle?: string
  steps: CloudTimelineDataSteps[]
}

/* ================= Page Data ================= */
export interface PageData {
  /* 🔧 FIX: object (not array) — matches usage */
  CloudTimelineData: CloudTimelineDataProps

  /* 🔧 FIX: array (you map over it) */
  qualitySectionData: qualitySectionProps[]

  /* 🔧 FIX: object (not array) */
  impactSection: ImpactSectionProps

  /* 🔧 FIX: array (used as leftCards[]) */
  leftCardData: leftCardData[]

  hero: {
    title: { text: string; color: string }[]
    description: { text: string; color: string }[]
    image?: StaticImageData | string
    backgroundImage?: StaticImageData | string
    buttonText?: string
    lottieData: object
    breadcrumbs?: BreadcrumbItem[]
  }

  solutions: {
    headingContent: { text: string; color: string }[]
    subHeadingText: string
  }

  pointsTitle?: { text: string; color: string }[]
  solutionTitle?: { text: string; color: string }[]
  solutionPoints?: string[]

  points: string
  highlightText: string

  featuresData: {
    imgSrc: StaticImageData | string
    title: string
    description: string
  }[]

  tabs?: {
    headingText: string
    subHeadingText: string
    tabs: {
      id: number
      title: string
      description: string
      image: StaticImageData | string
      imgHeight?: string
    }[]
  }

  utilisArr?: {
    image: StaticImageData | string
    category: string
    title: string
    desc: string
  }[]

  processSteps?: {
    headingText: { text: string; color: string }[]
    subHeadingText: string
    steps?: {
      id?: number
      title: string
      description: string
    }[]
  }

  mobDesignBanner: StaticImageData | string

  whyChooseData: {
    headingText: string
    subHeadingText: string
    steps: {
      icon: StaticImageData | string
      title: string
      description: string
    }[]
  }

  slides: {
    image: StaticImageData | string
    title: string
    desc: string
  }[]

  banner?: {
    headingText: { text: string; color?: string }[]
    subHeadingText?: { text: string; color?: string }[]
    image: StaticImageData | string
    imageHeight?: string
  }

  quoteBanner?: {
    headingText: { text: string; color?: string }[]
    subHeadingText?: { text: string; color?: string }[]
    image: StaticImageData | string
    buttonText?: string
  }

  seo: {
    title: string
    description: string
    keywords: string
    canonical: string
    ogImage: string
  }

  accordionData: IAccordionItem[]

  featureDataContent?: {
    headingContent: { text: string; color: string }[]
    subHeadingText: string
    featuresData: {
      imgSrc: StaticImageData | string
      title: string
      description: string
    }[]
  }
}
