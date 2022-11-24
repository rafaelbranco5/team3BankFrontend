import React from 'react'
import styled from 'styled-components'
import LeftNavbar from './Compontents/LeftNavbar'
import Navbar from './Compontents/Navbar'

const LayoutContainer = styled.main`
    display: flex;
    width: 100%;
`

function Layout({ children }) {
    return (
        <div>
            <LayoutContainer>
                <LeftNavbar />
                <Navbar />
                {children}
            </LayoutContainer>
        </div>
    )
}

export default Layout