import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {links} from './constants'

export default function SocialLinks() {
  return (
    <div>
     {links.map(({url, icon, name}) => <a href={`${url}`} key={name}>
     <span className="icon is-medium" >
          <FontAwesomeIcon icon={icon} size={'lg'} color={"black"}/>
      </span>
     </a> )}
    </div>
  )
}
