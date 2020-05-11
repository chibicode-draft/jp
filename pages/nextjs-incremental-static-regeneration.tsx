import React from 'react'
import { GetStaticProps } from 'next'
import Layout from 'src/components/Layout'
import { PostBaseProps } from 'src/lib/postGetStaticProps'
import Post from 'src/components/Post'
import { P } from 'src/components/Tags'
import getEmojiToSvg from 'src/lib/getEmojiToSvg'
import getIssueComments, { Comment } from 'src/lib/getIssueComments'

type Props = {
  comments: Comment[]
}

export const getStaticProps: GetStaticProps<
  PostBaseProps & Props
> = async () => {
  const emojiToSvg = await getEmojiToSvg<Props>(Page, { comments: [] })
  const comments = await getIssueComments()

  return {
    props: {
      emojiToSvg,
      comments,
    },
    // eslint-disable-next-line
    unstable_revalidate: 5,
  }
}

export default function Page({ emojiToSvg, comments }: PostBaseProps & Props) {
  return (
    <Layout type="post" emojiToSvg={emojiToSvg}>
      <Post href="/nextjs-incremental-static-regeneration">
        <P>{JSON.stringify(comments)}</P>
      </Post>
    </Layout>
  )
}
