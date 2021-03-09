import React from 'react'
import { useLocation } from 'react-router-dom'
import ProjectText from './UI/ProjectText'
import beparty from '../../../assets/projects/beparty.png'

type TitleProps = {
  title: string
  description: string
}

export default function Beparty() {
  const { state } = useLocation() as { state: TitleProps }
  const { title, description } = state
  return (
    <div className="is-flex is-flex-direction-column is-align-content-center">
      <ProjectText title={title} description={description} />
      <div className="columns is-centered">
        <img className="column" src={beparty} />
      </div>
    </div>
  )
}
