import postData from 'src/contents/postData.json'

type PostData = Record<
  keyof typeof postData,
  {
    title: string
    description?: string
    ogImage?: string
    ogImageWidth?: number
    ogImageHeight?: number
    date: number[]
  }
>

const postDataTyped: PostData = postData

export default postDataTyped
