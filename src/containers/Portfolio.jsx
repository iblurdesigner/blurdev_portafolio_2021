import React from 'react'
import { Helmet } from 'react-helmet'
import styles, { globalStyles } from '../components/PortfolioLayout/styles'
import ContentItem from '../components/ContentItem'

import initialState from '../initialState'

const Portfolio = () => (
  <>
    <Helmet>
      <title>Latest Jobs - Blur Dev Portfolio</title>
    </Helmet>
    <h1 className="titleCateg">
      {initialState.categoriesTitles[0].portafolio}
    </h1>
    <div className="port-children">
      <section className="contenido">
        {initialState.latestjobs[0].campanias.map((el) => (
          <div className="arts">
            <ContentItem
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
