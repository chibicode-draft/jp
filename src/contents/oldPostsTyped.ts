import oldPosts from 'src/contents/oldPosts.json'
import postData from 'src/contents/postData.json'

type OldPosts = { href: keyof typeof postData }[]

const oldPostsTyped = oldPosts as OldPosts

export default oldPostsTyped
