import { useState } from 'react'
import './App.css'
import Layout from './Layout'
import Login from './pages/Login'
import Signup from './pages/SignUp'
import Navbar from './Compontents/Navbar'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
  /*  <div className="App">
      <Layout>
      </Layout>
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
