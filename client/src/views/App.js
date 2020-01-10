import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {receiveUser} from '../store/actions'
import Header from '../components/Header/Header'
import Home from './Home/Home'
import Video from './Video/Video'

export class App extends Component {
  handleClick = () => {
    this.props.receiveUser({username: '123', type: 2})
  }
  componentDidMount() {
    console.log(this.props.user, 111)
  }
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/video" component={Video} />
        </Router>
        <button onClick={this.handleClick}>点击</button>
      </div>
    )
  }
}

export default connect(
  state => ({user: state.user}),
  {receiveUser}
)(App)
