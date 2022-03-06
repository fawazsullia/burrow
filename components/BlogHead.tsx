import React from "react";
import formatDate from "../helpers/formatDate";
import { IPost } from "../types";
import styles from "./styles/BlogHead.module.css";

const BlogHead = ({ post }: { post: IPost }) => {
  return (
    <section className={styles.container}>
      <h1>{post.title}</h1>
      <div className={styles.meta}>
        <p>Published by : {post.author}</p>
        <p>|</p>
        <p>{formatDate(post.publishedDate)}</p>
      </div>
    </section>
  );
};

export default BlogHead;
