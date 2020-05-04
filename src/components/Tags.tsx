import React from 'react'
import Link from 'src/components/Link'
import Emoji from 'src/components/Emoji'
import cn from 'classnames'

export function E({ children, label }: { children: string; label?: string }) {
  return (
    <Emoji className="text-xl leading-none align-text-bottom" label={label}>
      {children}
    </Emoji>
  )
}

export function P(props: JSX.IntrinsicElements['p']) {
  return <p className="my-4" {...props} />
}

export function Ul(props: JSX.IntrinsicElements['ul']) {
  return <ul className="my-4 ml-5 list-disc" {...props} />
}

export function Ol(props: JSX.IntrinsicElements['ol']) {
  return <ol className="my-4 ml-5 list-decimal" {...props} />
}

export function Li(props: JSX.IntrinsicElements['li']) {
  return <li {...props} />
}

export function A(props: JSX.IntrinsicElements['a']) {
  return <Link className="underline hover:bg-yellow-400" {...props}></Link>
}

export function H4(props: JSX.IntrinsicElements['h4']) {
  return <h4 className="text-lg font-bold my-4" {...props}></h4>
}

export function H3({
  noTopMargin,
  ...props
}: {
  noTopMargin?: boolean
} & JSX.IntrinsicElements['h3']) {
  return (
    <h3
      className={cn('text-xl font-bold leading-relaxed mb-4', {
        'mt-16': !noTopMargin,
      })}
      {...props}
    ></h3>
  )
}

export function H2(props: JSX.IntrinsicElements['h2']) {
  return (
    <h2
      className="text-2xl font-bold leading-normal mt-16 mb-4"
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
    <blockquote className="my-4 pl-4 border-l-2 border-gray-900" {...props} />
  )
}

export function Figure(props: JSX.IntrinsicElements['figure']) {
  return <figure className="my-8" {...props} />
}

export function Img({
  width,
  shadowHover,
  caption,
  ...props
}: {
  width?: 'sm' | 'md'
  caption?: React.ReactNode
  shadowHover?: boolean
} & JSX.IntrinsicElements['img']) {
  const imgTag = (
    <img
      className={cn('my-12 block mx-auto shadow-soft', {
        'max-w-sm': width === 'sm',
        'max-w-md': width === 'md',
        'max-w-full': width !== 'sm' && width !== 'md',
        'w-full': width === 'sm' || width === 'md',
        'w-auto': width !== 'sm' && width !== 'md',
        'hover:shadow-hover': shadowHover,
        'my-12': !caption,
        'mb-6': caption,
      })}
      {...props}
    />
  )

  return caption ? (
    <figure className="my-12">
      {imgTag}
      <figcaption className="text-sm text-center">{caption}</figcaption>
    </figure>
  ) : (
    <P>{imgTag}</P>
  )
}
