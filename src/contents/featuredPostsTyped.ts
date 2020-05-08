import featuredPosts from 'src/contents/featuredPosts.json'
import postData from 'src/contents/postData.json'

type FeaturedPosts = { href: keyof typeof postData }[]

const featuredPostsTyped = featuredPosts as FeaturedPosts

export default featuredPostsTyped
