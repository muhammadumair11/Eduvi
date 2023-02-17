import { ThemeProvider } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import theme from './Theme/theme'

import "./main.css"
import "./Assets/Css/font.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
          <App />
    </ThemeProvider>
  </React.StrictMode>
)
