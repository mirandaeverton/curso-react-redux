import './index.css'
import { createRoot } from 'react-dom/client'
import React from 'react'

import App from './views/App'

const root = createRoot(document.getElementById('root'))

root.render(
    <App />
)