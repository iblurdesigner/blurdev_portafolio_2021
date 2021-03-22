import React from 'react'
import SocialBtn from '../components/Social_btn'

import { fonts } from '../styles/theme'

const Contact = () => (
  <>
    <div className="container">
      <h1>Ready to get started?</h1>
      <div className="social-icons">
        <SocialBtn />
      </div>
      <h3>I’m excited to learn about your project.</h3>
      <div className="box-form">
        <form method="POST">
          <div className="items">
            <input type="text" placeholder="Name" name="name" />
            <input type="text" placeholder="Email" name="email" />
          </div>
          <div className="items">
            <div className="item-project">
              <label htmlFor="projects">Type of project</label>
              <select name="projects" id="projects">
                <option value="react">React JS</option>
                <option value="flutter">Flutter project</option>
                <option value="design">Design</option>
              </select>
            </div>
            <input type="text" placeholder="Budget" name="budget" />
          </div>
          <div className="items">
            <textarea name="message" id="" cols="30" rows="10">
              Additional details
            </textarea>
          </div>
          <button type="button">Submit</button>
        </form>
      </div>
    </div>

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

          border: solid 1px red;
        }

        h1,
        h3 {
          color: white;
          margin-bottom: 0;
          text-align: center;
        }

        .social-icons {
          display: flex;
          width: 70%;
          height: max-content;
          margin: 0 auto;
          justify-content: center;

          border: solid 1px red;
        }

        .box-form {
          background: #f7f7f7;
          border-radius: 1rem;

          width: 600px;
          height: max-content;
          margin: 0 auto;
        }

        form {
          padding: 30px;
        }

        .items {
          margin-bottom: 30px;
          width: 100%;
          display: flex;
          justify-content: space-between;
        }

        .item-project {
          display: flex;
          align-items: center;
          width: 45%;
          justify-content: space-between;
          color: #989898;
        }

        input {
          width: 45%;
        }

        textarea {
          color: #989898;
          font-family: ${fonts.base};
          width: 100%;
          height: 150px;
        }
      `}
    </style>
  </>
)

export default Contact
