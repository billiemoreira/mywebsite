import React from 'react'
import SocialLinks from './UI/SocialLinks'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <a
            className="subtitle"
            href="http://bilianemoreira.com"
            target="_blank"
            rel="noreferrer"
          >
            © Biliane Moreira {year}
          </a>
        </p>
        <SocialLinks />
      </div>
    </footer>
  )
}
