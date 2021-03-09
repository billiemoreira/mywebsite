import React from 'react'
import { useLocation } from 'react-router-dom'
import ProjectText from './UI/ProjectText'

import tradebook1 from '../../../assets/projects/tradebook1.png'
import tradebook2 from '../../../assets/projects/tradebook2.png'
import tradebook3 from '../../../assets/projects/tradebook3.png'
import tradebook4 from '../../../assets/projects/tradebook4.jpg'
import tradebook5 from '../../../assets/projects/tradebook5.png'
import tradebook6 from '../../../assets/projects/tradebook6.png'
import tradebook7 from '../../../assets/projects/tradebook7.png'
import tradebookW1 from '../../../assets/projects/tradebook-w1.png'
import tradebookW2 from '../../../assets/projects/tradebook-w2.png'

import Images from './UI/Images'

type TitleProps = {
  title: string
  description: string
}

export default function TradeBook() {
  const { state } = useLocation() as { state: TitleProps }
  const { title, description } = state
  return (
    <div className="is-flex is-flex-direction-column is-align-content-center">
      <ProjectText title={title} description={description} />
      <Images source={tradebook1} />
      <ProjectText
        title="UX Design"
        description="We know that there are many readers around the world, there are avid readers who have hundreds of books on their shelves and people who have few books to buy, usually for financial reasons, because we know that keeping an updated collection of books is not cheap. As you can see, there are two different personas who could have their problems solved if they could easily exchange their books, donate or buy for a slightly cheaper price. So, based on a survey of 6 participants, I created two personas to try to establish the priorities of each one and try to find the viable solution for each of them in one place."
      />
      <Images source={tradebook2} />
      <Images source={tradebook3} />
      <ProjectText
        title="Low fidelity wireframes"
        description="
After defining personas, I started designing low-fidelity wireframes, and then making  some usability tests with some of the participants in the previous research."
      />
      <Images source={tradebook4} />
      <ProjectText title="Some media fidelity wireframes:" />
      <div className="columns">
        <img
          style={{ padding: '1rem' }}
          className="column is-half"
          src={tradebookW1}
        />
        <img className="column is-half" src={tradebookW2} />
      </div>
      <ProjectText
        title="UI design"
        description="Before I started making high-fidelity prototypes, I started by defining the style guides, colors and typography."
      />
      <Images source={tradebook5} />
      <Images source={tradebook6} />
      <ProjectText title="High fidelity prototypes" />
      <Images source={tradebook7} />
      <ProjectText
        title="Some improvements discovered after the usability test with the high-fidelity prototype:"
        description={
          <span>
            After some more usability tests with the high-fidelity prototypes
            with the same users, it was necessary to make some changes, such as
            adding a personalized page to try to add books and some of them
            wanted to see a mobile version. These additions and changes are
            currently being made.
            <p />
            Tools used: Figma.
          </span>
        }
      />
      <ProjectText title="Thanks!" />
    </div>
  )
}
