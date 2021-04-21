import React from 'react'

const Footer = () => (
  <>
    <div className="Footer">
      <p>©2021, Built with ❤️ by Blur</p>
    </div>

    <style jsx>
      {`
        .Footer {
          display: flex;
          width: 80vw;
          justify-content: space-around;
          position: relative;
          bottom: 0;
          margin-top: 40px;
        }
        p {
          color: white;
        }
      `}
    </style>
  </>
)

export default Footer
