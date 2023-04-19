import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import  GlobalStyle  from './Styles/global'

import { Routes } from './routes'
import {theme}from './Styles/Theme'

import { AuthProvider } from './hooks/auth'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
     <GlobalStyle/>
      <AuthProvider>
      <Routes/>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)



