import { StaticImageData } from "next/image";
import { HeadingSegment } from "../components/Heading/Heading";

export interface FeatureItem {
  imgSrc: string | StaticImageData;
  title: string;
  description?: string;
}

export interface FeatureSectionProps {
  heading: string | HeadingSegment[];
  features: FeatureItem[];
  className?: string;
  column?: 2 | 3 | 4; // ✅ optional
}
