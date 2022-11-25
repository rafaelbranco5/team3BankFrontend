import React from 'react'
import Layout from '../Layout'
import UserSettings from '../Compontents/UserSettings'
import MainContainer from '../Compontents/MainContainer'

const Settings = () => {
  return (
    <Layout>
      <MainContainer>
        <UserSettings />
      </MainContainer>
    </Layout>
  )
}

export default Settings