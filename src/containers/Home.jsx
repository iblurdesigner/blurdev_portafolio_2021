import React from 'react'
import { Link } from 'react-router-dom'
import _JSXStyle from 'styled-jsx/style'
import styles, { globalStyles } from '../components/AppLayout/styles'

import avatar from '../../public/assets/avatar.png'

import SocialBtn from '../components/Social_btn'

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
        <button type>
          <Link to="/contact/">Get in touch</Link>
        </button>
      </div>
      <div className="redes">
        <SocialBtn />
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

        .redes {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }
      `}
    </style>

    <style jsx>{styles}</style>
    <style jsx global>
      {globalStyles}
    </style>
  </>
)

export default Home
