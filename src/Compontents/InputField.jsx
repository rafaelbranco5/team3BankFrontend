import React from 'react'
import styled from 'styled-components'

const InputFieldEl = styled.input`
    margin: .5rem;
    padding: 7px 5px;
    border: 1px solid #cfcfcf;
    border-radius: 3px;
`

const InputField = ({ value, placeholder, name, type }) => {
  return (
    <InputFieldEl value={value} placeholder={placeholder} name={name} type={type} />
  )
}

export default InputField