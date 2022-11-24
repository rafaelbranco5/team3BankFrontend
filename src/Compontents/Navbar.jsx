import React, { useState } from 'react'
import styled from 'styled-components'
import { IoMdNotifications } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'

const NavbarContainer = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    padding: 0;
    max-height: 40px;
    background-color: #602fff;
    padding: 2rem;
    font-family: 'Lato', serif;
    li {
        list-style: none;
        a {
            text-decoration: none;
            font-size: 1.5rem;
            color: #fff;
        }
        .notifcationContainer {
            display: flex;
        }
        button {
            background-color: #21b121;
            border: none;
            color: white;
            padding: 0.5rem 1rem;
            text-transform: uppercase;
            font-family: 'Open Sans', serif;
            border-radius: 2px;
            font-size: .9rem;
            margin-right: 1rem;
            margin-top: -6px;
            cursor: pointer;
        }
    }
    h2 {
        margin: 0;
        padding: 0;
        color: white;
    }
    .notificationButtonCont{
    }
    .notificationIndicator{
        width: 20px;
        height: 20px;
        background-color: red;
        border-radius: 50%;
        /* z-index: 2; */
        text-align: center;
        color: white;
    }
`

function Navbar() {
    const [notification, setNotification] = useState(true)
    return (
        <NavbarContainer>
            <li>
                <a href="#"><GiHamburgerMenu /> </a>
            </li>
            <li>
                <h2>Real World App</h2>
            </li>
            <li>
                <div className='notifcationContainer'>
                    <button href="#">$ New</button>
                    <div className='notificationButtonCont'>
                        <a href="#"><IoMdNotifications /> </a>
                        {notification && <span className='notificationIndicator'></span>}
                    </div>
                </div>
            </li>
        </NavbarContainer>
    )
}

export default Navbar