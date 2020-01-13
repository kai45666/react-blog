import React, { Component } from 'react'
import './Header.scss'

export class Header extends Component {
  render() {
    return (
      <div class="header">
        <div className="top flex flex-d flex-j-sb">
          <h1>张仿松个人博客</h1>
          <p className="description">张仿松个人博客是一个关注PHP技术的个人博客，提供一个互联网从业者的学习成果和工作经验总结。</p>
        </div>
        <ul className="nav flex">
          <li>首页</li>
          <li>HTML</li>
          <li>CSS</li>
        </ul>
      </div>
    )
  }
}

export default Header
