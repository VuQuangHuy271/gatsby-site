import * as React from "react"
import type { GatsbySSR } from "gatsby"

export const wrapPageElement: GatsbySSR["wrapPageElement"] = ({ element }) => {
  return (
    <div>
      <h1>Hello World ssr</h1>
      {element}
    </div>
  )
}
