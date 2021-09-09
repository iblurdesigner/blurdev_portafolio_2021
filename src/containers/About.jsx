import React from 'react'
import { Helmet } from 'react-helmet'
import Timeline from '../components/Icons/Timeline'

const About = () => (
  <>
    <Helmet>
      <title>About - Blur Dev Portfolio</title>
    </Helmet>
    <div
      className="container-background"
      style={{
        backgroundImage: `url('https://storage.googleapis.com/blurdev_portfolio_bucket/About/back_about.jpg')`,
      }}
    >
      <div className="container">
        <div className="textAbout">
          <h1>About</h1>
          <p>
            I’m a Frontend Developer with two years of experience in web
            development, I have been React Development certified. I also have
            knowledge of agile development, and UX / IU. <br /> An additional
            plus that you will find in me is that I’m an Advertising Graphic
            Designer.
          </p>
          <Timeline />
        </div>
      </div>
    </div>

    <style jsx>
      {`
        .container-background {
          background-position: bottom;
          width: 100vw;
          height: 75vh;
        }
        .container {
          display: grid;
          grid-gap: 10px;
          width: 80vw;
          height: 80vh;
          margin: 0 auto;

          grid-template-columns: 1fr;
          grid-template-rows: repeat(2, 1fr);
        }

        .textAbout {
          width: 42%;
          background-color: rgba(0, 0, 0, 0.4);
          padding: 10px;
          border-radius: 15px;
        }

        h1 {
          color: white;
          font-size: 3rem;
        }

        p {
          color: white;
        }

        /* media queries */

        /* desktop */
        @media screen and (min-width: 600px) and (orientation: portrait) {
          .container {
            background: red;
          }
        }

        /* tablets */
        @media screen and (min-width: 600px) and (max-width: 1023px) {
          .container {
            width: 100vw;
            height: 70vh;
          }

          .textAbout {
            width: 100%;
            height: 60vh;
          }

          p {
            margin-bottom: 150px;
          }
        }

        /* phones */
        @media screen and (min-width: 320px) and (max-width: 599px) {
          .container {
            width: 100vw;
            height: 70vh;
          }

          .textAbout {
            width: 100%;
          }
        }
      `}
    </style>
  </>
)

export default About
