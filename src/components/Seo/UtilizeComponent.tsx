import React from "react";
import Heading from "../Heading/Heading";
import CategoryCard from "../CategoryCard/CategoryCard";

interface ICardItem {
  image: string;
  title: string;
  desc: string;
}

interface UtilizeSectionProps {
  headingLines: { text: string; color?: string }[];
  subHeadingLines?: { text: string; color?: string }[];
  items: ICardItem[];
  bgColor?: string;
  containerClass?: string;
  gridCols?: string;
}

const ReusableUtilizeSection: React.FC<UtilizeSectionProps> = ({
  headingLines,
  subHeadingLines,
  items,
  bgColor = "bg-black",
  containerClass = "container mx-auto  px-4 sm:px-10 py-12 md:py-20 ",
  gridCols = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
}) => {
  return (
    <div className={`${bgColor} text-white ${containerClass}`}>
      <div className="pt-20">
        {/* Main Heading */}
        <Heading
          headingTag="h2"
          className="font-bold pt-3 text-white font-36 text-center"
          content={headingLines}
        />

        {/* Subheading (optional) */}
        {subHeadingLines && (
          <Heading
            headingTag="p"
            className="font-bold pt-3 text-white font-14 text-center"
            content={subHeadingLines}
          />
        )}

        {/* Cards Grid */}
        <div className={`grid ${gridCols} gap-6 pt-20 w-full md:w-2/3 mx-auto`}>
          {items.map((feature, index) => (
            <CategoryCard
              key={index}
              imgSrc={feature.image}
              title={feature.title}
              description={feature.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReusableUtilizeSection;
