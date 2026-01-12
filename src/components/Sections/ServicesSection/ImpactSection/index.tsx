"use client";

import Image from "next/image";
import clsx from "clsx";
import { ImpactSectionProps } from "@/types/impact";
import gradientBorder from "public/assets/app-development-images/gradient-middle-border.svg";
import Heading from "@/components/Heading/Heading";

const cardVariants = {
  dark: `
    transition-all duration-300 text-white
    bg-[radial-gradient(120.84%_134.38%_at_94.57%_97.18%,#362070_0%,#1C1C1C_63.02%,#1C1C1C_100%)]
    hover:bg-[linear-gradient(180deg,#7824E2_-10.6%,rgba(120,36,226,0)_123.74%),radial-gradient(120.84%_134.38%_at_94.57%_97.18%,#362070_0%,#1C1C1C_63.02%,#1C1C1C_100%)]
  `,

  light: `
    transition-all duration-300 text-white
    bg-[radial-gradient(120.84%_134.38%_at_94.57%_97.18%,#30465E_0%,#1C1C1C_63.02%,#1C1C1C_100%)]
    hover:bg-[linear-gradient(180deg,#C2DDEC_-14%,rgba(48,70,94,0)_112.9%),radial-gradient(120.84%_134.38%_at_94.57%_97.18%,#30465E_0%,#1C1C1C_63.02%,#1C1C1C_100%)]
  `,

  accent: `
    transition-all duration-300 text-white
    bg-[radial-gradient(120.84%_134.38%_at_94.57%_97.18%,#151B90_0%,#1C1C1C_63.02%,#1C1C1C_100%)]
    hover:bg-[linear-gradient(180deg,#283ADD_-14%,rgba(40,58,221,0)_112.9%),radial-gradient(120.84%_134.38%_at_94.57%_97.18%,#151B90_0%,#1C1C1C_63.02%,#1C1C1C_100%)]
  `,
};

const ImpactSection: React.FC<ImpactSectionProps> = ({
  heading,
  description,
  cards,
  className,
}) => {
  return (
    <section className={clsx("relative px-4 py-24", className)}>
      <div className="container">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <Heading headingTag="h2" className="text-white" content={heading} />
          {description && (
            <Heading
              headingTag="p"
              className="mt-4 !font-[500] text-white/80"
              content={description}
            />
          )}
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-1 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.id}
              className={clsx(
                "rounded-3xl p-8 backdrop-blur-md",
                cardVariants[card.variant || "dark"],
              )}
            >
              {card.logo && (
                <div className="mb-[63px] h-[80px]">
                  <Image
                    src={card.logo}
                    alt={card.title}
                    width={200}
                    height={80}
                    className="object-contain"
                  />
                </div>
              )}

              <Heading
                headingTag="h3"
                className="text-3xl font-bold"
                content={card.value}
              />

              <Heading
                headingTag="h4"
                className="mt-2 font-medium text-white/90"
                content={card.label}
              />
              <Image
                src={gradientBorder}
                alt={"gradient-middle-border"}
                height={1}
                className="w-full"
              />
              <p className="mt-6 text-sm text-white/70">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
