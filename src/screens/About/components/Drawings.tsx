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
        <img onClick={() => open(flower)} src={flower} />
        <img onClick={() => open(woman)} src={woman} />
        <img onClick={() => open(robin)} src={robin} />
      </div>
      <div className="images">
        <img onClick={() => open(city)} src={city} />
        <img onClick={() => open(tree)} src={tree} />
        <img onClick={() => open(girl)} src={girl} />
      </div>
    </div>
  )
}
