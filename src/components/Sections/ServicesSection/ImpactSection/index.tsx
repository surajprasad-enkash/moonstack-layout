"use client"

import Image from "next/image"
import clsx from "clsx"
import gradientBorder from "@/assets/app-development-images/gradient-middle-border.svg"
import Heading from "@/components/Heading/Heading"

/* =========================
   Types
========================= */

export interface ImpactHeadingItem {
  text: string
  color?: string
  className?: string
}

export interface ImpactCardProps {
  id?: string
  logo?: string
  title?: string
  value?: string
  label?: string
  description?: string
  variant?: "dark" | "light" | "accent"
}

export interface ImpactSectionProps {
  heading?: ImpactHeadingItem[]
  description?: string
  cards: ImpactCardProps[]
  className?: string
}

/* =========================
   Card Variants
========================= */

const cardVariants: Record<NonNullable<ImpactCardProps["variant"]>, string> = {
  dark: `
    transition-all duration-300 text-white
    bg-[radial-gradient(120.84%_134.38%_at_94.57%_97.18%,#207049_0%,#1C1C1C_63.02%,#1C1C1C_100%)]
    hover:bg-[linear-gradient(180deg,#24e283_-10.6%,rgba(36,226,80,0)_123.74%),radial-gradient(120.84%_134.38%_at_94.57%_97.18%,#207050_0%,#1C1C1C_63.02%,#1C1C1C_100%)]
  `,
  light: `
    transition-all duration-300 text-white
    bg-[radial-gradient(120.84%_134.38%_at_94.57%_97.18%,#305e50_0%,#1C1C1C_63.02%,#1C1C1C_100%)]
    hover:bg-[linear-gradient(180deg,#C2DDEC_-14%,rgba(48,94,51,0)_112.9%),radial-gradient(120.84%_134.38%_at_94.57%_97.18%,#305e51_0%,#1C1C1C_63.02%,#1C1C1C_100%)]
  `,
  accent: `
    transition-all duration-300 text-white
    bg-[radial-gradient(120.84%_134.38%_at_94.57%_97.18%,#3a9015_0%,#1C1C1C_63.02%,#1C1C1C_100%)]
    hover:bg-[linear-gradient(180deg,#3a9015_-14%,rgba(40,221,109,0)_112.9%),radial-gradient(120.84%_134.38%_at_94.57%_97.18%,#3a9015_0%,#1C1C1C_63.02%,#1C1C1C_100%)]
  `,
}

/* =========================
   Component
========================= */

const ImpactSection: React.FC<ImpactSectionProps> = ({
  heading,
  description,
  cards,
  className,
}) => {
  return (
    <section
      className={clsx("relative px-4 pt-[60px] pb-[0px] md:py-24", className)}
    >
      <div className="container mx-auto">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          {heading && (
            <Heading headingTag="h2" className="text-white" content={heading} />
          )}

          {description && (
            <Heading
              headingTag="p"
              className="mt-4 text-white/80"
              content={description}
            />
          )}
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-1 md:grid-cols-3">
          {cards.map((card, index) => {
            const variant = card.variant ?? "dark"

            return (
              <div
                key={card.id ?? index}
                className={clsx(
                  "rounded-3xl p-8 backdrop-blur-md",
                  cardVariants[variant]
                )}
              >
                {/* Logo */}
                {card.logo && (
                  <div className="mb-[63px] h-[80px]">
                    <Image
                      src={card.logo}
                      alt={card.title ?? "Impact logo"}
                      width={200}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                )}

                {/* Value */}
                {card.value && (
                  <Heading
                    headingTag="h3"
                    className="text-3xl font-bold"
                    content={card.value}
                  />
                )}

                {/* Label */}
                {card.label && (
                  <Heading
                    headingTag="h4"
                    className="mt-2 font-medium text-white/90"
                    content={card.label}
                  />
                )}

                <Image
                  src={gradientBorder}
                  alt="gradient-middle-border"
                  height={1}
                  className="mt-4 w-full"
                />

                {/* Description */}
                {card.description && (
                  <p className="mt-6 text-sm text-white/70">
                    {card.description}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ImpactSection
