import React, { Component } from 'react'
import logo from './Mark_of_Nayru2.png'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Nayru</h2>
        </div>
        <p className='App-intro' />
      </div>
    )
  }
}

export default App
