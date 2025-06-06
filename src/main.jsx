import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App.jsx"
import "./index.css"

import ErrorBoundary from "./components/ErrorBoundary"
import { Toaster } from "sonner"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ErrorBoundary>
            <BrowserRouter>
                <App />
                <Toaster richColors />
            </BrowserRouter>
        </ErrorBoundary>
    </React.StrictMode>
)
