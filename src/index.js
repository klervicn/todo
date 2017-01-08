import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import TodoList from './TodoList.js'
import './index.css'

ReactDOM.render(<App />, document.getElementById('root'))
ReactDOM.render(<TodoList />, document.getElementById('input'))
