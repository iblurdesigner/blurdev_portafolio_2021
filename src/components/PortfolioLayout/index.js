import React from 'react'
import { Link } from 'react-router-dom'
import _JSXStyle from 'styled-jsx/style'
import styles, { globalStyles } from '../AppLayout/styles'
import Footer from '../Footer'
import Header from '../Header'
import { colors } from '../../styles/theme'

export default function PortfolioLayout({ children }) {
  return (
    <>
      <div>
        <Header />
        <h1>Latest Work</h1>
        <div className="gallery">
          <nav>
            <Link to="/portfolio/webapps">Web Apps</Link>
            <Link to="/portfolio/webapps">React JS</Link>
            <Link to="/portfolio/webapps">Flutter</Link>
            <Link to="/portfolio/websites">Web Sites</Link>
            <Link to="/portfolio/webapps">Javascript</Link>
            <Link to="/portfolio/graphicdesign">Graphic Design</Link>
          </nav>
          <section className="portfolio">{children}</section>
        </div>
        <Footer />
      </div>
      <style jsx>{styles}</style>
      <style jsx global>
        {globalStyles}
      </style>

      <style jsx>
        {`
          .gallery {
            display: grid;
            grid-gap: 10px;

            grid-template-columns: 1fr 8fr;
          }

          h1 {
            color: white;
            font-size: 3rem;
            margin-top: 40px;
          }

          nav {
            height: 100%;
            display: flex;
            flex-direction: column;
          }

          nav > :global(a) {
            color: white;
            margin: 20px 0;
          }

          nav > :global(a:hover) {
            color: ${colors.turkey};
            margin: 20px 0;
          }
        `}
      </style>
    </>
  )
}
