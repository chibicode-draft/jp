import React from 'react'
import Layout from 'src/components/Layout'
import postGetStaticProps, { PostBaseProps } from 'src/lib/postGetStaticProps'
import Post from 'src/components/Post'
import { Img, P, A, Ul, Li, H2, Table, Th, Td } from 'src/components/Tags'
import TwitterEmbed from 'src/components/TwitterEmbed'
import Emoji from 'src/components/Emoji'

export const getStaticProps = postGetStaticProps(Page)

export default function Page({ emojiToSvg }: PostBaseProps) {
  return (
    <Layout type="post" emojiToSvg={emojiToSvg}>
      <Post href="/olympic-medals">
        <P>
          東京オリンピック開催まであと1年ということで、ツイッターでこんなクイズを出題しました。
        </P>
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
        <Ul>
          <Li>「39以下」と答えた方が過半数の54%、</Li>
          <Li>「40〜79」と答えた方が21%、</Li>
          <Li>「80以上」と答えた方が25%でした。</Li>
        </Ul>
        <H2>
          <Emoji>🐵</Emoji> 正解率はチンパンジー以下
        </H2>
        <P>
          2016年リオ五輪にて、いずれかのメダルをひとつでも獲得した国・地域の数は「
          <A href="https://en.wikipedia.org/wiki/2016_Summer_Olympics_medal_table">
            <strong>86</strong>
          </A>
          」です。つまり、「<strong>80以上</strong>」が正解でした。
        </P>
        <P>
          正解率は25%でした。3択問題なので
          <A href="https://factquiz.chibicode.com/">チンパンジー以下</A>
          (ランダム解答 =
          33%)の正解率です。正解から最も遠い「39以下」を選んだ方は54%もいました。あくまでツイッター上の調査ですが。
        </P>
        <H2>
          <Emoji>🏅</Emoji>
          2016年リオ五輪にてメダルを獲得した86の国・地域
        </H2>
        <P>
          出典:{' '}
          <A href="https://en.wikipedia.org/wiki/2016_Summer_Olympics_medal_table">
            Wikipedia
          </A>
        </P>
        <Table>
          <thead>
            <tr>
              <Th>順</Th>
              <Th>国・地域</Th>
              <Th>
                <Emoji className="mr-1">🥇</Emoji>金
              </Th>
              <Th>
                <Emoji className="mr-1">🥈</Emoji>銀
              </Th>
              <Th>
                <Emoji className="mr-1">🥉</Emoji>銅
              </Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>1</Td>
              <Td>
                <Emoji className="mr-1">🇺🇸</Emoji>アメリカ合衆国
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>46
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>37
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>38
              </Td>
              {/* <Td>121</Td> */}
            </tr>
            <tr>
              <Td>2</Td>
              <Td>
                <Emoji className="mr-1">🇬🇧</Emoji>イギリス
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>27
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>23
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>17
              </Td>
              {/* <Td>67</Td> */}
            </tr>
            <tr>
              <Td>3</Td>
              <Td>
                <Emoji className="mr-1">🇨🇳</Emoji>中国
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>26
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>18
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>26
              </Td>
              {/* <Td>70</Td> */}
            </tr>
            <tr>
              <Td>4</Td>
              <Td>
                <Emoji className="mr-1">🇷🇺</Emoji>ロシア
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>19
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>17
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>20
              </Td>
              {/* <Td>56</Td> */}
            </tr>
            <tr>
              <Td>5</Td>
              <Td>
                <Emoji className="mr-1">🇩🇪</Emoji>ドイツ
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>17
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>10
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>15
              </Td>
              {/* <Td>42</Td> */}
            </tr>
            <tr>
              <Td>6</Td>
              <Td>
                <Emoji className="mr-1">🇯🇵</Emoji>日本
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>12
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>8
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>21
              </Td>
              {/* <Td>41</Td> */}
            </tr>
            <tr>
              <Td>7</Td>
              <Td>
                <Emoji className="mr-1">🇫🇷</Emoji>フランス
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>10
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>18
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>14
              </Td>
              {/* <Td>42</Td> */}
            </tr>
            <tr>
              <Td>8</Td>
              <Td>
                <Emoji className="mr-1">🇰🇷</Emoji>韓国
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>9
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>3
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>9
              </Td>
              {/* <Td>21</Td> */}
            </tr>
            <tr>
              <Td>9</Td>
              <Td>
                <Emoji className="mr-1">🇮🇹</Emoji>イタリア
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>8
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>12
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>8
              </Td>
              {/* <Td>28</Td> */}
            </tr>
            <tr>
              <Td>10</Td>
              <Td>
                <Emoji className="mr-1">🇦🇺</Emoji>オーストラリア
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>8
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>11
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>10
              </Td>
              {/* <Td>29</Td> */}
            </tr>
            <tr>
              <Td>11</Td>
              <Td>
                <Emoji className="mr-1">🇳🇱</Emoji>オランダ
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>8
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>7
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>4
              </Td>
              {/* <Td>19</Td> */}
            </tr>
            <tr>
              <Td>12</Td>
              <Td>
                <Emoji className="mr-1">🇭🇺</Emoji>ハンガリー
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>8
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>3
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>4
              </Td>
              {/* <Td>15</Td> */}
            </tr>
            <tr>
              <Td>13</Td>
              <Td>
                <Emoji className="mr-1">🇧🇷</Emoji>ブラジル
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>7
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>6
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>6
              </Td>
              {/* <Td>19</Td> */}
            </tr>
            <tr>
              <Td>14</Td>
              <Td>
                <Emoji className="mr-1">🇪🇸</Emoji>スペイン
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>7
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>4
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>6
              </Td>
              {/* <Td>17</Td> */}
            </tr>
            <tr>
              <Td>15</Td>
              <Td>
                <Emoji className="mr-1">🇰🇪</Emoji>ケニア
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>6
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>6
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>1
              </Td>
              {/* <Td>13</Td> */}
            </tr>
            <tr>
              <Td>16</Td>
              <Td>
                <Emoji className="mr-1">🇯🇲</Emoji>ジャマイカ
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>6
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>3
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>2
              </Td>
              {/* <Td>11</Td> */}
            </tr>
            <tr>
              <Td>17</Td>
              <Td>
                <Emoji className="mr-1">🇭🇷</Emoji>クロアチア
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>5
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>3
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>2
              </Td>
              {/* <Td>10</Td> */}
            </tr>
            <tr>
              <Td>18</Td>
              <Td>
                <Emoji className="mr-1">🇨🇺</Emoji>キューバ
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>5
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>2
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>4
              </Td>
              {/* <Td>11</Td> */}
            </tr>
            <tr>
              <Td>19</Td>
              <Td>
                <Emoji className="mr-1">🇳🇿</Emoji>ニュージーランド
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>4
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>9
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>5
              </Td>
              {/* <Td>18</Td> */}
            </tr>
            <tr>
              <Td>20</Td>
              <Td>
                <Emoji className="mr-1">🇨🇦</Emoji>カナダ
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>4
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>3
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>15
              </Td>
              {/* <Td>22</Td> */}
            </tr>
            <tr>
              <Td>21</Td>
              <Td>
                <Emoji className="mr-1">🇺🇿</Emoji>ウズベキスタン
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>4
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>2
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>7
              </Td>
              {/* <Td>13</Td> */}
            </tr>
            <tr>
              <Td>22</Td>
              <Td>
                <Emoji className="mr-1">🇰🇿</Emoji>カザフスタン
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>3
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>5
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>10
              </Td>
              {/* <Td>18</Td> */}
            </tr>
            <tr>
              <Td>23</Td>
              <Td>
                <Emoji className="mr-1">🇨🇴</Emoji>コロンビア
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>3
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>2
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>3
              </Td>
              {/* <Td>8</Td> */}
            </tr>
            <tr>
              <Td>24</Td>
              <Td>
                <Emoji className="mr-1">🇨🇭</Emoji>スイス
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>3
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>2
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>2
              </Td>
              {/* <Td>7</Td> */}
            </tr>
            <tr>
              <Td>25</Td>
              <Td>
                <Emoji className="mr-1">🇮🇷</Emoji>イラン
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>3
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>4
              </Td>
              {/* <Td>8</Td> */}
            </tr>
            <tr>
              <Td>26</Td>
              <Td>
                <Emoji className="mr-1">🇬🇷</Emoji>ギリシャ
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>3
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>2
              </Td>
              {/* <Td>6</Td> */}
            </tr>
            <tr>
              <Td>27</Td>
              <Td>
                <Emoji className="mr-1">🇦🇷</Emoji>アルゼンチン
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>3
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>0
              </Td>
              {/* <Td>4</Td> */}
            </tr>
            <tr>
              <Td>28</Td>
              <Td>
                <Emoji className="mr-1">🇩🇰</Emoji>デンマーク
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>2
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>6
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>7
              </Td>
              {/* <Td>15</Td> */}
            </tr>
            <tr>
              <Td>29</Td>
              <Td>
                <Emoji className="mr-1">🇸🇪</Emoji>スウェーデン
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>2
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>6
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>3
              </Td>
              {/* <Td>11</Td> */}
            </tr>
            <tr>
              <Td>30</Td>
              <Td>
                <Emoji className="mr-1">🇿🇦</Emoji>南アフリカ
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>2
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>6
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>2
              </Td>
              {/* <Td>10</Td> */}
            </tr>
            <tr>
              <Td>31</Td>
              <Td>
                <Emoji className="mr-1">🇺🇦</Emoji>ウクライナ
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>2
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>5
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>4
              </Td>
              {/* <Td>11</Td> */}
            </tr>
            <tr>
              <Td>32</Td>
              <Td>
                <Emoji className="mr-1">🇷🇸</Emoji>セルビア
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>2
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>4
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>2
              </Td>
              {/* <Td>8</Td> */}
            </tr>
            <tr>
              <Td>33</Td>
              <Td>
                <Emoji className="mr-1">🇵🇱</Emoji>ポーランド
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>2
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>3
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>6
              </Td>
              {/* <Td>11</Td> */}
            </tr>
            <tr>
              <Td>34</Td>
              <Td>
                <Emoji className="mr-1">🇰🇵</Emoji>北朝鮮
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>2
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>3
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>2
              </Td>
              {/* <Td>7</Td> */}
            </tr>
            <tr>
              <Td rowSpan={2}>35</Td>
              <Td>
                <Emoji className="mr-1">🇧🇪</Emoji>ベルギー
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>2
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>2
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>2
              </Td>
              {/* <Td>6</Td> */}
            </tr>
            <tr>
              <Td>
                <Emoji className="mr-1">🇹🇭</Emoji>タイ
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>2
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>2
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>2
              </Td>
              {/* <Td>6</Td> */}
            </tr>
            <tr>
              <Td>37</Td>
              <Td>
                <Emoji className="mr-1">🇸🇰</Emoji>スロバキア
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>2
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>2
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>0
              </Td>
              {/* <Td>4</Td> */}
            </tr>
            <tr>
              <Td>38</Td>
              <Td>
                <Emoji className="mr-1">🇬🇪</Emoji>ジョージア
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>2
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>4
              </Td>
              {/* <Td>7</Td> */}
            </tr>
            <tr>
              <Td>39</Td>
              <Td>
                <Emoji className="mr-1">🇦🇿</Emoji>アゼルバイジャン
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>7
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>10
              </Td>
              {/* <Td>18</Td> */}
            </tr>
            <tr>
              <Td>40</Td>
              <Td>
                <Emoji className="mr-1">🇧🇾</Emoji>ベラルーシ
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>4
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>4
              </Td>
              {/* <Td>9</Td> */}
            </tr>
            <tr>
              <Td>41</Td>
              <Td>
                <Emoji className="mr-1">🇹🇷</Emoji>トルコ
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>3
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>4
              </Td>
              {/* <Td>8</Td> */}
            </tr>
            <tr>
              <Td>42</Td>
              <Td>
                <Emoji className="mr-1">🇦🇲</Emoji>アルメニア
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>3
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>0
              </Td>
              {/* <Td>4</Td> */}
            </tr>
            <tr>
              <Td>43</Td>
              <Td>
                <Emoji className="mr-1">🇨🇿</Emoji>チェコ
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>2
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>7
              </Td>
              {/* <Td>10</Td> */}
            </tr>
            <tr>
              <Td>44</Td>
              <Td>
                <Emoji className="mr-1">🇪🇹</Emoji>エチオピア
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>2
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>5
              </Td>
              {/* <Td>8</Td> */}
            </tr>
            <tr>
              <Td>45</Td>
              <Td>
                <Emoji className="mr-1">🇸🇮</Emoji>スロベニア
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>2
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>1
              </Td>
              {/* <Td>4</Td> */}
            </tr>
            <tr>
              <Td>46</Td>
              <Td>
                <Emoji className="mr-1">🇮🇩</Emoji>インドネシア
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>2
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>0
              </Td>
              {/* <Td>3</Td> */}
            </tr>
            <tr>
              <Td>47</Td>
              <Td>
                <Emoji className="mr-1">🇷🇴</Emoji>ルーマニア
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>2
              </Td>
              {/* <Td>4</Td> */}
            </tr>
            <tr>
              <Td rowSpan={2}>48</Td>
              <Td>
                <Emoji className="mr-1">🇧🇭</Emoji>バーレーン
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>0
              </Td>
              {/* <Td>2</Td> */}
            </tr>
            <tr>
              <Td>
                <Emoji className="mr-1">🇻🇳</Emoji>ベトナム
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>0
              </Td>
              {/* <Td>2</Td> */}
            </tr>
            <tr>
              <Td>50</Td>
              <Td>チャイニーズタイペイ</Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>2
              </Td>
              {/* <Td>3</Td> */}
            </tr>
            <tr>
              <Td rowSpan={3}>51</Td>
              <Td>
                <Emoji className="mr-1">🇧🇸</Emoji>バハマ
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>1
              </Td>
              {/* <Td>2</Td> */}
            </tr>
            <tr>
              <Td>独立参加</Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>1
              </Td>
              {/* <Td>2</Td> */}
            </tr>
            <tr>
              <Td>
                <Emoji className="mr-1">🇨🇮</Emoji>コートジボワール
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>1
              </Td>
              {/* <Td>2</Td> */}
            </tr>
            <tr>
              <Td rowSpan={6}>54</Td>
              <Td>
                <Emoji className="mr-1">🇫🇯</Emoji>フィジー
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>0
              </Td>
              {/* <Td>1</Td> */}
            </tr>
            <tr>
              <Td>
                <Emoji className="mr-1">🇯🇴</Emoji>ヨルダン
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>0
              </Td>
              {/* <Td>1</Td> */}
            </tr>
            <tr>
              <Td>
                <Emoji className="mr-1">🇽🇰</Emoji>コソボ
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>0
              </Td>
              {/* <Td>1</Td> */}
            </tr>
            <tr>
              <Td>
                <Emoji className="mr-1">🇵🇷</Emoji>プエルトリコ
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>0
              </Td>
              {/* <Td>1</Td> */}
            </tr>
            <tr>
              <Td>
                <Emoji className="mr-1">🇸🇬</Emoji>シンガポール
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>0
              </Td>
              {/* <Td>1</Td> */}
            </tr>
            <tr>
              <Td>
                <Emoji className="mr-1">🇹🇯</Emoji>タジキスタン
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>0
              </Td>
              {/* <Td>1</Td> */}
            </tr>
            <tr>
              <Td>60</Td>
              <Td>
                <Emoji className="mr-1">🇲🇾</Emoji>マレーシア
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>4
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>1
              </Td>
              {/* <Td>5</Td> */}
            </tr>
            <tr>
              <Td>61</Td>
              <Td>
                <Emoji className="mr-1">🇲🇽</Emoji>メキシコ
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>3
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>2
              </Td>
              {/* <Td>5</Td> */}
            </tr>
            <tr>
              <Td>62</Td>
              <Td>
                <Emoji className="mr-1">🇻🇪</Emoji>ベネズエラ
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>2
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>1
              </Td>
              {/* <Td>3</Td> */}
            </tr>
            <tr>
              <Td rowSpan={2}>63</Td>
              <Td>
                <Emoji className="mr-1">🇩🇿</Emoji>アルジェリア
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>2
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>0
              </Td>
              {/* <Td>2</Td> */}
            </tr>
            <tr>
              <Td>
                <Emoji className="mr-1">🇮🇪</Emoji>アイルランド
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>2
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>0
              </Td>
              {/* <Td>2</Td> */}
            </tr>
            <tr>
              <Td>65</Td>
              <Td>
                <Emoji className="mr-1">🇱🇹</Emoji>リトアニア
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>3
              </Td>
              {/* <Td>4</Td> */}
            </tr>
            <tr>
              <Td>66</Td>
              <Td>
                <Emoji className="mr-1">🇧🇬</Emoji>ブルガリア
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>2
              </Td>
              {/* <Td>3</Td> */}
            </tr>
            <tr>
              <Td rowSpan={2}>67</Td>
              <Td>
                <Emoji className="mr-1">🇮🇳</Emoji>インド
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>1
              </Td>
              {/* <Td>2</Td> */}
            </tr>
            <tr>
              <Td>
                <Emoji className="mr-1">🇲🇳</Emoji>モンゴル
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>1
              </Td>
              {/* <Td>2</Td> */}
            </tr>
            <tr>
              <Td rowSpan={5}>69</Td>
              <Td>
                <Emoji className="mr-1">🇧🇮</Emoji>ブルンジ
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>0
              </Td>
              {/* <Td>1</Td> */}
            </tr>
            <tr>
              <Td>
                <Emoji className="mr-1">🇬🇩</Emoji>グレナダ
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>0
              </Td>
              {/* <Td>1</Td> */}
            </tr>
            <tr>
              <Td>
                <Emoji className="mr-1">🇳🇪</Emoji>ニジェール
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>0
              </Td>
              {/* <Td>1</Td> */}
            </tr>
            <tr>
              <Td>
                <Emoji className="mr-1">🇵🇭</Emoji>フィリピン
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>0
              </Td>
              {/* <Td>1</Td> */}
            </tr>
            <tr>
              <Td>
                <Emoji className="mr-1">🇶🇦</Emoji>カタール
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>0
              </Td>
              {/* <Td>1</Td> */}
            </tr>
            <tr>
              <Td>74</Td>
              <Td>
                <Emoji className="mr-1">🇳🇴</Emoji>ノルウェー
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>4
              </Td>
              {/* <Td>4</Td> */}
            </tr>
            <tr>
              <Td rowSpan={2}>75</Td>
              <Td>
                <Emoji className="mr-1">🇪🇬</Emoji>エジプト
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>3
              </Td>
              {/* <Td>3</Td> */}
            </tr>
            <tr>
              <Td>
                <Emoji className="mr-1">🇹🇳</Emoji>チュニジア
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>3
              </Td>
              {/* <Td>3</Td> */}
            </tr>
            <tr>
              <Td>77</Td>
              <Td>
                <Emoji className="mr-1">🇮🇱</Emoji>イスラエル
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>2
              </Td>
              {/* <Td>2</Td> */}
            </tr>
            <tr>
              <Td rowSpan={9}>78</Td>
              <Td>
                <Emoji className="mr-1">🇦🇹</Emoji>オーストリア
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>1
              </Td>
              {/* <Td>1</Td> */}
            </tr>
            <tr>
              <Td>
                <Emoji className="mr-1">🇩🇴</Emoji>ドミニカ共和国
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>1
              </Td>
              {/* <Td>1</Td> */}
            </tr>
            <tr>
              <Td>
                <Emoji className="mr-1">🇪🇪</Emoji>エストニア
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>1
              </Td>
              {/* <Td>1</Td> */}
            </tr>
            <tr>
              <Td>
                <Emoji className="mr-1">🇫🇮</Emoji>フィンランド
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>1
              </Td>
              {/* <Td>1</Td> */}
            </tr>
            <tr>
              <Td>
                <Emoji className="mr-1">🇲🇦</Emoji>モロッコ
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>1
              </Td>
              {/* <Td>1</Td> */}
            </tr>
            <tr>
              <Td>
                <Emoji className="mr-1">🇳🇬</Emoji>ナイジェリア
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>1
              </Td>
              {/* <Td>1</Td> */}
            </tr>
            <tr>
              <Td>
                <Emoji className="mr-1">🇵🇹</Emoji>ポルトガル
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>1
              </Td>
              {/* <Td>1</Td> */}
            </tr>
            <tr>
              <Td>
                <Emoji className="mr-1">🇹🇹</Emoji>トリニダード・トバゴ
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>1
              </Td>
              {/* <Td>1</Td> */}
            </tr>
            <tr>
              <Td>
                <Emoji className="mr-1">🇦🇪</Emoji>アラブ首長国連邦{' '}
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>1
              </Td>
              {/* <Td>1</Td> */}
            </tr>
          </tbody>
        </Table>
        <P>ちなみに2016年のリオ五輪に参加した国・地域の数は206です。</P>
        <H2>
          <Emoji>🤔</Emoji> 過去のオリンピックではどうだった？
        </H2>
        <P>
          「メダルを獲得した国・地域が、たまたま2016年のリオ五輪で多かったのでは」とお考えの方がいれば、それは間違いです。
        </P>
        <Ul>
          <Li>
            2012年のロンドン五輪:{' '}
            <A href="https://en.wikipedia.org/wiki/2012_Summer_Olympics_medal_table">
              <strong>86</strong>の国・地域
            </A>
            がメダル獲得 (204の国・地域が参加)
          </Li>
          <Li>
            2008年の北京五輪:{' '}
            <A href="https://en.wikipedia.org/wiki/2012_Summer_Olympics_medal_table">
              <strong>87</strong>の国・地域
            </A>
            がメダル獲得 (204の国・地域が参加)
          </Li>
        </Ul>
        <P>…と、過去3回にわたって80以上の国・地域がメダルを獲得しています。</P>
        <P>
          クイズに「39以下」と解答された過半数の方々は、「夏季オリンピックは世界中のアスリートが参加するが、メダル争いに食い込む国や地域の数はだいたい2割以下だろう」とお考えなのかもしれません。
        </P>
        <P>
          しかし実際は、少なくとも過去3大会において、
          <strong>約200の国・地域のうち、4割以上がメダルを獲得している</strong>
          のです。
        </P>
        <H2>
          <Emoji>🗺</Emoji> 地図で見てみると
        </H2>
        <P>以下の地図で、</P>
        <Ul>
          <Li>
            <Emoji>🟢</Emoji>{' '}
            緑色(薄い緑から濃い緑まで)の国が2016年リオ五輪でメダルを獲得した国・地域です。
          </Li>
          <Li>
            <Emoji className="opacity-50">🔵</Emoji>{' '}
            薄い青の国・地域はゼロです。
          </Li>
        </Ul>
        <Img
          width={1704}
          height={752}
          href="/images/olympic-medals/map.png"
          src="/images/olympic-medals/map.png"
          alt="地図"
        />
        <P>
          アフリカが少なく見えますが、それでも11カ国がメダルを獲得しました。先ほどのチャートをアフリカ諸国に限定すると以下のようになります。
        </P>
        <Table>
          <thead>
            <tr>
              <Th>順</Th>
              <Th>国・地域</Th>
              <Th>
                <Emoji className="mr-1">🥇</Emoji>金
              </Th>
              <Th>
                <Emoji className="mr-1">🥈</Emoji>銀
              </Th>
              <Th>
                <Emoji className="mr-1">🥉</Emoji>銅
              </Th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <Td>15</Td>
              <Td>
                <Emoji className="mr-1">🇰🇪</Emoji>ケニア
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>6
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>6
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>1
              </Td>
              {/* <Td>13</Td> */}
            </tr>
            <tr>
              <Td>30</Td>
              <Td>
                <Emoji className="mr-1">🇿🇦</Emoji>南アフリカ
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>2
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>6
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>2
              </Td>
              {/* <Td>10</Td> */}
            </tr>
            <tr>
              <Td>44</Td>
              <Td>
                <Emoji className="mr-1">🇪🇹</Emoji>エチオピア
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>2
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>5
              </Td>
              {/* <Td>8</Td> */}
            </tr>
            <tr>
              <Td>51</Td>
              <Td>
                <Emoji className="mr-1">🇨🇮</Emoji>コートジボワール
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>1
              </Td>
              {/* <Td>2</Td> */}
            </tr>
            <tr>
              <Td>63</Td>
              <Td>
                <Emoji className="mr-1">🇩🇿</Emoji>アルジェリア
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>2
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>0
              </Td>
              {/* <Td>2</Td> */}
            </tr>
            <tr>
              <Td rowSpan={2}>69</Td>
              <Td>
                <Emoji className="mr-1">🇧🇮</Emoji>ブルンジ
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>0
              </Td>
              {/* <Td>1</Td> */}
            </tr>
            <tr>
              <Td>
                <Emoji className="mr-1">🇳🇪</Emoji>ニジェール
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>1
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>0
              </Td>
              {/* <Td>1</Td> */}
            </tr>
            <tr>
              <Td rowSpan={2}>75</Td>
              <Td>
                <Emoji className="mr-1">🇪🇬</Emoji>エジプト
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>3
              </Td>
              {/* <Td>3</Td> */}
            </tr>
            <tr>
              <Td>
                <Emoji className="mr-1">🇹🇳</Emoji>チュニジア
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>3
              </Td>
              {/* <Td>3</Td> */}
            </tr>
            <tr>
              <Td rowSpan={2}>78</Td>
              <Td>
                <Emoji className="mr-1">🇲🇦</Emoji>モロッコ
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>1
              </Td>
              {/* <Td>1</Td> */}
            </tr>
            <tr>
              <Td>
                <Emoji className="mr-1">🇳🇬</Emoji>ナイジェリア
              </Td>
              <Td>
                <Emoji className="mr-1">🥇</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥈</Emoji>0
              </Td>
              <Td>
                <Emoji className="mr-1">🥉</Emoji>1
              </Td>
              {/* <Td>1</Td> */}
            </tr>
          </tbody>
        </Table>
        <H2>
          <Emoji>🥇</Emoji> 金メダルに限定すると
        </H2>
        <P>
          ちなみに、2016年のリオ五輪で金メダルを獲得した国・地域の数は
          <strong>59</strong>
          でした。約3割が金メダルを獲得したことになります。
        </P>
        <P>
          クイズに「39以下」と解答された過半数の方々は、問題を金メダルに限定しても間違っているということになります。
        </P>
        <H2>
          <Emoji>⭐️</Emoji> まとめ
        </H2>
        <P>
          夏季オリンピックは世界中の国・地域からアスリートが参加し、約4割の国や地域がメダルを持ち帰ります。アメリカなど一部の国が多くのメダルを獲得するとはいえ、メダル争いに食い込む国・地域の数は少なくありません。トップ争いも世界規模の大会なのです。
        </P>
        <P>
          新型コロナウイルスによって2021年のオリンピック開催が危ぶまれている今、覚えておきたい事実です。
        </P>
      </Post>
    </Layout>
  )
}
