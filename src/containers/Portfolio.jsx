import React from 'react'

import initialState from '../initialState'

const Imagen = ({ image, title }) => <img src={image} alt={title} />

const Portfolio = () => (
  <>
    <div className="container">
      <h1>Latest Work</h1>
      <section className="portfolio">
        {initialState.gdesign[0].campanias.map((el) => (
          <div className="arts">
            <Imagen key={el.id} image={el.image} title={el.title} />
          </div>
        ))}
      </section>
    </div>

    <style jsx>
      {`
        .container {
          display: grid;
          grid-gap: 10px;
          width: 80vw;
          height: 80vh;
          padding: 0px;

          grid-template-columns: 1fr;
          grid-template-rows: 1fr 8fr;
        }

        h1 {
          color: white;
          font-size: 3rem;
        }

        nav {
          border: solid 1px white;
        }

        section {
          border: solid 1px orange;
        }

        .sidebar {
          display: flex;
          flex-direction: column;
        }

        .portfolio {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
          grid-gap: 5px;
          grid-auto-flow: dense;
          justify-content: center;
          padding: 0 2rem 1rem 2rem;
        }

        .arts {
          margin: 5px;
          display: inline-flex;
          border-radius: 5px;
          background: #f2f2f2;
          overflow: hidden;
          position: relative;

          border: solid 1px yellow;
        }

        .arts img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: all 0.5s ease;
          cursor: pointer;
          border: solid 1px red;
        }

        .level-1 {
          grid-row-end: span 3;
        }
        .level-2 {
          grid-row-end: span 2;
        }
        .level-3 {
          grid-row-end: span 1;
        }
      `}
    </style>
  </>
)

export default Portfolio
