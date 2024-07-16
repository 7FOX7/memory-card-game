import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createTheme, Typography } from '@mui/material'
import { ThemeProvider } from '@emotion/react'

const theme = createTheme({
  typography: {
    fontFamily: "'Kumbh Sans'"
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <Typography>
      <App />
    </Typography>
  </ThemeProvider>  
  
)
