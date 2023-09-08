
import type { HeadFC, PageProps } from "gatsby"
import "./App.css";
import React from "react";
import { NavMenu } from "../components/NavMenu";
import { AppContent } from "../components/AppContent";
import { AppHeader } from "../components/AppHeader";
import { AppFooter } from "../components/AppFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoutes } from "../components/AppRoutes";
import AccountComponent from "./account";
import ProductComponent from "./product";
import TestComponent from "./test";




const IndexPage: React.FC<PageProps> = () => {

  return (
    <div className="App">
      <AppHeader />
      <div className="Content">
        <NavMenu />
        <div className="main-content" style={{width: '100%', height: '100%'}}>
          <BrowserRouter>
              <Routes>
                <Route path="/" element = {<ProductComponent /> } />
                <Route path="account" element = {<AccountComponent /> } />
                <Route path="product" element = {<ProductComponent /> } />
                <Route path="test" element = {<TestComponent /> } />
            </Routes>
          </BrowserRouter>
          </div>
      </div>
      <AppFooter />
    </div>
  );
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
