import React from 'react'
import styled from 'styled-components'
import online_test from '../assets/online_test.svg'
import InputField from './InputField'

const UserSettingsCont = styled.div`
    display: flex;
    background-color: #fdfdfd;
    padding-bottom: 3rem;
    -webkit-box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.1); 
    box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.1);
    border-radius: 3px;
    flex-direction: column;
    img {
        height: 250px;
    }
    h2 {
        margin: 2rem;
        text-align: left;
        font-family: 'Open Sans', serif;
        font-weight: 600;
        color: var(--primary-color);
    }
   
    .main_content {
        display: flex;
        margin-left: 2rem;
    }
    form {
        display: flex;
        flex-direction: column;
        margin-right: 5rem;
        margin-left: 1rem;
        input {
            width: 400px;
            font-size: 1rem;
        }
        button {
            border: none;
            margin: .5rem;
            margin-top: 1.5rem;
            background: none;
            background-color: #5a09f1;
            color: white;
            padding: .5rem;
            text-transform: uppercase;
            width: 60px;
            border-radius: 4px;
            cursor: pointer;
        }
    }
`

const UserSettings = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <UserSettingsCont>
            <h2>User Settings</h2>
            <div className='main_content'>
                <img src={online_test} />
                <form>
                    <InputField placeholder='Edgar' name="firstName" type="text" />
                    <InputField placeholder='Johns' name="lastName" type="text" />
                    <InputField placeholder='Norene39@yahoo.com' name="email" type="email" />
                    <InputField placeholder='6253169882' name="phone" type="tel" />
                    <button onSubmit={handleSubmit}>Save</button>
                </form>
            </div>
        </UserSettingsCont>
    )
}

export default UserSettings