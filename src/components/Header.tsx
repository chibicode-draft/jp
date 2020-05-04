import React from 'react'
import Emoji from 'src/components/Emoji'
import Link from 'src/components/Link'
import cn from 'classnames'
import { Props as LayoutProps } from 'src/components/Layout'

type Props = {
  type: LayoutProps['type']
}

export default function Header({ type }: Props) {
  return (
    <header className="pb-4">
      <div
        className={cn('mb-2', {
          'text-center': type === 'home',
        })}
      >
        <Link
          href="/"
          title="実るほど頭を垂れる稲穂かな"
          className={cn(
            'hover-border-styles inline-flex justify-center pb-2 hover:border-yellow-400',
            {
              'text-5xl': type === 'home',
              'text-3xl': type !== 'home',
            }
          )}
        >
          <Emoji className="pr-1">🌾</Emoji>
          <Emoji className="pl-1">🙇🏻</Emoji>
        </Link>
      </div>
      <div
        className={cn('flex', {
          'justify-center': type === 'home',
          'justify-between': type !== 'home',
        })}
      >
        {type !== 'home' && (
          <Link
            href="/"
            className="hover-border-styles mono-styles inline-flex pb-1 hover:border-yellow-400"
          >
            ← Home
          </Link>
        )}
        <Link
          href="https://twitter.com/chibicode"
          className="hover-border-styles mono-styles inline-flex pb-1 hover:border-yellow-400"
        >
          @chibicode
        </Link>
      </div>
    </header>
  )
}
