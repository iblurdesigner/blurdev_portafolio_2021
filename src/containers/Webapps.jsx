import React from 'react'
import initialState from '../initialState'

import styles, { globalStyles } from '../components/PortfolioLayout/styles'

const Item = ({ description, title, url }) => (
  <div>
    <h3 className="title_item">{title}</h3>
    <p className="p_description">{description}</p>
    <button type>
      <a href={url}>View project</a>
    </button>
  </div>
)

const Webapps = () => (
  <>
    <div className="port-children">
      <section className="contenido">
        {initialState.webapp.map((el) => (
          <div className="arts">
            <Item
              key={el.id}
              description={el.description}
              title={el.title}
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

export default Webapps
