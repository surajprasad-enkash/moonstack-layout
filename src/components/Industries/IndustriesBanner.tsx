interface IndustryTagsProps {
  tags: string[];
  activeTag?: string; // visual highlight only
}

export default function IndustryTags({
  tags,
  activeTag,
}: IndustryTagsProps) {
  return (
    <div className="mt-[24px] flex flex-wrap gap-[5px] w-fit">
      {tags.map((tag) => {

        return (
          <span
            key={tag}
            className={`
              inline-flex items-center justify-center px-[20px] py-[6px] text-[14px]  rounded-full whitespace-nowrap text-[#ffffff] border border-[#ffffff4d]
            `}
          >
            {tag}
          </span>
        );
      })}
    </div>
  );
}
