import React from 'react'
import { Link } from 'react-router-dom'

import avatar from '../../public/assets/avatar.png'
import Github from '../components/Icons/Github'
import { colors } from '../styles/theme'
import Linkedin from '../components/Icons/Linkedin'
import Behance from '../components/Icons/Behance'
import Button from '../components/Button'

const Home = () => (
  <>
    <div className="container">
      <div className="title">
        <h1>
          Hi,
          <br /> I’m Blur,
          <br />
          web developer
        </h1>
      </div>
      <div className="image">
        <img src={window.location.origin + avatar} alt="avatar blur" />
      </div>
      <div className="subtitles">
        <small>Front End Developer / Graphic Designer / Freelancer</small>
      </div>
      <div>
        <button>
          <a href="www.apple.com">Get in touch</a>
        </button>
      </div>
      <div className="redes">
        <div className="iconos">
          <Github fill="#57F3C3" />
          <Link to="https://github.com/iblurdesigner">iblurdesigner</Link>
        </div>
        <div className="iconos">
          <Linkedin fill="#57F3C3" />
          <Link to="https://www.linkedin.com/in/blurdev/">blurdev</Link>
        </div>
        <div className="iconos">
          <Behance fill="#57F3C3" />
          <Link to="https://www.behance.net/iblurdesigner">iblurdesigner</Link>
        </div>
      </div>
    </div>

    {/* STYLES */}
    <style jsx>
      {`
        .container {
          display: grid;
          grid-gap: 10px;
          width: 80vw;
          height: 80vh;

          grid-template-columns: 5fr 7fr;
          grid-template-rows: 6fr 3fr 2fr 1fr;
        }

        .title {
          width: 30vw;
        }

        .image {
          grid-column: 2 / 3;
          grid-row: 1/5;
          overflow: hidden;

          color: white;
          text-align: center;
        }

        .subtitles {
          color: white;
          font-size: 1.5rem;
        }

        h1 {
          font-family: '-apple-system', sans-serif;
          font-weight: 900;
          font-size: 4rem !important;
          color: white;
        }

        small {
          color: white;
        }

        img {
          width: auto;
          height: auto;
        }

        button {
          width: 220px;
          background: transparent;
          border: solid 1px ${colors.turkey};
          color: ${colors.turkey};
          cursor: pointer;
          border-radius: 9999px;
          padding: 8px 24px;
          transition: opacity 0.3s ease;
          font-size: 1.5rem;
          font-weight: bold;
        }

        button a {
          color: ${colors.turkey};
        }

        .redes {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }

        .iconos {
          display: flex;
          flex-direction: row;
        }

        .iconos > :global(a) {
          color: ${colors.turkey};
          margin-left: 10px;
        }
      `}
    </style>
  </>
)

export default Home
