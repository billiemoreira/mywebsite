import React from 'react'
import description from './constants'
import profile from '../assets/profile.png'

export default function Hero() {
  return (
    <div className="columns">
      <div className="column is-four-fifths">
        {description.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>
      <div className="column">
        <img src={profile} />
      </div>
    </div>
  )
}
