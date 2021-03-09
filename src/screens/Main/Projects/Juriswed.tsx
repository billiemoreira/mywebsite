import React from 'react'
import { useLocation } from 'react-router-dom'

import juriswed from '../../../assets/projects/juriswed.png'
import ProjectText from './UI/ProjectText'

type TitleProps = {
  title: string
  description: string
}

export default function Juriswed() {
  const { state } = useLocation() as { state: TitleProps }
  const { title, description } = state
  return (
    <div className="is-flex is-flex-direction-column is-align-content-center">
      <ProjectText title={title} description={description} />
      <div className="columns is-centered">
        <img className="column" src={juriswed} />
      </div>
    </div>
  )
}
