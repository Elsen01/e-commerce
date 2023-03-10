import React from 'react'
import ReactDOM from 'react-dom'
import {HelmetProvider} from "react-helmet-async";
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelmetProvider>
            <App />
        </HelmetProvider>
    </React.StrictMode>,
)
