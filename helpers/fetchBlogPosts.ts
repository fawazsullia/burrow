import { blogPostsQuery } from "../queries"

const fetchBlogPosts = () => {

    return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
        method : "POST",
        headers : {
            "content-type" : "application/json",
            "Authorization" : `Bearer ${process.env.CONTENTFUL_TOKEN}`
        },
        body : JSON.stringify(blogPostsQuery)
    })

}

export default fetchBlogPosts