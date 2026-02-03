"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
  textColor?: string // NEW: optional Tailwind color class
}

export default function Breadcrumb({
  items,
  className,
  textColor = "text-white", // default color
}: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex w-full items-center gap-2 overflow-hidden text-sm text-[14px] uppercase md:text-[18px]",
        className
      )}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1

        return (
          <span key={index} className="flex items-center gap-2">
            {!isLast ? (
              <Link
                href={item.href ?? "#"}
                className={cn(textColor, "transition-opacity hover:opacity-80")}
              >
                {item.label}
              </Link>
            ) : (
              <span
                className={cn(
                  textColor,
                  "text-opacity-60 overflow-hidden text-nowrap text-ellipsis"
                )}
              >
                {item.label}
              </span>
            )}

            {!isLast && (
              <span className={cn(textColor, "text-opacity-40 text-nowrap")}>
                /
              </span>
            )}
          </span>
        )
      })}
    </nav>
  )
}
