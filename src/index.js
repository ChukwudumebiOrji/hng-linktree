import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { ContactPage } from "./pages/ContactPage"
import {
  BrowserRouter, Routes, Route 
} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
