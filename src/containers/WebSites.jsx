import React from 'react'
import ContentItem from '../components/ContentItem'
import initialState from '../initialState'

import styles, { globalStyles } from '../components/PortfolioLayout/styles'

const Websites = () => (
  <>
    <div className="port-children">
      <section className="contenido">
        {initialState.responsived.map((el) => (
          <div className="arts">
            <ContentItem
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

export default Websites
