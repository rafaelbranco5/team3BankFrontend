import React from 'react'
import styled from 'styled-components'

const MainContainerEl = styled.main`
    display: flex;
    background-color: #fdfdfd;
    padding-bottom: 3rem;
    min-width: 50vw;
    -webkit-box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.1); 
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.1);
    border-radius: 3px;
    flex-direction: column;
`

const MainContainer = ({ children }) => {
    return (
        <MainContainerEl>
            {children}
        </MainContainerEl>
    )
}

export default MainContainer