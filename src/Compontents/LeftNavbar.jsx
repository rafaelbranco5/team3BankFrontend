import React from 'react'
import styled from 'styled-components'
import user from '../assets/user.png'
import { AiFillHome, AiOutlineUser, AiFillBank } from 'react-icons/ai'
import { IoMdNotifications, IoIosLogOut } from 'react-icons/io'


const LeftNavbarContainer = styled.div`
    width: 450px;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 2.1rem;
    margin-left: .5rem;
    font-family: 'Open Sans', serif;
    ul {
        li { list-style: none;}
    }
    .userImg {
        margin-top: -14px;
    }
    .userInfo__content {
        display: flex;
        flex-direction: row;
        div {
            margin-left: 1rem;
            p {
                margin-top: .3rem;
                font-size: .8rem;
            }
        }
    }
    .acountInfo {
        margin-top: 4rem;
        margin-left: 1rem;
        p {
            margin-top: .6rem;
        }
    }
    .navigation {
        li {
            margin: 2rem;
            div {
                cursor: pointer;
                color: #636363;
                display: flex;
                svg {
                    font-size: 1.5rem;
                    margin-right: 1.5rem;
                }
                a {
                    text-decoration: none;
                    color: #636363;
                    font-size: 1rem;
                    font-weight: 600;
                }
            }
        }

        .logOutCont {
            margin-top: 3rem;
        }
    }
`

function LeftNavbar() {
    return (
        <LeftNavbarContainer>
            <ul>
                <li className='userInfo'>
                    <div className='userInfo__content'>
                        <img className='userImg' src={user} width="80px" />
                        <div>
                            <h3>Edgar J.</h3>
                            <p>@Katharina_Bernier</p>
                        </div>
                    </div>
                </li>
                <li className='acountInfo'>
                    <h3>$ 1,681.37</h3>
                    <p>Acount Balance</p>
                </li>
                <li className='navigation'>
                    <ul>
                        <li>
                            <div>
                                <AiFillHome /> 
                                <a href='#'>Home</a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <AiOutlineUser /> 
                                <a href='#'>My account</a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <AiFillBank /> 
                                <a href='#'>Bank Accounts</a>
                            </div>
                        </li>
                        <li>
                            <div>
                                <IoMdNotifications /> 
                                <a href='#'>Notifications</a>
                            </div>
                        </li>
                        <li className='logOutCont'>
                            <div>
                                <IoIosLogOut /> 
                                <a href='#'>Logout</a>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </LeftNavbarContainer>
    )
}

export default LeftNavbar