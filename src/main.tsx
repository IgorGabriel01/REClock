import React from 'react'
import ReactDOM from 'react-dom/client'
import { Aside } from './components/aside/Aside'
import { SectionInfos } from './components/section/SectionInfos'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Aside />
    <SectionInfos title="Entre na sua conta" />
  </React.StrictMode>,
)
