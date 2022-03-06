import { blogPostBySlugQuery } from "../queries"

const fetchBlogPostBySlug =  (url : String) => {

    return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
        method : "POST",
        headers : {
            "content-type" : "application/json",
            "Authorization" : `Bearer ${process.env.CONTENTFUL_TOKEN}`
        },
        body : JSON.stringify({query : blogPostBySlugQuery.query, variables : {url}})
    })
   
}




export default fetchBlogPostBySlug