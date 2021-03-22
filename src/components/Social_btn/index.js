import React from 'react'
import { Link } from 'react-router-dom'
import { colors } from '../../styles/theme'

import Github from '../Icons/Github'
import Linkedin from '../Icons/Linkedin'
import Behance from '../Icons/Behance'

export default function SocialBtn() {
  return (
    <>
      <div className="items">
        <Github fill="#57F3C3" />
        <Link to="https://github.com/iblurdesigner">iblurdesigner</Link>
      </div>
      <div className="items">
        <Linkedin fill="#57F3C3" />
        <Link to="https://www.linkedin.com/in/blurdev/">blurdev</Link>
      </div>
      <div className="items">
        <Behance fill="#57F3C3" />
        <Link to="https://www.behance.net/iblurdesigner">iblurdesigner</Link>
      </div>

      <style jsx>
        {`
          .items {
            display: flex;
            margin-right: 20px;
            justify-content: center;
          }

          .items:nth-child(3) {
            margin-right: 0;
          }

          .items > :global(a) {
            color: ${colors.turkey};
            margin-left: 10px;
          }
        `}
      </style>
    </>
  )
}
