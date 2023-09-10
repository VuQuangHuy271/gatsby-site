
import type { HeadFC, PageProps } from "gatsby"
import "./index.css";
import React from "react";
import { NavMenu } from "../components/NavMenu";
import { AppContent } from "../components/AppContent";
import { AppHeader } from "../components/AppHeader";
import { AppFooter } from "../components/AppFooter";

const IndexPage: React.FC<PageProps> = () => {
  // const router = createBrowserRouter(
  //   [
  //     {
  //       path: "/", element: <HomeComponent />, children: [
  //         { path: "/account1", element: <AccountComponent /> },
  //         { path: "/product", element: <ProductComponent /> },
  //         { path: "/user", element: <UserComponent /> }
  //       ]
  //     },
  //     { path: "/account1", element: <AccountComponent /> },
  //   ]
  // )
  return (
    <div className="App">
      <AppHeader />
      <div className="Content">
        <NavMenu />
        <AppContent/>
        {/* <RouterProvider router={router} /> */}
      </div>
      <AppFooter />
    </div>
  );
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
