import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AccountComponent from "../../pages/account";
import ProductComponent from "../../pages/product";
import UserComponent from "../../pages/user";
import HomeComponent from "../../pages/home";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeComponent />}>
                    <Route path="account" element={<AccountComponent />} />
                    <Route path="product" element={<ProductComponent />} />
                    <Route path="user" element={<UserComponent />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
