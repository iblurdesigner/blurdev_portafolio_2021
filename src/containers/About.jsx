import React from 'react'
import Timeline from '../components/Icons/Timeline'

const About = () => (
  <>
    <div className="container">
      <div>
        <h1>About</h1>
        <p>
          I’m a Frontend Developer with four years of experience in web
          development, I have been React Development certified. I also have
          knowledge of agile development, and UX / IU. <br /> An additional plus
          that you will find in me is that I’m an Advertising Graphic Designer.
        </p>
      </div>
      <div className="timeline">
        <Timeline />
      </div>
    </div>

    <style jsx>
      {`
        .container {
          display: grid;
          grid-gap: 10px;
          width: 80vw;
          height: 80vh;

          grid-template-columns: 1fr;
          grid-template-rows: repeat(2, 1fr);
        }

        h1 {
          color: white;
          font-size: 3rem;
        }

        p {
          color: white;
          width: 620px;
        }

        .timeline {
          width: 60%;
          margin: 0 auto;
        }
      `}
    </style>
  </>
)

export default About
