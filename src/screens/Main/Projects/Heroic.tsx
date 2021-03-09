import React from 'react'
import { useLocation } from 'react-router-dom'

import heroic1 from '../../../assets/projects/heroic1.jpg'
import heroic2 from '../../../assets/projects/heroic2.png'
import heroic3 from '../../../assets/projects/heroic3.png'
import heroic4 from '../../../assets/projects/heroic4.png'
import heroic5 from '../../../assets/projects/heroic5.png'
import heroic6 from '../../../assets/projects/heroic6.png'
import heroic7 from '../../../assets/projects/heroic7.png'
import heroic8 from '../../../assets/projects/heroic8.png'
import heroic9 from '../../../assets/projects/heroic9.png'
import heroic10 from '../../../assets/projects/heroic10.png'
import heroic11 from '../../../assets/projects/heroic11.png'
import heroic12 from '../../../assets/projects/heroic12.png'
import heroic13 from '../../../assets/projects/heroic13.png'

import {
  heroicHead1,
  heroicHead2,
  heroicContent1,
  heroicContent2,
  heroicHead3,
  heroicContent3,
  heroicHead4,
  heroicContent4,
} from './content'
import Images from './UI/Images'
import ProjectText from './UI/ProjectText'

type TitleProps = {
  title: string
  description: string
}

export default function Heroic() {
  const { state } = useLocation() as { state: TitleProps }
  const { title, description } = state
  return (
    <div className="is-flex is-flex-direction-column is-align-content-center">
      <ProjectText title={title} description={description} />
      <Images source={heroic1} />
      <ProjectText title={heroicHead1} description={heroicContent1} />
      <ProjectText title={heroicHead2} description={heroicContent2} />
      <ProjectText title={heroicHead3} description={heroicContent3} />
      <ProjectText title={heroicHead4} description={heroicContent4} />
      <ProjectText
        title={'Research insights'}
        description={
          ' - This was a somewhat expected result since the research was done with Linux users, but it was interesting to know, that even though there are other well-used platforms like PlayStation and Xbox, users still prefer to play on the computer or laptop using Linux:'
        }
      >
        <span>1) 98% of users use Linux as the main gaming platform;</span>
      </ProjectText>
      <Images source={heroic2} />
      <ProjectText
        description={
          '-  The most popular among them is Steam with more than 70% usage among these users, then Lutris with more than 50% usage, the rest of the 30% use applications like Gamehub, Itch, Legendary or just run straight from wine.  Remembering that users here cited more than one application.'
        }
      >
        2) Over 90% of users use game launchers to run their games;
      </ProjectText>
      <ProjectText>
        3) 37% of users play 9 hours or more a week on Linux, 26% play 3 to 6
        hours, 25% play 6 to 9 hours and 12% play 1 to 3 hours:
      </ProjectText>
      <Images source={heroic3} />
      <ProjectText
        description={
          "Most user responses were related to Steam. So I did a desk research to find out what on Steam existed as a key point, based on the users' responses and what could be implemented in our project."
        }
      >
        4) The main answers about what they liked the most in these applications
        that users mentioned:
      </ProjectText>
      <ProjectText
        description={
          <span>
            The overwhelming majority of users cited problems with many updates,
            and constant bugs. This part of the research helped the developers
            to give importance to the construction of the architecture and
            especially the care with the code, a tip for them to always use good
            development practices, to avoid making so many updates of versions.
          </span>
        }
      >
        <span>5) What they dont like:</span>
      </ProjectText>
      <ProjectText
        description={
          <span>
            `In other questions, I noticed that players like to add games to
            favorites before buying or downloading, they also like to separate
            games according to the types of games they play the most and those
            currently playing, in addition to being able to search for new
            releases, followed by your favorite game genres. This was taken into
            account in the UI when we decided on the possibility of a favorites
            button, search tags and a filter for games already installed.
            <p /> I also thought it would be a great opportunity to discover the
            favorite type of games among Linux users. Regarding the game genre
            that players like the most, the result was that RPG, Action,
            Adventure and first person games (FPS) are the most sought after:`
          </span>
        }
      >
        <span>
          6) Users also cited some features that they wanted to exist in these
          applications, where some were taken into account in the User interface
          Design, but it was not possible, at the moment, to put them all,
          because as stated earlier, many of these needs are related to the type
          of application that is Steam and Lutris, for example.
        </span>
      </ProjectText>
      <Images source={heroic4} />
      <ProjectText
        title={'Low Fidelity Wireframes'}
        description={
          'After assembling the results of the research and deciding the structure and architecture of the application with the main developers, I created some screens to define the organization of the main screens, following the tips of users regarding what they liked in other applications, such as Steam:'
        }
      />
      <Images source={heroic5} />
      <Images source={heroic6} />
      <Images source={heroic7} />
      <ProjectText
        title={'Style Guide'}
        description={
          'The colors and typography were based on the main applications of game launchers and on patterns quite found on platforms and video game sites, I tried to make users comfortable with dark colors, as many play several hours a week and a very light color could cause discomfort visual.'
        }
      />
      <Images source={heroic8} />
      <ProjectText title={'High Fidelity Wireframes'} />
      <Images source={heroic9} />
      <Images source={heroic10} />
      <Images source={heroic11} />
      <Images source={heroic12} />
      <Images source={heroic13} />
      <ProjectText
        description={
          <span>
            We decided to iterate the wireframes and change the current design
            after some usability tests, also the application needs more
            functions that will need to be implemented next month.
            <p />
            This application is under construction, it is an open-source project
            for Linux and if you are a Developer and Linux user, you can help
            and contribute by accessing the link on the button below.
          </span>
        }
      />
      <a
        className="has-text-white has-background-black"
        style={{
          width: 'fit-content',
          alignSelf: 'center',
          margin: '48px',
          padding: '8px',
        }}
        href="https://github.com/flavioislima/HeroicGamesLauncher"
      >
        Click here to see the developer progress
      </a>
      <p
        style={{
          alignSelf: 'center',
          marginBottom: '32px',
        }}
        className="subtitle"
      >
        Thanks for Watching
      </p>
    </div>
  )
}
