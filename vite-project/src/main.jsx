import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp() {
  return (
    <h1>Hello this is my fun moment</h1>
  )
}

const reactElement = React.createElement(
  'a',
  {
    href : 'https://google.com',target : '_blank'
  },
  'Click to visit google!!!'
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
)
