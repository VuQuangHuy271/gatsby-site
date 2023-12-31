import * as React from "react"
import type { GatsbyBrowser } from "gatsby"
import Layout from "./src/components/Layout"

// export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
//   element, props
// }) => {
//   return <Layout {...props}>{element}</Layout>

// }

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>
}

export function wrapRootElement({ element }) {
  return <>{element}</>
}
