import React, { useState } from 'react'
import Layout from 'src/components/Layout'
import postGetStaticProps, { PostProps } from 'src/lib/postGetStaticProps'
import RegularPostLink from 'src/components/RegularPostLink'
import PostTitle from 'src/components/PostTitle'
import oldPosts from 'src/contents/oldPosts.json'
import hiddenPosts from 'src/contents/hiddenPosts.json'
import postData from 'src/contents/postData.json'
import Head from 'next/head'
import { SITE_TITLE, SITE_URL, SITE_DESCRIPTION } from 'src/lib/constants'
import { Hr } from 'src/components/Tags'

export const getStaticProps = postGetStaticProps(Page)

export default function Page({ emojiToSvg }: PostProps) {
  const [otherVisbile, setOtherVisible] = useState(false)
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
      {otherVisbile ? (
        <>
          <Hr />
          {hiddenPosts.map(({ href }) => (
            <RegularPostLink
              key={href}
              href={href}
              title={postData[href]['title']}
              date={postData[href]['date']}
              old
            />
          ))}
        </>
      ) : (
        <div className="my-16 text-center">
          <button
            className="text-sm hover-border-styles hover:border-yellow-400 focus:outline-none"
            onClick={() => setOtherVisible(true)}
          >
            その他の記事を見る
          </button>
        </div>
      )}
    </Layout>
  )
}
