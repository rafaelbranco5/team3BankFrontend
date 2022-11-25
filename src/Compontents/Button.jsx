import React from 'react'
import styled from 'styled-components'

const ButtonEl = styled.button`
    border: none;
    margin: 1rem;
    background: none;
    background-color: #5a09f1;
    color: white;
    padding: .5rem;
    text-transform: uppercase;
    border-radius: 4px;
    box-shadow: 0px 1px 5px 1px rgba(0,0,0,0.27);
    -webkit-box-shadow: 0px 1px 5px 1px rgba(0,0,0,0.27);
    -moz-box-shadow: 0px 1px 5px 1px rgba(0,0,0,0.27);
    cursor: pointer;
`

const Button = ({text, givenStyles={}}) => {
    return (
        <ButtonEl style={givenStyles}>
            {text}
        </ButtonEl>
    )
}

export default Button