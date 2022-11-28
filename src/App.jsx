import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import BankAccount from './pages/BankAccount'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Settings from './pages/Settings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/user/settings" element={<Settings />} /> 
        <Route path="/bankaccount" element={<BankAccount />} /> 
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </div>
    */

    <Router>
      <Navbar />
      <Routes>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
