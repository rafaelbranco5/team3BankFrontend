import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import serverInstance  from '../api/axiosInstance';
import userEndPoints from '../api/userEndPoints';

const SignUpContainer = styled.div`
    
    font-family: 'Lato', serif;
    h2{
        margin-top: 10%;
        text-align: center;
    }
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
        &[type="email"],
        &[type="password"]{
            position: center;
            margin-bottom: 20px;
            height: 100%;
            width: 100%;
            padding: 5px;
            padding-left: 1rem;
            font-size: 1.5em;
            border: 1px solid #1d1d1d55;
            border-radius: 5px;
        }
    }
    input[type="submit"]{
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
        font-weight: 600;
        border-radius: 5px;
    }
    input{
        &[type="text"]:focus,
        &[type="email"]:focus,
        &[type="password"]:focus{
            background-color: #f7f7f7;
        }
    }
    .input_field:focus + .spandiv{
        color:red;
    }

    button {
        margin-bottom: 20px;
        cursor: pointer;
        width: 103%;
        border: none;
        text-transform: uppercase;
        padding: 1rem;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: 600;
        color: white;
        background-color: var(--primary-color);
    }
`
function SignUp() {
    const [user, setUser] = useState({});

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user.password !== user.confirmPassword)
            return;
        const res = await axios.post("http://localhost:9002/signUp", user);
        console.log(res)
    }

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user);
    }

    return (
        <SignUpContainer>
            <div>
                <h2>Sign Up</h2>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='input_field'>
                    <span>First Name</span>
                    <input onChange={handleChange} type='text' name='firstName' required></input>
                </div>
                <div className='input_field'>
                    <span>Last Name</span>
                    <input onChange={handleChange} type='text' name='lastName' required></input>
                </div>
                <div className='input_field'>
                    <span>Username</span>
                    <input onChange={handleChange} type='text' name='userName' required></input>
                </div>
                <div className='input_field'>
                    <span>Password</span>
                    <input onChange={handleChange} type='password' name='password' required></input>
                </div>
                <div className='input_field'>
                    <span>Confirm Password</span>
                    <input onChange={handleChange} type='password' name='confirmPassword' required></input>
                </div>
                <div className='input_field'>
                    <button type='submit'>Sign Up</button>
                </div>
            </form>
        </SignUpContainer>
    )
}

export default SignUp