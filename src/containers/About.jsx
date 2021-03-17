import React from 'react'
import Timeline from '../components/Icons/Timeline'

const About = () => (
  <>
    <div className="container">
      <div className="box">
        <h1>About</h1>
        <p>Bla bla bla</p>
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

          border: solid 1px red;
        }

        h1 {
          color: white;
          font-size: 3rem;
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
