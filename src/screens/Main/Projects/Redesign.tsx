import React from 'react'
import { useLocation } from 'react-router-dom'
import ProjectText from './UI/ProjectText'
import redesign from '../../../assets/projects/redesign.png'

type TitleProps = {
  title: string
  description: string
}

export default function Redesign() {
  const { state } = useLocation() as { state: TitleProps }
  const { title, description } = state
  return (
    <div className="is-flex is-flex-direction-column is-align-content-center">
      <ProjectText title={title} description={description} />
      <div className="columns is-centered">
        <img className="column" src={redesign} />
      </div>
    </div>
  )
}
