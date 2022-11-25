import React from 'react'
import styled from 'styled-components'
import LeftNavbar from './Compontents/LeftNavbar'
import TopNavbar from './Compontents/TopNavbar'

const LayoutContainer = styled.main`
    display: flex;
    width: 100%;
    position: relative;
    .childrenCont {
        position: absolute;
        top: 50%;
        left: 35%;
    }
`

function Layout({ children }) {
    return (
        <LayoutContainer>
            <LeftNavbar />
            <TopNavbar />
            <div className='childrenCont'>
                {children}
            </div>
        </LayoutContainer>
    )
}

export default Layout