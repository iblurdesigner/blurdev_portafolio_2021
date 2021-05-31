import React from 'react'
import { Helmet } from 'react-helmet'
import styles, { globalStyles } from '../components/PortfolioLayout/styles'
import ContentItem from '../components/ContentItem'
import initialState from '../initialState'
import webappImg from '../../public/assets/webapp/petgram.jpg'

const Webapps = () => (
  <>
    <Helmet>
      <title>Webapps - Blur Dev Portfolio</title>
    </Helmet>
    <h1 className="titleCateg">{initialState.categoriesTitles[0].webapp}</h1>
    <div className="port-children">
      <section className="contenido">
        {initialState.webapp.map((el) => (
          <div className="arts">
            <ContentItem
              key={el.id}
              title={el.title}
              image={webappImg}
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

export default Webapps
