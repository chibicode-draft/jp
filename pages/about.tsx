import React from 'react'
import Layout from 'src/components/Layout'
import postGetStaticProps, { PostProps } from 'src/lib/postGetStaticProps'
import Head from 'next/head'
import { SITE_TITLE, SITE_URL, SITE_DESCRIPTION } from 'src/lib/constants'
import { E, A, P, H2, H3, Ul, Li } from 'src/components/Tags'

export const getStaticProps = postGetStaticProps(Page)

export default function Page({ emojiToSvg }: PostProps) {
  return (
    <Layout type="about" emojiToSvg={emojiToSvg}>
      <Head>
        <title key="title">About — {SITE_TITLE}</title>
        <meta property="og:title" content="About" />
        <meta property="og:url" content={`${SITE_URL}/archive`} />
        <link rel="canonical" href={`${SITE_URL}/archive`} />
        <meta property="og:description" content={SITE_DESCRIPTION} />
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta property="og:image" content={`${SITE_URL}/images/og.png`} />
      </Head>
      <section className="leading-loose">
        <div className="my-16">
          <img
            src="/images/chibicode.jpg"
            alt="上杉周作"
            className="rounded-full w-56 block mx-auto shadow-soft"
          />
        </div>
        <H2>上杉周作</H2>
        <P>
          『
          <A href="https://www.amazon.co.jp/FACTFULNESS-%E3%83%95%E3%82%A1%E3%82%AF%E3%83%88%E3%83%95%E3%83%AB%E3%83%8D%E3%82%B9-10%E3%81%AE%E6%80%9D%E3%81%84%E8%BE%BC%E3%81%BF%E3%82%92%E4%B9%97%E3%82%8A%E8%B6%8A%E3%81%88%E3%80%81%E3%83%87%E3%83%BC%E3%82%BF%E3%82%92%E5%9F%BA%E3%81%AB%E4%B8%96%E7%95%8C%E3%82%92%E6%AD%A3%E3%81%97%E3%81%8F%E8%A6%8B%E3%82%8B%E7%BF%92%E6%85%A3-%E3%83%8F%E3%83%B3%E3%82%B9%E3%83%BB%E3%83%AD%E3%82%B9%E3%83%AA%E3%83%B3%E3%82%B0/dp/4822289605">
            FACTFULNESS(ファクトフルネス)
          </A>
          』共訳者。<A href="https://vercel.com">Vercel</A>
          社のエンジニア。代表作は『
          <A href="https://yj.chibicode.com">
            コンピュータサイエンスと魔法のYコンビネータ
          </A>
          』。米国在住。
        </P>
        <H3>連絡先</H3>
        <Ul>
          <Li>
            <strong>メール:</strong>{' '}
            <A href="mailto:shu@chibicode.com">shu@chibicode.com</A>
          </Li>
          <Li>
            <strong>Facebook:</strong>{' '}
            <A href="https://www.facebook.com/shu">Shu Uesugi</A>
          </Li>
          <Li>
            <strong>Twitter:</strong>{' '}
            <A href="https://twitter.com/chibicode">@chibicode</A>
          </Li>
          <Li>
            <strong>GitHub:</strong>{' '}
            <A href="https://github.com/chibicode">@chibicode</A>
          </Li>
          <Li>
            <strong>英語サイト:</strong>{' '}
            <A href="https://chibicode.com">chibicode.com</A>
          </Li>
        </Ul>
        <H3>このサイトについて</H3>
        <Ul>
          <Li>
            <E>🌾</E> <E>🙇🏻</E>{' '}
            は、「実るほど頭を垂れる稲穂かな」という意味です。
          </Li>
          <Li>
            <A href="https://nextjs.org/">Next.js</A>で構築し、
            <A href="https://vercel.com/">Vercel</A>にデプロイしています。
          </Li>
          <Li>
            絵文字は<A href="https://github.com/twitter/twemoji">Twemoji</A>
            を利用しています(CC-BY 4.0)。
          </Li>
          <Li>文章の著作権は著者の上杉周作にあります。</Li>
          <Li>
            当サイトではGoogleアナリティクスを利用しており、トラフィックデータの収集のためにCookieを使用しています。データは(IPアドレスを含め)匿名で収集されており、個人を特定するものではありません。
          </Li>
          <Li>
            <A href="/archive">過去ログはこちら</A>。
          </Li>
        </Ul>
      </section>
    </Layout>
  )
}
