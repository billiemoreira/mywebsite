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
        marginTop: '52px',
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
      {children && (
        <p
          style={{
            fontWeight: 'bold',
            marginTop: '16px',
            wordWrap: 'break-word',
            alignSelf: 'center',
            textAlign: 'center',
          }}
          className="subtitle"
        >
          {children}
        </p>
      )}
      {description && <p className="subtitle">{description}</p>}
    </div>
  )
}
