import React from "react";
import { AppRoutes } from "../AppRoutes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestComponent from "../../pages/test";
import ProductComponent from "../../pages/product";
import AccountComponent from "../../pages/account";

export const AppContent = () => {
  return (
    <div className="main-content" style={{width: '100%', height: '100%'}}>
      <BrowserRouter>
          <AppRoutes/>
          {/* <Routes>
              <Route path="/" element = {<ProductComponent /> } />
              <Route path="account" element = {<AccountComponent /> } />
              <Route path="product" element = {<ProductComponent /> } />
              <Route path="test" element = {<TestComponent /> } />
          </Routes> */}
      </BrowserRouter>
    </div>
  );
}


