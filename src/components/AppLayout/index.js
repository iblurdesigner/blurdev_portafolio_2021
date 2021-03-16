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
        {children}
        <Footer />
      </div>
      <style jsx>{styles}</style>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  )
}
