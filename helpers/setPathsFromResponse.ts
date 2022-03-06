const setPathsFromResponse = (resp : any) => {

const paths = resp.data.blogPostCollection.items.map((r : { slug : String})=> `/blog/${r.slug}` )

return paths
}

export default setPathsFromResponse