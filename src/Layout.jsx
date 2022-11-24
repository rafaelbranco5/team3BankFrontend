import React from 'react'
import styled from 'styled-components'
import Navbar from './Compontents/Navbar'

const LayoutContainer = styled.main`
    display: flex;
`

function Layout({ children }) {
    return (
        <div>
            <LayoutContainer>
                <Navbar />
                {children}
            </LayoutContainer>
        </div>
    )
}

export default Layout