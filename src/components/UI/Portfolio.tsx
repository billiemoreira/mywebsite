import React from 'react'
import { Link } from 'react-router-dom'
import { cards } from './constants'

export default function Portfolio() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, min(95vw, 650px))',
        gridGap: '18px',
        padding: '0 4px',
        placeContent: 'center',
      }}
    >
      {cards.map(({ image, title, year, type, description, path }) => (
        <Link
          to={{ pathname: path, state: { title, description } }}
          className="card"
          key={title}
        >
          <div className="card-image">
            <figure className="image">
              <div
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  width: 'auto',
                  height: '35vh',
                }}
              />
            </figure>
          </div>
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{title}</p>
                <p className="subtitle is-6">{type}</p>
              </div>
            </div>

            <div className="content">
              {description}
              <br />
              <time dateTime="2016-1-1">{year}</time>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
