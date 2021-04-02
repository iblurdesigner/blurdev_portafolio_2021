import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import _JSXStyle from 'styled-jsx/style'
import styles, { globalStyles } from '../components/AppLayout/styles'

import SocialBtn from '../components/Social_btn'
import avatar from '../../dist/assets/avatar.png'

const Home = () => (
  <>
    <Helmet>
      <title>Blur Dev Portfolio - Home</title>
      <meta
        name="description"
        content="I am Front End Developer / Graphic Designer / Freelancer"
      />
      <meta
        name="keywords"
        content="react-js, web-developer, branding, design, webapp"
      />
      <meta property="og:title" content="Blur Dev - Portfolio" />
      <meta
        property="og:description"
        content="David Flores Medrano Portfolio, project about webapp, develop and design"
      />
      <meta property="og:url" content="davidflores.dev" />
      <meta property="og:site_name" content="Blur Dev Portfolio" />
      <meta property="og:locale" content="es_ES" />
      <meta property="og:type" content="article" />
    </Helmet>
    <div className="container">
      <div className="col-1">
        <div className="title">
          <h1>
            Hi,
            <br /> I’m Blur,
            <br />
            web developer
          </h1>
        </div>
        <div className="subtitles">
          <small>Front End Developer / Graphic Designer / Freelancer</small>
        </div>
        <div className="getinTouch">
          <button type>
            <Link to="/contact/">Get in touch</Link>
          </button>
        </div>
        <div className="redes">
          <SocialBtn />
        </div>
      </div>
      <div className="image col-2">
        <img src={avatar} alt="avatar blur" />
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

        .col-1 {
          width: 35vw;
          height: 80vh;
        }

        .col-2 {
          width: revert;
          height: 80vh;
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

        .title,
        .subtitles,
        .getinTouch,
        .redes {
          display: flex;
          justify-content: flex-start;
          width: 100%;
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
