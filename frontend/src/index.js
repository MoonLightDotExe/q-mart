import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { UserProvider } from './context/userContext'
import { QmartProvider } from './context/QmartContext'

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <UserProvider>
    <QmartProvider>
      <App />
    </QmartProvider>
  </UserProvider>
)
