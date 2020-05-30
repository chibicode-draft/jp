import React from 'react'
import Layout from 'src/components/Layout'
import postGetStaticProps, { PostBaseProps } from 'src/lib/postGetStaticProps'
import Post from 'src/components/Post'
import Emoji from 'src/components/Emoji'
import { Strong, P, H2, Ul, Ol, Li, A } from 'src/components/Tags'

export const getStaticProps = postGetStaticProps(Page)

export default function Page({ emojiToSvg }: PostBaseProps) {
  return (
    <Layout type="post" emojiToSvg={emojiToSvg}>
      <Post href="/3mizu">
        <Ol>
          <Li>SNSを見ない</Li>
          <Li>ニュースサイトとショッピングサイトを見ない</Li>
          <Li>漫画と動画を見ない</Li>
        </Ol>
        <H2>1. SNSを見ない</H2>
        <P>
          iPhoneからはアプリを消し、スクリーンタイムの設定でサイトを見えないようにする。デスクトップでは
          <A href="https://github.com/openstyles/stylus">Stylus</A>
          を使ってページを非表示にする。SNSでは基本誰もフォローせず、仕事以外のことをシェアしない。
        </P>
        <Ul>
          <Li>
            <Emoji label="ban">🈲</Emoji> Twitter (仕事のみ)
          </Li>
          <Li>
            <Emoji label="ban">🈲</Emoji> Facebook (Messengerも)
          </Li>
          <Li>
            <Emoji label="ban">🈲</Emoji> Instagram
          </Li>
        </Ul>
        <H2>2. ニュースサイトとショッピングサイトを見ない</H2>
        <P>
          iPhoneではスクリーンタイムの設定でサイトを見えないようにする。デスクトップでは
          <A href="https://github.com/openstyles/stylus">Stylus</A>
          を使ってページを非表示にする。
        </P>
        <Ul>
          <Li>
            <Emoji label="ban">🈲</Emoji> コロナ関連のニュース
            (各地域のデータ含む)
          </Li>
          <Li>
            <Emoji label="ban">🈲</Emoji> 芸能関連のニュース
          </Li>
          <Li>
            <Emoji label="ban">🈲</Emoji> ショッピングサイト
            (引っ越し関連の調査含む)
          </Li>
        </Ul>
        <H2>3. 漫画と動画を見ない</H2>
        <P>
          iPhoneからはアプリを消し、スクリーンタイムの設定でサイトを見えないようにする。デスクトップでは
          <A href="https://github.com/openstyles/stylus">Stylus</A>
          を使ってページを非表示にする。
        </P>
        <Ul>
          <Li>
            <Emoji label="ban">🈲</Emoji> YouTubeと哔哩哔哩
          </Li>
          <Li>
            <Emoji label="ban">🈲</Emoji> 漫画 (アニメ含む)
          </Li>
          <Li>
            <Emoji label="ban">🈲</Emoji> TV番組
          </Li>
        </Ul>
        <H2>
          目標:
          1週間のうち「暇だから新しいことにチャレンジしてみよう」と計画する回数を増やす
        </H2>
        <Ul>
          <Li>
            新しいことにチャレンジする前に、新しいことにチャレンジ
            <strong>する計画を立てること</strong>が必要
          </Li>
          <Li>そう思った時間を計測する</Li>
          <Li>
            やりたいことは暇から生まれるが、暇な時間を無駄にしていては生まれない
          </Li>
        </Ul>
        <H2>作業中に心がけること</H2>
        <Ul>
          <Li>
            <Emoji label="ban">✅</Emoji> できる限り全てのタスクを
            <A href="https://culturedcode.com/">Things</A>と
            <A href="https://www.notion.so/">Notion</A>で管理する (1.
            新しいタスクは全てThingsに入れる。2.{' '}
            <A href="https://ja.wikipedia.org/wiki/Getting_Things_Done">
              GTD的に
            </A>
            「プロジェクト」に分類されるものはNotionに移動し優先順位をつける。3.
            プロジェクトに取り組む段階になったらThingsにてプロジェクトを作成する。4.
            資料はNotionで管理する)
          </Li>
          <Li>
            作業中は音楽を聞かないか、
            <A href="https://www.amazon.com/Calming-Waves-Pebble-Beach/dp/B004624KHM">
              聞くのであれば波の音のみ
            </A>
          </Li>
          <Li>
            <A href="https://ja.wikipedia.org/wiki/%E3%83%9D%E3%83%A2%E3%83%89%E3%83%BC%E3%83%AD%E3%83%BB%E3%83%86%E3%82%AF%E3%83%8B%E3%83%83%E3%82%AF">
              ポモドーロ・テクニック
            </A>
            の25分間の部分だけを使う (休憩は無制限)
          </Li>
        </Ul>
      </Post>
    </Layout>
  )
}
