import React, { Component } from 'react'
import logo from './Mark_of_Nayru2.png'
import './Header.css'

class Header extends Component {
  render () {
    return (
      <div className='Header'>
        <div className='Header-header'>
          <img src={logo} className='Header-logo' alt='logo' />
          <h2>Todo list</h2>
        </div>
        <p className='Header-intro' />
      </div>
    )
  }
}

export default Header
