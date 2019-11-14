import React from 'react'

import CommentForm from '../comment-form/comment-form.component'

import convoViewerStyles from './convo.styles.scss'
import { OrderConvo } from '../../../redux/viewer/viewer.types'

interface Props {
  convo: OrderConvo
}

const ConvoViewer: React.FC<Props> = (props) => {
  const { convo } = props
  return (
    <div>
      <div className="middle">
        <div className="container">
          <ul>
            <li>
              <div className="content">
                <div className="message">
                  <div className="bubble">
                    <p>Hello</p>
                  </div>
                </div>
                <span>07:30am</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="container comment-form">
        <CommentForm convoId={convo.id} />
      </div>
      <style jsx>{convoViewerStyles}</style>
    </div>
  )
}

export default ConvoViewer
