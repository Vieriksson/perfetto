import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './app'

const div = document.createElement('div')
div.id = 'mount'
document.body.appendChild(div)

ReactDOM.render(React.createElement(App), document.getElementById('mount'))
