import React from 'react'
import { useForm, ValidationError } from '@formspree/react'

import { colors, fonts } from '../../styles/theme'

export default function Form() {
  const [state, handleSubmit] = useForm('contactMe')

  if (state.succeeded) {
    return <h3 className="thanks">Thanks! I’ll be contact with you</h3>
  }

  function clearContents() {
    document.getElementById('mensajito').value = ''
  }

  return (
    <>
      <div className="box-form">
        <form onSubmit={handleSubmit}>
          <div className="items">
            <input type="text" placeholder="Name" name="name" />
            <input type="text" placeholder="Email" name="email" />
            <ValidationError
              field="email"
              prefix="Email"
              errors={state.errors}
            />
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
            <textarea
              onFocus={clearContents}
              name="message"
              id="mensajito"
              cols="30"
              rows="10"
            >
              Additional details
            </textarea>
          </div>
          <button type="submit" disabled={state.submitting}>
            Submit
          </button>
          <ValidationError errors={state.errors} />
        </form>
      </div>

      <style jsx>
        {`
          i {
            color: ${colors.turkey};
            font-size: 1.5rem;
            padding-right: 15px;
          }

          a {
            color: ${colors.turkey};
            text-decoration: none;
          }

          .box-form {
            background: #f7f7f7;
            border-radius: 1rem;

            width: 600px;
            height: max-content;
            margin: 0 auto;
          }

          form {
            padding: 15px;
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
            background-color: rgb(213, 251, 239);
            color: rgb(43, 62, 54);
            border: none;
            border-bottom: 3px solid ${colors.turkey};
            padding: 5px 10px;
            border-radius: 10px 10px 0px 0px;
          }

          input:focus {
            outline: none;
            border: solid 2px ${colors.turkey};
            box-shadow: 0 0 5px #b0cfe0;
          }

          label {
            color: rgb(121, 142, 133);
          }

          textarea {
            color: rgb(121, 142, 133);
            font-family: ${fonts.base};
            width: 100%;
            height: 150px;
            background-color: rgb(213, 251, 239);
            border: none;
            border-bottom: 3px solid ${colors.turkey};
            padding: 5px 10px;
            border-radius: 10px 10px 0px 0px;
          }

          textarea:focus {
            outline: none;
            border: solid 2px ${colors.turkey};
            box-shadow: 0 0 5px #b0cfe0;
          }

          button:hover {
            color: white;
            background-color: ${colors.turkey};
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
            .social-icons {
              width: 80%;
            }
          }

          /* phones */
          @media screen and (min-width: 320px) and (max-width: 599px) {
            .social-icons {
              width: 90vw;
              height: 90px;
              margin: 10px 0;
              justify-content: space-between;
            }

            .box-form {
              width: 90vw;
            }

            .form {
              padding: 15px !important;
            }
          }
        `}
      </style>
    </>
  )
}
