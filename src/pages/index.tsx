import { Button, Card } from 'antd'
import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"

interface UserResponse {
  fullName: string
  phone: string
  fund: {
    fullName: string
    shortName: string
  }
}
interface ListUserResponse {
  list: UserResponse[]
}

const IndexPage: React.FC<PageProps> = () => {
 
  return (
    <>
      {/* <Card>Xin chao {user.data?.fullName}, {user.data?.fund.fullName}</Card>
      <Button>Xin chao {user.data?.fullName}, {user.data?.fund.fullName}</Button> */}
    </>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page </title>
