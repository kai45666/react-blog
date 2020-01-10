import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import './Header.scss'

export class Header extends Component {
  render() {
    return (
      <div>
        <NavLink exact to="/">首页</NavLink>
        <NavLink to="/video">视频</NavLink>
      </div>
    )
  }
}

export default Header
