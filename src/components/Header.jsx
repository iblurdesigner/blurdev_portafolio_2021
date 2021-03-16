import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <>
    <section>
      <div>
        <Link to="/">
          <img
            src="https://drive.google.com/uc?export=view&id=1x1_43_I5cNkqI9729VsGs6Qr7h_9o4EX"
            alt="logoeMotivoDev"
          />
        </Link>
        <nav>
          <ul>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/portfolio/">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
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
        img {
          width: auto;
          height: 60px;
          padding-left: 20px;
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
          border-bottom: solid 1px red;
        }
      `}
    </style>
  </>
)

export default Header
