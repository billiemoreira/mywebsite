import React from 'react'

import city from '../assets/city.jpg'
import girl from '../assets/girl.png'
import flower from '../assets/flower.jpg'
import robin from '../assets/robin.jpg'
import tree from '../assets/tree.png'
import woman from '../assets/woman.jpg'
import './styles.css'

export default function Drawings() {
  return (
    <div className="imagesContainer">
      <div className="images">
        <img src={flower} />
        <img src={woman} />
        <img src={robin} />
      </div>
      <div className="images">
        <img src={city} />
        <img src={tree} />
        <img src={girl} />
      </div>
    </div>
  )
}
