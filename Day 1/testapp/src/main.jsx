import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Jk from './Jk.jsx'


const anotherElement = (
  <a href="https://www.google.com" target='_blank'>Visit Google</a>
)



const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'click to visit google'
)



createRoot(document.getElementById('root')).render(
      // <App />
      // <Jk /> 

      // anotherElement
      reactElement
    
)
