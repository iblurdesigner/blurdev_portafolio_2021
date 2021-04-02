import React from 'react'
import { Helmet } from 'react-helmet'
import styles, { globalStyles } from '../components/PortfolioLayout/styles'
import ContentItem from '../components/ContentItem'
import initialState from '../initialState'

const Flutter = () => (
  <>
    <Helmet>
      <title>Flutter apps - Blur Dev Portfolio</title>
    </Helmet>
    <h1 className="titleCateg">{initialState.categoriesTitles[0].flutter}</h1>
    <div className="port-children">
      <section className="contenido">
        {initialState.flutter.map((el) => (
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

export default Flutter
