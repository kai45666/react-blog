import React, { Component } from 'react'
import RightNav from '../../components/RightNav/RightNav'
import './Home.scss'

export class Home extends Component {
  render() {
    return (
      <div className="home flex flex-j-sb">
        <ul className="left-container">
          {
            [1,2,3,4,5,6,7,8,9].map(item => (
              <li className="flex flex-d flex-j-sa">
                <h2>aaaaaaaaaaaa</h2>
                <p>aaaaaaaaaaaaa 123</p>
                <p>发布于：2019-10-17 10:54:46 作者： 暂无信息 属于：CSS 分类</p>
              </li>
            ))
          }
        </ul>
        <RightNav />
      </div>
    )
  }
}

export default Home
