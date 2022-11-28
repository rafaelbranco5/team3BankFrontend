import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import BankAccount from './pages/BankAccount'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Settings from './pages/Settings'
import SignUp from './pages/SignUp'

function App() {
  const [token, setToken] = useState(0)

  // if(!token) return <Login setToken={setToken} />

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/user/settings" element={<Settings />} /> 
        <Route path="/bankaccount" element={<BankAccount />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </div>
  )
}

export default App
