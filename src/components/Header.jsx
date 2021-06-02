import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { colors } from '../styles/theme'

export default function Header() {
  const [ham, setHam] = useState(true)

  const handleClickHam = () => {
    setHam(!ham)
  }

  return (
    <>
      <nav>
        <Link to="/">
          <img
            src="https://storage.googleapis.com/blurdev_portfolio_bucket/logoWeb.png"
            alt="logoeMotivoDev"
          />
        </Link>
        <div className={ham ? 'enlaces' : 'enlaces-activado'}>
          <ul>
            <li>
              <NavLink
                to="/about/"
                activeClassName="is-selected"
                onClick={handleClickHam}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio/"
                activeClassName="is-selected"
                onClick={handleClickHam}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact/"
                activeClassName="is-selected"
                onClick={handleClickHam}
              >
                Get in touch
              </NavLink>
            </li>
          </ul>
        </div>
        <button className="ham" type="button" onClick={handleClickHam}>
          <span className={ham ? 'br-1' : 'br-1-animado'} />
          <span className={ham ? 'br-2' : 'br-2-animado'} />
          <span className={ham ? 'br-3' : 'br-3-animado'} />
        </button>
      </nav>

      <style jsx>
        {`
          div {
            width: 80vw;
            display: flex;

            justify-content: space-between;
            align-items: center;
          }

          nav {
            display: flex;
            width: 100vw;
            height: 80px;
            grid-template-columns: 3fr 2fr;
            padding: 10px;
            align-items: center;
            justify-items: flex-start;
            justify-content: center;

            background-image: linear-gradient(90deg, #1f2441, #006a4a);
          }

          img {
            width: 250px;
            height: auto;
            padding-left: 20px;
          }

          .enlaces {
            width: 500px;
            height: 40px;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            width: 100%;
          }

          li {
            display: inline-block;
            padding-left: 20px;
          }
          li > :global(a) {
            color: white;
            text-decoration: none;
          }

          li > :global(a):hover {
            color: white;
            border-bottom: solid 2px ${colors.turkey};
          }

          li > :global(a.is-selected) {
            border-bottom: solid 2px ${colors.turkey};
          }

           {
            /* hamburguesa */
          }

          button {
            display: none;
            cursor: pointer;
            border: none;
            margin: 0;
            padding: 0;
            background-color: transparent;
          }

          span {
            display: block;
            background-color: #f3f3f3;
            height: 3px;
            width: 28px;
            margin: 10px auto;
            border-radius: 2px;
          }

          @media screen and (min-width: 320px) and (max-width: 599px) {
            body {
              overflow: hidden;
            }

            nav {
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding: 25px 0;
              height: auto;
            }

            button {
              display: block;
              position: absolute;
              top: 15px;
              right: 25px;
              width: 80px;
              transition: 0.2s 0.1s;
            }

            button:hover {
              transform: rotate(360deg);
            }

            img {
              width: 200px;
              padding-left: 25px;
            }

            .enlaces {
              width: 100vw;
              margin: 0px;
              display: none;
            }
            .enlaces {
              display: none;
            }

            .enlaces-activado {
              width: 100vw;
              height: 90vh;
            }

            ul {
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: center;
              width: 100vw;
              height: 50vh;
              margin: 0;
            }

            @keyframes muestraMenu {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }

            li {
              width: 100%;
              text-align: center;
              padding: 15px;
              transition: 0.3s;
              opacity: 0;
              animation: muestraMenu 350ms ease-in-out both;
            }

            li:hover {
              background-color: ${colors.turkey};
            }

            .br-1-animado {
              transform: rotate(-45deg) translate(-10px, 8px);
            }
            .br-2-animado {
              opacity: 0;
            }
            .br-3-animado {
              transform: rotate(45deg) translate(-10px, -8px);
            }
          }
        `}
      </style>
    </>
  )
}
