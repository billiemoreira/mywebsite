import React from 'react'
import Drawings from './components/Drawings'
import Hero from './components/Hero'

export default function About() {
  return (
    <>
      <div className="title is-flex is-justify-content-center mt-2">About Me</div>
      <Hero />
      <Drawings />
    </>
  )
}
