import getEmojiToSvg from 'src/lib/getEmojiToSvg'
import { GetStaticProps } from 'next'
import { EmojiToSvg } from 'src/hooks/useEmojiToSvg'

export type PostProps = {
  emojiToSvg: EmojiToSvg
}

const postGetStaticProps = (
  Page: React.ComponentType<{ emojiToSvg: EmojiToSvg }>
): GetStaticProps<PostProps> => {
  return async () => {
    const emojiToSvg = await getEmojiToSvg(Page)
    return {
      props: {
        emojiToSvg,
      },
    }
  }
}

export default postGetStaticProps
