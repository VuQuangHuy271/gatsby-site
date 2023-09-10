import React from 'react'
import { BrowserRouter, Outlet, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import "./app.css";
import HomeComponent from './home'
import AccountComponent from './account'
import ProductComponent from './product'
import UserComponent from './user'
import { NavMenu } from "../components/NavMenu";
import { AppContent } from "../components/AppContent";
import { AppHeader } from "../components/AppHeader";
import { AppFooter } from "../components/AppFooter";
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
        <BrowserRouter>
            <div className="App">
                <AppHeader />
                <div className="Content">
                    <NavMenu />
                    <Routes>
                        <Route path="/" element={<HomeComponent />} />
                        <Route path="account" element={<AccountComponent />} />
                        <Route path="product" element={<ProductComponent />} />
                        <Route path="user" element={<UserComponent />} /> 
                    </Routes>
                   
                </div>
                <Outlet/>
                <AppFooter />
            </div>
        </BrowserRouter>


    )
}
