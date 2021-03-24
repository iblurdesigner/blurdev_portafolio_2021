import React from 'react'
import initialState from '../initialState'
import ContentItem from '../components/ContentItem'
import styles, { globalStyles } from '../components/PortfolioLayout/styles'

const Webapps = () => (
  <>
    <div className="port-children">
      <section className="contenido">
        {initialState.webapp.map((el) => (
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

export default Webapps
