import React from 'react'
import MainContainer from '../Compontents/MainContainer'
import Layout from '../Layout'
import styled from 'styled-components'
import Button from '../Compontents/Button'

const BankAccountContainer = styled.div`
  display: flex;
  font-family: 'Lato', serif;
  text-align: left;
  padding: 2rem;
  color: var(--primary-color);
  justify-content: space-between;
  .innerCont{
    display: flex;
    flex-direction: column;
    .bankName {
      margin: 2rem;
      font-weight: 400;
      font-family: 'Open Sans', serif;
    }
  }

`

const BankAccount = () => {
  return (
    <Layout>
      <MainContainer>
        <BankAccountContainer>
          <div className='innerCont' >
            <h2>Bank Accounts</h2>
            <p className='bankName'>O Hara - Labadie Bank</p>
          </div>
          <div className='innerCont' >
            <Button text="Create"/>
            <Button givenStyles={{backgroundColor: "white", color: "black"}} text="Delete"/>
          </div>
        </BankAccountContainer>
      </MainContainer>
    </Layout>
  )
}

export default BankAccount