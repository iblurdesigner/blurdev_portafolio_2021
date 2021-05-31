import React from 'react'
import { Helmet } from 'react-helmet'
import styles, { globalStyles } from '../components/PortfolioLayout/styles'
import ContentItem from '../components/ContentItem'
import initialState from '../initialState'
import meatpro from '../../public/assets/webs/meatpro.png'

const Websites = () => (
  <>
    <Helmet>
      <title>Web sites develop with JS - Blur Dev Portfolio</title>
    </Helmet>
    <h1 className="titleCateg">{initialState.categoriesTitles[0].web}</h1>
    <div className="port-children">
      <section className="contenido">
        {initialState.responsived.map((el) => (
          <div className="arts">
            <ContentItem
              key={el.id}
              title={el.title}
              image={meatpro}
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

export default Websites
