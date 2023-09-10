
import type { HeadFC, PageProps } from "gatsby"
import React from "react";
import App from "./app";


const IndexPage: React.FC<PageProps> = () => {
  return (
    <App/>
  );
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
