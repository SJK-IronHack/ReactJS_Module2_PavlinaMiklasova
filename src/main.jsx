import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AllProjectContextProvider from '../Contexts/AllProjectsContext.jsx'


import {createTheme, MantineProvider } from '@mantine/core';
import '@mantine/carousel/styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MantineProvider>
      <AllProjectContextProvider>
    <App />
      </AllProjectContextProvider>
    </MantineProvider>
  </React.StrictMode>,
)
