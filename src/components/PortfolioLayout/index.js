import React from 'react'
import { Link } from 'react-router-dom'
import _JSXStyle from 'styled-jsx/style'
import Footer from '../Footer'
import Header from '../Header'
import styles, { globalStyles } from '../AppLayout/styles'

export default function PortfolioLayout({ children }) {
  return (
    <>
      <div>
        <Header />
        <div className="gallery">
          <nav>
            <p>
              <Link to="/portfolio/webapps" action="replace">
                Web Apps
              </Link>
            </p>
            <p>React JS</p>
            <p>Flutter</p>
            <p>Javascript</p>
            <p>Responsive Design</p>
            <p>CSS Grid Layout</p>
            <p>Web Sites</p>
            <p>Graphic Design</p>
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
          }

          p {
            color: white;
            margin: 50px 0;
          }
        `}
      </style>
    </>
  )
}
