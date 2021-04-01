import React from 'react'
import Timeline from '../components/Icons/Timeline'

// Temporal import quitar luego
import Fondo from '../../dist/assets/back_about.jpg'

const About = () => (
  <>
    <div className="container-background">
      <div className="container">
        <div className="textAbout">
          <h1>About</h1>
          <p>
            I’m a Frontend Developer with four years of experience in web
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
          width: 100vw;
          background: url(${Fondo}) no-repeat;
          background-position: bottom;
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

        .fondo {
          border: solid 1px yellow;
        }
      `}
    </style>
  </>
)

export default About
