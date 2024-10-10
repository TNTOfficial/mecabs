import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppBar from './components/appBar'
interface LayoutProps {
    children: React.ReactNode
}
const Layout = ({ children }: LayoutProps) => {
    return <>
        <Navbar />
        {children}
        <Footer />
        <AppBar />
    </>
}

export default Layout
