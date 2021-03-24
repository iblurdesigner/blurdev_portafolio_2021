import React from 'react'
import styles, { globalStyles } from '../components/PortfolioLayout/styles'

import initialState from '../initialState'

const Item = ({ description, title, url, image }) => (
  <div>
    <h3 className="title_item">{title}</h3>
    <img src={image} />
    <p className="p_description">{description}</p>
    <button type>
      <a href={url}>View project</a>
    </button>
  </div>
)

const Portfolio = () => (
  <>
    <div className="port-children">
      <section className="contenido">
        {initialState.gdesign[0].campanias.map((el) => (
          <div className="arts">
            <Item
              key={el.id}
              title={el.title}
              image={el.image}
              description={el.description}
              url={el.url}
            />
          </div>
        ))}
      </section>
    </div>

    <style jsx>{styles}</style>
    <style jsx global>
      {globalStyles}
    </style>
  </>
)

export default Portfolio
