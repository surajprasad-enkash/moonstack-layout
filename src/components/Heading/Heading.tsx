import React, { JSX } from "react";
import Link from "next/link";

type HeadingTag = keyof JSX.IntrinsicElements;

interface HeadingSegment {
  title?: string | number;
  name?: string;
  text?: string;
  color?: string; 
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
  className,
}) => {
  const Tag = headingTag;

  return (
    <Tag className={className}>
      {content.map((item, i) => {
        const Element = item.tag || "span";
        const text = item.title ?? item.name ?? item.text ?? "";
        const segmentClasses = [item.color, item.className]
          .filter(Boolean)
          .join(" ");

        const innerContent = (
          <Element key={i} className={segmentClasses || undefined}>
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
