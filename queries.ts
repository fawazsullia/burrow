export const blogPostsQuery = {
    query : `query {
        blogPostCollection {
            items {
              postId,
              title,
              slug,
              tags,
              publishedDate,
              excerpt,

        
            }
          }
        }`
}

export const blogPathQuery = {
    query : `query {
        blogPostCollection {
            items {
              slug
            }
          }
        }`
}

export const blogPostBySlugQuery = {
    query : `query ($url : String){
        blogPostCollection (where : {slug : $url}) {
          items {
            title,
            author,
            publishedDate,
            tags,
            article,
            description
          }
        }
        }`
      
}