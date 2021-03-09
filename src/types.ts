import { IconDefinition } from '@fortawesome/free-brands-svg-icons'

export type Cards = {
  title: string
  description: string
  type: string
  image: string
  year: number
  path: string
}

export type SocialLinks = {
  name: string
  url: string
  icon: IconDefinition
}
