import React from 'react'
import Layout from 'src/components/Layout'
import postGetStaticProps, { PostProps } from 'src/lib/postGetStaticProps'
import RegularPostLink from 'src/components/RegularPostLink'
import PostTitle from 'src/components/PostTitle'
import oldPosts from 'src/contents/oldPosts.json'
import postData from 'src/contents/postData.json'
import Head from 'next/head'
import { SITE_TITLE, SITE_URL, SITE_DESCRIPTION } from 'src/lib/constants'

export const getStaticProps = postGetStaticProps(Page)

export default function Page({ emojiToSvg }: PostProps) {
  return (
    <Layout type="archive" emojiToSvg={emojiToSvg}>
      <Head>
        <title key="title">Archive — {SITE_TITLE}</title>
        <meta property="og:title" content="Archive" />
        <meta property="og:url" content={`${SITE_URL}/archive`} />
        <link rel="canonical" href={`${SITE_URL}/archive`} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={`${SITE_URL}/images/og.png`} />
      </Head>
      <h1 className="py-4 my-12">
        <PostTitle>Archive</PostTitle>
      </h1>
      {oldPosts.map(({ href }) => (
        <RegularPostLink
          key={href}
          href={href}
          title={postData[href]['title']}
          date={postData[href]['date']}
          old
        />
      ))}
    </Layout>
  )
}
