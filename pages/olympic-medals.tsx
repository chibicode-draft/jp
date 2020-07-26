import React from 'react'
import Layout from 'src/components/Layout'
import postGetStaticProps, { PostBaseProps } from 'src/lib/postGetStaticProps'
import Post from 'src/components/Post'
import { P, A, Ul, Li, H2 } from 'src/components/Tags'
import TwitterEmbed from 'src/components/TwitterEmbed'
import Emoji from 'src/components/Emoji'

export const getStaticProps = postGetStaticProps(Page)

export default function Page({ emojiToSvg }: PostBaseProps) {
  return (
    <Layout type="post" emojiToSvg={emojiToSvg}>
      <Post href="/olympic-medals">
        <P>
          こんにちは。
          <A href="https://en.wikipedia.org/wiki/Helen_Resor_(ice_hockey)">
            冬季オリンピック元銅メダリスト
          </A>
          と前職で席が隣だった
          <A href="https://twitter.com/chibicode">@chibicode</A>
          です。
        </P>
        <P>昨日、ツイッターでこんなクイズを出題しました。</P>
        <P>
          <strong>
            【質問】2016年リオ五輪にて、いずれかのメダルをひとつでも獲得した国・地域の数はいくつでしょう？
          </strong>
          以下の3択から選んで下さい。
        </P>
        <Ul>
          <Li>
            <strong>A. 39以下</strong>
          </Li>
          <Li>
            <strong>B. 40〜79</strong>
          </Li>
          <Li>
            <strong>C. 80以上</strong>
          </Li>
        </Ul>
        <P>
          結果は以下の通り。301名の方々が解答してくださいました。ご協力ありがとうございます。
        </P>
        <TwitterEmbed id="1286905902050635778" />
        <P>
          「39以下」と答えた方が半数以上で54%、「40〜79」と答えた方が21%、「80以上」と答えた方が25%でした。
        </P>
        <H2>
          <Emoji>🐵</Emoji> 正解率はチンパンジー以下
        </H2>
        <P>
          2016年リオ五輪にて、いずれかのメダルをひとつでも獲得した国・地域の数は「
          <A href="https://en.wikipedia.org/wiki/2016_Summer_Olympics_medal_table">
            <strong>86カ国</strong>
          </A>
          」です。つまり、「<strong>80以上</strong>」が正解でした。
        </P>
        <P>
          正解率は25%でした。3択問題なので
          <A href="https://factquiz.chibicode.com/">
            チンパンジー(ランダム解答)以下
          </A>
          の正解率です。正解から最も遠い「39以下」を選んだ方は54%もいました。
        </P>
        <H2>
          <Emoji>🏅</Emoji> 2016年リオ五輪にてメダルを獲得した国一覧
        </H2>
      </Post>
    </Layout>
  )
}
