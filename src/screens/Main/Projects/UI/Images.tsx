import React from 'react'

export default function Images({
  source,
  className,
}: {
  source: string
  className?: string
}) {
  return (
    <div className="columns is-centered">
      <img onClick={() => open(source)} className={className ? className : 'column'} src={source} />
    </div>
  )
}
