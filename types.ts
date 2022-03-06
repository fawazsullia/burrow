// interface for the blog page props ---> /blog

import { ReactChildren } from "react";

export interface IPost {
  title: string;
  author: string;
  publishedDate: string;
  tags?: [string];
  article: string;
  description? : string
}

export interface IBlogPostProps {
    post : IPost,
    children : ReactChildren,
    slug :  string
}
