import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { colors } from '../styles/theme'
import logo from '../../public/assets/logoWeb@2x.png'

const Header = () => (
  <>
    <section>
      <div>
        <Link to="/">
          <img src={logo} alt="logoeMotivoDev" />
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink to="/about/" activeClassName="is-selected">
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio/" activeClassName="is-selected">
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact/" activeClassName="is-selected">
                Get in touch
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>

    <style jsx>
      {`
        div {
          width: 80vw;
          display: flex;

          justify-content: space-between;
          align-items: center;
        }

        section {
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

        nav {
          width: 500px;
          height: 40px;
          display: flex;
          flex-direction: row;
        }

        ul {
          display: flex;
          width: 100%;
          justify-content: space-evenly;
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
      `}
    </style>
  </>
)

export default Header
