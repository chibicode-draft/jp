import otherPosts from 'src/contents/otherPosts.json'
import postData from 'src/contents/postData.json'

type OtherPosts = { href: keyof typeof postData }[]

const otherPostsTyped = otherPosts as OtherPosts

export default otherPostsTyped
