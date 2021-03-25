import React from 'react'
import styles, { globalStyles } from '../components/PortfolioLayout/styles'
import ContentItem from '../components/ContentItem'
import initialState from '../initialState'

const JSView = () => (
  <>
    <h1 className="titleCateg">{initialState.categoriesTitles[0].js}</h1>
    <div className="port-children">
      <section className="contenido">
        {initialState.js.map((el) => (
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

export default JSView
