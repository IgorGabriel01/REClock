import React from 'react'
import ReactDOM from 'react-dom/client'
import { Aside } from './components/aside/Aside'
import App from './App';
import { SectionInfos } from './components/section/SectionInfos'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <SectionInfos title="Entre na sua conta" />
  </React.StrictMode>,
)
