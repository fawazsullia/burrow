import React from 'react'
import { IPost } from '../types'
import Markdown from 'markdown-to-jsx';
import styles from './styles/Article.module.css'


const Article = (props : {post : IPost}) => {
  return (
    <article className={styles.container}>
      <Markdown className={styles.article}>{props.post.article}</Markdown>
    </article>
  )
}

export default Article