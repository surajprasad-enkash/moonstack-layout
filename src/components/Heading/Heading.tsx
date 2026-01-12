import React, { JSX } from "react";
import Link from "next/link";
import clsx from "clsx";

type HeadingTag = keyof JSX.IntrinsicElements;

export interface HeadingSegment {
  title?: string | number;
  name?: string;
  text?: string;
  color?: string;
  tag?: HeadingTag;
  className?: string;
  link?: string;
}

interface HeadingProps {
  content?: string | number | HeadingSegment[];
  headingTag?: HeadingTag;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({
  content = [],
  headingTag = "h2",
  className = "",
}) => {
  const Tag = headingTag;

  // ✅ Normalize content
  const normalizedContent: HeadingSegment[] = Array.isArray(content)
    ? content
    : [{ text: String(content) }];

  const headingClassMap: Record<string, string> = {
    h1: " ",
    h2: "",
    h3: " ",
    h4: "",
    h5: "",
    h6: "",
    p: "",
  };

  const defaultClass = headingClassMap[headingTag] || "";

  return (
    <Tag className={clsx(defaultClass, className)}>
      {normalizedContent.map((item, i) => {
        const Element = item.tag || "span";
        const text = item.title ?? item.name ?? item.text ?? "";

        const isTailwindClass =
          item.color?.startsWith("text-") || item.color?.startsWith("bg-");

        const segmentClasses = clsx(
          item.className,
          isTailwindClass && item.color,
        );

        const style =
          !isTailwindClass && item.color ? { color: item.color } : undefined;

        const innerContent = (
          <Element key={i} className={segmentClasses} style={style}>
            {" " + text}
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
