import React from 'react'
import { colors } from '../../styles/theme'

export default function Button({ children, onClick }) {
  return (
    <>
      <button type="button" onClick={onClick}>
        {children}
      </button>

      <style jsx>
        {`
          button {
            border: solid 1px ${colors.turkey};
            color: ${colors.turkey};
            cursor: pointer;
            border-radius: 9999px;
            padding: 8px 24px;
            transition: opacity 0.3s ease;
          }

          button:hover {
            opacity: 0.7;
          }
        `}
      </style>
    </>
  )
}
