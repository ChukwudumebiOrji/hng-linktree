import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import { ContactPage } from "./pages/ContactPage"
import {
  createBrowserRouter,
  createRoutesFromChildren,
  Route,
  RouterProvider,
} from "react-router-dom"

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/">
      <Route index element={<App />}></Route>
      <Route path={"/contact"} element={<ContactPage />}></Route>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
