import React from 'react'
import styled from 'styled-components'

const UserDataFormContainer = styled.div`
  form{
        margin: auto;
        width: 60%;
        margin-top: 5%;
    }
    .input_field{
        height: 50px;
        margin-bottom: 50px;
        width: 100%;
        
    } 
    input{
        &[type="text"],
        &[type="password"]{
            position: center;
            margin-bottom: 20px;
            height: 100%;
            width: 100%;
            padding: 5px;
            font-size: 1.5em;
            border: 1px solid black;
            border-radius: 5px;
        }
    }
    input[type="submit"]{
            margin-bottom: 20px;
            height: 100%;
            width: 103%;
            padding: 5px;
            font-size: 1.5em;
            border: 1px solid darkblue;
            border-radius: 5px;
            color: white;
            background-color: darkblue;
        }
    .input_field span{
        position: absolute;
        padding: 10px;
        transform: translateX(10px) translateY(-20px);
        background-color: white;
        height: 10px;
        width: 150px;
        border-radius: 5px;
    }
    input{
        &[type="text"]:focus,
        &[type="password"]:focus{
            background-color: lightgray;
        }
    }
    .input_field:focus + .spandiv{
        color:red;
    }
`

function UserDataForm() {
  return (
    <UserDataFormContainer>
    <form>
    <div className='input_field'>
      <span>Username</span>
      <input type="text" required/>
    </div>
    <div className='input_field'>
      <span>Password</span>
      <input type="password" required/>
    </div>
      <input type="submit" />
    </form>
    </UserDataFormContainer>
  )
}

export default UserDataForm