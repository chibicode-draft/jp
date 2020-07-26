import React from 'react'
import Link from 'src/components/Link'
import Emoji from 'src/components/Emoji'
import cn from 'classnames'
import styles from 'src/components/Tags.module.css'

export function E({ children, label }: { children: string; label?: string }) {
  return (
    <Emoji className="text-xl leading-none align-text-bottom" label={label}>
      {children}
    </Emoji>
  )
}

export function P(props: JSX.IntrinsicElements['p']) {
  return <p className="my-6" {...props} />
}

export function Ul(props: JSX.IntrinsicElements['ul']) {
  return <ul className="my-6 ml-5 list-disc" {...props} />
}

export function Ol(props: JSX.IntrinsicElements['ol']) {
  return <ol className="my-6 ml-5 list-decimal" {...props} />
}

export function Li(props: JSX.IntrinsicElements['li']) {
  return <li {...props} />
}

export function A(props: JSX.IntrinsicElements['a']) {
  return <Link className="underline hv:hover:bg-yellow-400" {...props}></Link>
}

export function H4(props: JSX.IntrinsicElements['h4']) {
  return <h4 className="text-lg font-normal font-sans my-6" {...props}></h4>
}

export function H3({
  noTopMargin,
  ...props
}: {
  noTopMargin?: boolean
} & JSX.IntrinsicElements['h3']) {
  return (
    <h3
      className={cn('text-xl font-normal font-sans leading-relaxed mb-6', {
        'mt-16': !noTopMargin,
      })}
      {...props}
    ></h3>
  )
}

export function H2(props: JSX.IntrinsicElements['h2']) {
  return (
    <h2
      className="text-2xl font-normal font-sans leading-normal mt-16 mb-6"
      {...props}
    ></h2>
  )
}

export function Hr(props: JSX.IntrinsicElements['div']) {
  return (
    <div
      className="my-16 flex justify-center text-2xl"
      {...props}
      role="separator"
    >
      <Emoji className="mx-2">🌾</Emoji>
      <Emoji className="mx-2">🌾</Emoji>
      <Emoji className="mx-2">🌾</Emoji>
    </div>
  )
}

export function Blockquote(props: JSX.IntrinsicElements['blockquote']) {
  return (
    <blockquote className="my-6 pl-4 border-l-2 border-gray-900" {...props} />
  )
}

export function Figure(props: JSX.IntrinsicElements['figure']) {
  return <figure className="my-6" {...props} />
}

export function Table(props: JSX.IntrinsicElements['table']) {
  return <table className="my-6 font-mono text-sm w-full" {...props} />
}

export function Th(props: JSX.IntrinsicElements['th']) {
  return (
    <th
      className={cn('text-left bg-gray-100 px-1 sm:px-2 py-1', styles.th)}
      {...props}
    />
  )
}

export function Td(props: JSX.IntrinsicElements['th']) {
  return (
    <td
      className="border-b border-gray-200 px-1 sm:px-2 py-1 whitespace-no-wrap"
      {...props}
    />
  )
}

export function Img({
  size,
  shadowHover,
  caption,
  coverImage,
  href,
  ...props
}: {
  size?: 'sm' | 'md'
  caption?: React.ReactNode
  coverImage?: boolean
  href?: string
  shadowHover?: boolean
} & JSX.IntrinsicElements['img']) {
  const imgTag = (
    <img
      className={cn('my-16 block mx-auto shadow-soft', {
        'max-w-sm': size === 'sm',
        'max-w-md': size === 'md',
        'max-w-full': size !== 'sm' && size !== 'md',
        'w-full': size === 'sm' || size === 'md',
        'w-auto': size !== 'sm' && size !== 'md',
        'hv:hover:shadow-large': shadowHover,
        'my-16': !caption && !coverImage,
        'mb-6': caption && !coverImage,
        'mt-6 mb-16': coverImage,
      })}
      {...props}
    />
  )

  const imgTagWithLink = href ? <A href={href}>{imgTag}</A> : imgTag

  return caption ? (
    <figure className="my-16">
      {imgTagWithLink}
      <figcaption className="text-sm text-center">{caption}</figcaption>
    </figure>
  ) : (
    <P>{imgTagWithLink}</P>
  )
}
