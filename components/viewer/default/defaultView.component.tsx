import React from 'react'
import SwipeLogo from '../../../static/img/swipe-logo-replace-me.png'

import viewerStyles from '../viewer.styles.scss'
import ReactSVG from 'react-svg'

interface Props {}

export const DefaultView: React.FC<Props> = () => {
  return (
    <div className="viewer">
      <div className="tab-content">
        <div className="tab-pane fade show active" id="chat1" role="tabpanel">
          <div className="item">
            <div className="content">
              <div className="middle">
                <div className="container">
                  <ul>
                    <li>
                      <img src={SwipeLogo} alt="avatar" />
                      <div className="content">
                        <div className="message">
                          <div className="bubble">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry.
                            </p>
                          </div>
                        </div>
                        <span>07:30am</span>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <div className="message">
                          <div className="bubble">
                            <p>Many desktop publishing packages.</p>
                          </div>
                        </div>
                        <span>11:56am</span>
                      </div>
                    </li>
                    <li>
                      <img src={SwipeLogo} alt="avatar" />
                      <div className="content">
                        <div className="message">
                          <div className="bubble">
                            <div className="attachment">
                              <a href="/" className="round">
                                <ReactSVG
                                  beforeInjection={(svg) => {
                                    svg.setAttribute(
                                      'style',
                                      'width: 20px; height: 20px'
                                    )
                                  }}
                                  src="/static/img/svg/file-text.svg"
                                />
                              </a>
                              <div className="meta">
                                <a href="/">
                                  <h5>build-plugins.js</h5>
                                </a>
                                <span>3kb</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <span>01:03pm</span>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <div className="message">
                          <div className="bubble">
                            <p>It was popularised in the 1960s.</p>
                          </div>
                        </div>
                        <span>05:42pm</span>
                      </div>
                    </li>
                    <li>
                      <img src={SwipeLogo} alt="avatar" />
                      <div className="content">
                        <div className="message">
                          <div className="bubble">
                            <p>
                              It is a long established fact that a reader will
                              be distracted.
                            </p>
                          </div>
                        </div>
                        <span>08:20pm</span>
                      </div>
                    </li>
                    <li>
                      <div className="content">
                        <div className="message">
                          <div className="bubble">
                            <p>
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text.
                            </p>
                          </div>
                        </div>
                        <span>
                          10:15pm
                          <ReactSVG
                            beforeInjection={(svg) => {
                              svg.setAttribute(
                                'style',
                                'width: 20px; height: 20px'
                              )
                            }}
                            wrapper="span"
                            src="/static/img/svg/double-tick.svg"
                          />
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{viewerStyles}</style>
      </div>
    </div>
  )
}
