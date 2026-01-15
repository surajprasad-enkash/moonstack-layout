import { ReactNode } from "react";

export interface ICategory {
  id: number;
  slug: string;
  name: string;
}

export interface IPostData {
  updated_date: ReactNode;
  publish_date: ReactNode;
  author: any;
  read_time: any;
  id: number;
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
  excerpt: string;
  category: ICategory | null; // ✅ ADDED
}
