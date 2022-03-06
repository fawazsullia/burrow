import type { NextPage } from 'next'
import Head from 'next/head'
import fetchBlogPosts from '../helpers/fetchBlogPosts'
import formatDate from '../helpers/formatDate'
import Link from 'next/link'
import Wrapper from '../components/Wrapper'
import styles from '../styles/Blog.module.css'
import getPostsFromResponse from '../helpers/getPostsFromResponse'
import config from '../config'

const Blog : NextPage = (props : any) => {


  return (

    <div>
      <Head>
        <title>{config.meta.blogPageTitle}</title>
        <meta name="description" content={config.meta.blogPageDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
      <main className={styles.main}>
          <p className={styles.intro}>Write something cool about yourself here. go crazy</p>
          <div className={styles.blogListDiv}>
              {
                  props.posts.map((p : any)=> {
                      return <div key={p.postId} className={styles.blogPost}>
                          <h3 className={styles.postTitle}><Link href={`/blog/${p.slug}`}>{p.title}</Link></h3>
                          <div className={styles.meta}>
                          <p>{formatDate(p.publishedDate)}</p>
                          { p.tags? <p>{p.tags.join(", ")}</p> : null }
                          </div>
                          { p.excerpt !== "" ? <p className={styles.excerpt}>{p.excerpt}</p> : null}
                            </div>
                  })
              }
          </div>
      </main>
      </Wrapper>
      </div>
  )
}

export const getStaticProps = async ()=> {

        const response = await fetchBlogPosts()
        const res = await response.json()
        const posts = getPostsFromResponse(res)


    return {
        props : {
        posts : posts
    }
}

}

export default Blog
