import { StaticImageData } from "next/image"
import { HeadingSegment } from "@/components/Heading/Heading"

export interface ImpactCard {
  id?: string
  logo?: StaticImageData | string
  title?: string
  value?: string
  label?: string
  description?: string
  variant?: "dark" | "light" | "accent"
}

export interface ImpactSectionProps {
  heading: string | HeadingSegment[]
  description?: string | HeadingSegment[]
  cards: ImpactCard[]
  className?: string
}
