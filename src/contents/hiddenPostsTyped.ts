import hiddenPosts from 'src/contents/hiddenPosts.json'
import postData from 'src/contents/postData.json'

type HiddenPosts = { href: keyof typeof postData }[]

const hiddenPostsTyped = hiddenPosts as HiddenPosts

export default hiddenPostsTyped
