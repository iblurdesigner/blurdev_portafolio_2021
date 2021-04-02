import React from 'react'
import { Helmet } from 'react-helmet'
import styles, { globalStyles } from '../components/PortfolioLayout/styles'
import ContentItem from '../components/ContentItem'
import initialState from '../initialState'

const GraphicDesign = () => (
  <>
    <Helmet>
      <title>
        Branding, advertising and some graphic design jobs - Blur Dev Portfolio
      </title>
    </Helmet>
    <h1 className="titleCateg">{initialState.categoriesTitles[0].gd}</h1>
    <div className="port-children">
      <section className="contenido">
        {initialState.gdesign[0].campanias.map((el) => (
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

export default GraphicDesign
