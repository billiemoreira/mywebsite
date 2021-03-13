import React from 'react'

type Props = {
  title?: React.ReactNode
  description?: React.ReactNode
  children?: React.ReactNode
}

export default function ProjectText({ title, description, children }: Props) {
  return (
    <div
      className="hero"
      style={{
        alignItems: 'center',
        marginTop: title ? '52px' : '0',
        width: '75%',
        alignSelf: 'center',
      }}
    >
      {title && (
        <span
          style={{
            marginBottom: '36px',
          }}
          className="title"
        >
          {title}
        </span>
      )}
      {(description || children) && <p className="subtitle">
        <strong>{children && children}</strong><br />
        {description && description}
        </p>}
    </div>
  )
}
