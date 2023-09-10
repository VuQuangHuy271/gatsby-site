import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeComponent from './home'
import AccountComponent from './account'
import ProductComponent from './product'
import UserComponent from './user'

export default function App() {
    const router = createBrowserRouter(
        [
            { path: "/home", element: <HomeComponent /> },

            { path: "account", element: <AccountComponent /> },
            { path: "product", element: <ProductComponent /> },
            { path: "user", element: <UserComponent /> }
        ]
    )
    return (
        <RouterProvider router={router} />
    )
}
