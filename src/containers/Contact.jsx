import React from 'react'
import { FormspreeProvider } from '@formspree/react'
import { Helmet } from 'react-helmet'

import SocialBtn from '../components/Social_btn'
import { colors } from '../styles/theme'

import Form from '../components/Form'

export default function Contact() {
  return (
    <>
      <FormspreeProvider project="1662253782383197626">
        <Helmet>
          <title>Contact me - Blur Dev Portfolio</title>
        </Helmet>
        <div className="container">
          <div className="text-contact">
            <h1>Ready to get started?</h1>
            <div className="social-icons">
              <SocialBtn />
            </div>
            <h3>I’m excited to learn about your project.</h3>
          </div>
          <Form />
        </div>
      </FormspreeProvider>

      <style jsx>
        {`
          .container {
            display: grid;
            grid-gap: 10px;
            width: 80vw;
            height: 80vh;
            padding: 0px;
            padding-top: 50px;

            grid-template-columns: 1fr;
          }

          .text-contact {
            height: 200px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .social-icons {
            display: flex;
            width: 60%;
            height: max-content;
            margin: 0 auto;
            justify-content: space-around;
            justify-content: space-between;
            flex-wrap: wrap;
          }

          h1,
          h3 {
            color: white;
            margin-bottom: 0;
            text-align: center;
          }

          .thanks {
            color: ${colors.turkey};
            margin: 0 auto;
            font-size: 2.5rem;
            text-align: center;
          }

          /* media queries */

          /* desktop */
          @media screen and (min-width: 600px) and (orientation: portrait) {
            .container {
              background: red;
            }
          }

          /* tablets */
          @media screen and (min-width: 600px) and (max-width: 1023px) {
            .container {
              width: 100vw;
              height: min-content;
            }

            .text-contact {
              height: 150px;
              margin-bottom: 30px;
            }
          }

          /* phones */
          @media screen and (min-width: 320px) and (max-width: 599px) {
            .container {
              width: 100vw;
              height: 100vh;
              padding: 15px;
            }

            h1 {
              font-size: 2rem;
            }
            h3 {
              font-size: 1.1rem;
            }
          }
        `}
      </style>
    </>
  )
}
