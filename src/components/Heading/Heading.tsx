import React, { JSX } from "react";
import Link from "next/link";
import clsx from "clsx";

type HeadingTag = keyof JSX.IntrinsicElements;

interface HeadingSegment {
  title?: string | number;
  name?: string;
  text?: string;
  color?: string; // can be Tailwind class (e.g. text-brand200) or hex (#00EA52)
  tag?: HeadingTag;
  className?: string;
  link?: string;
}

interface HeadingProps {
  content?: HeadingSegment[];
  headingTag?: HeadingTag;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  content = [],
  headingTag = "h2",
  className = "",
}) => {
  const Tag = headingTag;

  const headingClassMap: Record<string, string> = {
    h1: "text-[28px] leading-[32px] md:text-[80px] md:leading-[125%] tracking-[-0.04em]",
    h2: "text-[21px] leading-[32px] md:text-[60px] md:leading-[140%] tracking-[-0.04em]",
    h3: "text-[20px] leading-[32px] md:text-[40px] md:leading-[140%] tracking-[-0.04em]",
    h4: "text-[16px] leading-[32px] md:text-[36px] md:leading-[140%] tracking-[-0.04em]",
    h5: "text-[12px] leading-[16px] md:text-[24px] md:leading-[140%] tracking-[-0.04em]",
    h6: "text-[9px] leading-[28px] md:text-[20px] md:leading-[140%] tracking-[-0.04em]",
    h7: "text-[12px] leading-[28px] md:text-[18px] md:leading-[140%] tracking-[-0.04em]",
    p: "text-[12px] leading-[28px] md:text-[14px] md:leading-[200%] tracking-[-0.04em]",
  };

  const defaultClass = headingClassMap[headingTag] || "";

  return (
    <Tag className={clsx(defaultClass, className)}>
      {content.map((item, i) => {
        const Element = item.tag || "span";
        const text = item.title ?? item.name ?? item.text ?? "";

        // ✅ Detect if color is a Tailwind class or a raw color value
        const isTailwindClass =
          item.color?.startsWith("text-") || item.color?.startsWith("bg-");

        const segmentClasses = clsx(
          item.className,
          isTailwindClass && item.color
        );
        const style =
          !isTailwindClass && item.color ? { color: item.color } : undefined;

        const innerContent = (
          <Element key={i} className={segmentClasses} style={style}>
            {text}
          </Element>
        );

        return item.link ? (
          <Link key={i} href={item.link} className="no-underline">
            {innerContent}
          </Link>
        ) : (
          innerContent
        );
      })}
    </Tag>
  );
};

export default Heading;
