import React from 'react'
import _JSXStyle from 'styled-jsx/style'
import Footer from '../Footer'
import Header from '../Header'
import styles, { globalStyles } from './styles'

export default function AppLayout({ children }) {
  return (
    <>
      <div>
        <Header />
        <footer>
          <section>{children}</section>
        </footer>
        <Footer />
      </div>
      <style jsx>{styles}</style>
      <style jsx global>
        {globalStyles}
      </style>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          height: 100%;
          position: relative;
          width: 100%;
        }
        section {
          flex: 1;
        }
      `}</style>
    </>
  )
}
