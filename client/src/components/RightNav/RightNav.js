import React, { Component } from 'react'
import './RightNav.scss'

export class RightNav extends Component {
  render() {
    return (
      <div className="right-nav">
        <div className="right-nav-panel flex flex-d flex-j-sa">
          <h3>热门文章</h3>
          <p>文章1</p>
          <p>文章2</p>
          <p>文章3</p>
          <p>文章3</p>
        </div>
        <div className="right-nav-panel flex flex-d flex-j-sa">
          <h3>最新文章</h3>
          <p>文章1</p>
          <p>文章2</p>
          <p>文章3</p>
          <p>文章3</p>
        </div>
        <div className="right-nav-panel flex flex-d flex-j-sa">
          <h3>分类目录</h3>
          <p>文章1</p>
          <p>文章2</p>
          <p>文章3</p>
          <p>文章3</p>
        </div>
      </div>
    )
  }
}

export default RightNav
