import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import TodoList from './TodoList.js'
import './index.css'

ReactDOM.render(<Header />, document.getElementById('root'))
ReactDOM.render(<TodoList />, document.getElementById('input'))
