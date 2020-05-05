import React from 'react'
import postData from 'src/contents/postData.json'
import Date from 'src/components/Date'
import PostTitle from 'src/components/PostTitle'
import Emoji from 'src/components/Emoji'
import { P, Img } from 'src/components/Tags'
import FeaturedPostLink from 'src/components/FeaturedPostLink'
import featuredPosts from 'src/contents/featuredPosts.json'
import Head from 'next/head'
import { SITE_TITLE, SITE_URL } from 'src/lib/constants'

type Props = {
  href: string
  children: React.ReactNode
}

export default function Post({ href, children }: Props) {
  return (
    <>
      <Head>
        <title key="title">
          {postData[href]['title']} — {SITE_TITLE}
        </title>
        <meta property="og:title" content={postData[href]['title']} />
        <meta property="og:url" content={`${SITE_URL}${href}`} />
        <link rel="canonical" href={`${SITE_URL}${href}`} />
        <meta
          property="og:description"
          content={postData[href]['description']}
        />
        <meta name="description" content={postData[href]['description']} />
        <meta
          property="og:image"
          content={`${SITE_URL}${postData[href]['ogImage']}`}
        />
      </Head>
      <article className="py-4 my-12">
        <Date date={postData[href]['date']} />
        <h1 className="mb-3">
          <PostTitle>{postData[href]['title']}</PostTitle>
        </h1>
        <h4 className="leading-loose font-sans text-sm">
          {postData[href]['description']}
        </h4>
        <div className="leading-loose">
          <Img
            coverImage
            src={postData[href]['ogImage']}
            alt={postData[href]['title']}
          />
          {children}
        </div>
      </article>
      <div className="py-16">
        <P className="text-center text-sm">ありがとうございました</P>
        <div className="my-6 flex justify-center text-2xl" role="separator">
          <Emoji className="mx-2">🙇🏻</Emoji>
          <Emoji className="mx-2">🙇🏻</Emoji>
          <Emoji className="mx-2">🙇🏻</Emoji>
        </div>
        <P className="text-center text-sm">↓ 他の記事もよければどうぞ ↓</P>
      </div>
      {featuredPosts
        .filter((featuredPost) => href !== featuredPost.href)
        .map((featuredPost) => (
          <FeaturedPostLink
            key={featuredPost.href}
            href={featuredPost.href}
            title={postData[featuredPost.href]['title']}
            description={postData[featuredPost.href]['description']}
            date={postData[featuredPost.href]['date']}
          ></FeaturedPostLink>
        ))}
    </>
  )
}
