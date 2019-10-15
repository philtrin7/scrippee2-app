import React, { useState } from 'react'
import ReactSVG from 'react-svg'
import { useSigninMutation, MeQuery, MeDocument } from '../../generated/graphql'
// import { setAccessToken } from '../../lib/accessToken'
// import Router from 'next/router'
import { toast } from 'react-toastify'

import './signin.scss'

const SigninPage: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [signin] = useSigninMutation()

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    try {
      const response = await signin({
        variables: {
          email,
          password
        },
        update: (store, { data }) => {
          if (!data) {
            return null
          }
          // Update Apollo cache with newly signed-in user
          store.writeQuery<MeQuery>({
            query: MeDocument,
            data: {
              me: data.signin.user
            }
          })
        }
      })
      console.log(response)
    } catch (err) {
      toast.warn(err.graphQLErrors[0].message)
    }

    // if (response && response.data) {
    //   setAccessToken(response.data.signin.accessToken)
    // }

    // Router.push('/')
  }

  return (
    <div className="sign">
      <div className="container">
        <div className="item">
          <form onSubmit={handleSubmit}>
            <h2>Sign in</h2>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
              />
              <button className="btn prepend">
                <ReactSVG src="../../static/img/svg/person-icon.svg" />
              </button>
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <button className="btn prepend">
                <ReactSVG src="../../static/img/svg/lock-icon.svg" />
              </button>
            </div>
            <a href="/">Forgot Password?</a>
            <button type="submit" className="btn primary">
              Sign In
            </button>
            <span>
              Don't have account? <a href="/">Create Account.</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SigninPage
