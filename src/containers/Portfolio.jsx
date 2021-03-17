import React from 'react'
import img1 from '../../public/images/anuncio_grande.jpg'
import img2 from '../../public/images/avatar.png'
import img3 from '../../public/images/buenDato.jpg'
import img4 from '../../public/images/businessCard.jpg'
import img5 from '../../public/images/Disk-CEIQ.jpg'
import img6 from '../../public/images/etiqueta_allen.jpg'
import img7 from '../../public/images/portadaCamp.jpg'
import img8 from '../../public/images/RadioPositiva.jpg'
import img9 from '../../public/images/simuladores.jpg'

const Portfolio = () => (
  <>
    <div className="container">
      <h1 className="box">Latest Work</h1>
      <div className="gallery">
        <nav>
          <p>Web Apps</p>
          <p>React JS</p>
          <p>Flutter</p>
          <p>Javascript</p>
          <p>Responsive Design</p>
          <p>CSS Grid Layout</p>
          <p>Graphic Design</p>
        </nav>
        <section className="portfolio">
          <div className="arts">
            <img src={img1} alt="anuncio grande" />
          </div>
          <div className="arts">
            <img src={img7} alt="a" />
          </div>
          <div className="arts">
            <img src={img3} alt="a" />
          </div>
          <div className="arts">
            <img src={img4} alt="a" />
          </div>
          <div className="arts">
            <img src={img5} alt="a" />
          </div>
          <div className="arts">
            <img src={img6} alt="a" />
          </div>
          <div className="arts">
            <img src={img2} alt="a" />
          </div>
          <div className="arts">
            <img src={img8} alt="a" />
          </div>
          <img src={img9} alt="a" />
          <div className="arts" />
        </section>
      </div>
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

          border: solid 1px blue;
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

        .gallery {
          display: grid;
          grid-gap: 10px;

          grid-template-columns: 1fr 8fr;
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
