import React, { memo } from 'react'
import styles from 'src/components/FactfulnessIframeEmbed.module.css'
import cn from 'classnames'

type Props = {
  embedUrl: string
}

function FactfulnessIframeEmbed({ embedUrl }: Props) {
  // Add side padding so it can be scrolled on mobile
  return (
    <div className="my-12 mx-auto px-8">
      <div
        className={cn(
          styles.parent,
          'overflow-auto mx-auto border border-gray-900 shadow-soft mb-6'
        )}
      >
        <iframe
          frameBorder="0"
          src={embedUrl}
          className="w-full h-full block"
        />
      </div>
      <div className="text-sm text-center">
        ↑ スクロールして全文読むことができます
      </div>
    </div>
  )
}

export default memo(FactfulnessIframeEmbed)
