import { HeadingSegment } from "@/components/Heading/Heading";

export interface ProcessItem {
  label: string;
}

export interface ProcessStage {
  stage: string;
  title: string;
  items: ProcessItem[];
  gradient?: string;
}

export interface AgencyWorkFlowSectionProps {
  heading: string | HeadingSegment[];
  description?: string | HeadingSegment[];

  className?: string;
}
