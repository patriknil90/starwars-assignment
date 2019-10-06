import React from 'react'
import { render } from 'react-dom'
import './index.scss'
import Root from 'root'
import App from './App'

render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
)
