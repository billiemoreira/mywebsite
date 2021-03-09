import {
  faInstagramSquare,
  faBehanceSquare,
  faGithubSquare,
  faLinkedinIn,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

import heroic from '../../assets/cards/heroic.jpg'
import tradebook from '../../assets/cards/tradebook.png'
import university from '../../assets/cards/university.png'
import beparty from '../../assets/cards/beparty.png'
import jusriswed from '../../assets/cards/juriswed.png'
import { Cards, SocialLinks } from '../../types'

export const links: Array<SocialLinks> = [
  {
    name: 'twitter',
    url: 'https://twitter.com/BilianeMoreira',
    icon: faTwitterSquare,
  },
  {
    name: 'behance',
    url: 'https://www.behance.net/bilianemoreira',
    icon: faBehanceSquare,
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/bilianemoreira/',
    icon: faLinkedinIn,
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/drawbili.moreira/',
    icon: faInstagramSquare,
  },
  {
    name: 'github',
    url: 'https://github.com/billiemoreira',
    icon: faGithubSquare,
  },
  {
    name: 'mail',
    url: 'mailto:bilianemoreira@gmail.com',
    icon: faEnvelopeSquare,
  },
]

export const cards: Cards[] = [
  {
    title: 'Heroic Games Launcher',
    image: heroic,
    type: 'UI UX Design',
    year: 2021,
    description:
      'Heroic Games Launcher is a graphical Open Source application for Linux, where users can add their games that were purchased at the Epic Games Store.',
    path: '/projects/heroic',
  },
  {
    title: 'TradeBook - Donate, earn or exchange used books.',
    image: tradebook,
    type: 'UI UX design',
    year: 2020,
    description:
      'This is a project created to solve the problem of people who have many books and want to exchange, sell or donate, or people who do not have enough money to eat books that they would like to read and can then receive donations of books from other people.',
    path: '/projects/tradebook',
  },
  {
    title: 'Beparty',
    image: beparty,
    type: 'UI Design',
    year: 2020,
    description:
      'A website for the sale of articles for last minute parties or that need advance planning.',
    path: '/projects/beparty',
  },
  {
    title: 'Redesign',
    image: university,
    type: 'UI design',
    year: 2020,
    description: 'University Admissions website',
    path: '/projects/redesign',
  },
  {
    title: 'Juriswed App Mobile',
    image: jusriswed,
    type: 'UI design',
    year: 2019,
    description:
      'An application for expatriates or natives to find legal information or advice on Swedish laws.',
    path: '/projects/juriswed',
  },
]
