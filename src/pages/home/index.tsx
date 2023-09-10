import React from 'react'
import { Outlet } from 'react-router-dom'

export default function HomeComponent() {
    return (
        <div>
            <p>Home</p>
            <Outlet/>
        </div>
    )
}
