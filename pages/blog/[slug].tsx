import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Article from '../../components/Article'
import BlogHead from '../../components/BlogHead'
import Wrapper from '../../components/Wrapper'
import fetchBlogPaths from '../../helpers/fetchBlogPaths'
import fetchBlogPostBySlug from '../../helpers/fetchBlogPostBySlug'
import setPathsFromResponse from '../../helpers/setPathsFromResponse'
import styles from '../../styles/Slug.module.css'
import { IBlogPostProps, IPost } from '../../types'
import config from '../../config'
import BreadCrumbs from '../../components/BreadCrumbs'


const BlogPost: NextPage<IBlogPostProps> =(props)=> {

  const post = props.post
  console.log(props)


  return (
    <div>
      <Head>
        <title>{post.title} | {config.siteTitle}</title>
        <meta name="description" content={post.description !== "" ? post.description : config.meta.defaultBlogPostMetaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Wrapper>
    <main className={styles.main}>
    <BlogHead post={post} />
    <hr />
    <BreadCrumbs slug={props.slug}/>
    <Article post={post} />

    </main>
    </Wrapper>
    </div>
  )
}



// ----------------------------------------------------------------------
// get the paths
export const getStaticPaths : GetStaticPaths = async ()=> {
const response  = await fetchBlogPaths();
let res = await response.json()

//takes in a response and returns an array of slugs -- custom to this site
// change the custom function from the /helpers/setPathsFromResponse.ts
const paths = setPathsFromResponse(res)

return {
  paths : paths,
  fallback : false
}
}

//get props (posts) based on the slug

export const getStaticProps : GetStaticProps = async ({params}: any) => {

const response = await fetchBlogPostBySlug(params.slug)
const res = await response.json()
return {
  props : {
    post : res.data.blogPostCollection.items[0],
    slug : params.slug
  }
}

}

export default BlogPost
