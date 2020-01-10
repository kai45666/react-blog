import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from '../components/Header/Header'
import Home from './Home/Home'
import Video from './Video/Video'

export class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/video" component={Video} />
        </Router>
      </div>
    )
  }
}

export default App
