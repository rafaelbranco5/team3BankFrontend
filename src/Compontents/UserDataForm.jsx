import React from 'react'
import styled from 'styled-components'
import './styles.css'

/*
const UserDataFormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
  input{
    position: relative;
    width: 60%;
    align-items: center;
    justify-content: center;
  }
`
*/
function UserDataForm() {
  return (
    <div className='userform'>
    <form>
    <div className='inputBox'>
      <input type="text" required/>
      <span>Username</span>
    </div>
    <div className='inputBox'>
      <input type="password" required/>
      <span>Password</span>
    </div>
      <input type="submit" />
    </form>
    </div>
  )
}

export default UserDataForm