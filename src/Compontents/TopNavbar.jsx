import React, { useState } from 'react'
import styled from 'styled-components'
import { IoMdNotifications } from 'react-icons/io'
import { GiHamburgerMenu } from 'react-icons/gi'
import Button from './Button'
import { Link } from 'react-router-dom'

const NavbarContainer = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    padding: 0;
    max-height: 40px;
    background-color: var(--primary-color);
    padding: 2rem;
    font-family: 'Lato', serif;
    li {
        list-style: none;
        a {
            text-decoration: none;
            font-size: 1.5rem;
            color: #fff;
        }
        button {
            border: none;
            background: none;
            font-size: 1.3rem;
            color: white;
            cursor: pointer;
        }
        .notifcationContainer {
            display: flex;
            button {
                background-color: #21b121;
                padding: 0.5rem 1rem;
                text-transform: uppercase;
                font-family: 'Open Sans', serif;
                border-radius: 2px;
                font-size: .9rem;
                margin-right: 1rem;
                margin-top: -6px;
            }
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
    .extendedNav {
        margin-right: 1rem;
        text-align: left;
        color: white;
        ul {
            display: flex;
            li {
                margin: 1rem;
                button {
                    font-size: 1rem;
                    text-transform: uppercase;
                }
            }
        }
    }
`

function TopNavbar() {
    const [notification, setNotification] = useState(true)
    const [showextendedNav, setShowExtendedNav] = useState(false)
    const extendNav = () => {
        setShowExtendedNav(!showextendedNav);
    }
    return (
        <NavbarContainer>
            <li>
                <button onClick={extendNav}><GiHamburgerMenu /> </button>
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
            {showextendedNav &&
                <li className='extendedNav'>
                    <ul>
                        <li>
                            {/* <Link to={"/personal"}>Everyone</Link> */}
                            <button>Everyone</button>
                        </li>
                        <li>
                            <button>Friends</button>
                        </li>
                        <li>
                            <button>Mine</button>
                        </li>
                    </ul>
                </li>
            }
        </NavbarContainer>
    )
}

export default TopNavbar